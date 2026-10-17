(function () {
  "use strict";

  const DB = window.DRUG_DB;
  const byId = new Map(DB.drugs.map((d) => [d.id, d]));
  const PMDA_SEARCH_URL = "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/";
  const keggSearchUrl = (q) => "https://www.kegg.jp/medicus-bin/search_drug?display=med&search_keyword=" + encodeURIComponent(q);

  // Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
      fitDetail();
    });
  });

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // Match regardless of hiragana/katakana, full/half width, case, spaces and punctuation.
  // The long-vowel mark is dropped too, so ドーパミン finds ドパミン.
  function normalize(s) {
    return String(s || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60))
      .replace(/[\s・\-ー()「」、,.。%/]/g, "");
  }

  const index = DB.drugs.map((d) => ({
    drug: d,
    keys: [d.name, ...(d.aliases || []), ...(d.kana || [])].map((k) => ({ raw: k, norm: normalize(k) })),
  }));

  function search(query) {
    const q = normalize(query);
    if (!q) return [];
    const results = [];
    index.forEach(({ drug, keys }) => {
      let best = null;
      keys.forEach((k, i) => {
        const pos = k.norm.indexOf(q);
        if (pos < 0) return;
        // prefix matches first, then the drug's own name before aliases
        const score = (pos === 0 ? 0 : 10) + (i === 0 ? 0 : 1);
        if (!best || score < best.score) best = { score, key: k.raw, isName: i === 0 };
      });
      if (best) results.push({ drug, ...best });
    });
    return results.sort((a, b) => a.score - b.score || a.drug.name.localeCompare(b.drug.name, "ja")).slice(0, 8);
  }

  function findExact(text) {
    const q = normalize(text);
    if (!q) return null;
    const hit = index.find(({ keys }) => keys.some((k) => k.norm === q));
    return hit ? hit.drug : null;
  }

  function unitText(drug) {
    return drug.forms && drug.forms.length ? drug.forms.join(" / ") : drug.type === "fluid" ? "輸液" : "";
  }

  // ---- Suggest (autocomplete) ----
  function attachSuggest(input, list, onPick, onNoMatch) {
    let items = [];
    let active = -1;
    let blurTimer = null;

    function close() {
      list.hidden = true;
      list.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
      active = -1;
    }

    function render() {
      items = search(input.value);
      if (!items.length) {
        close();
        return;
      }
      list.innerHTML = items
        .map(
          (r, i) => `<li role="option" id="${list.id}-${i}" data-i="${i}" class="suggest-item${i === active ? " is-active" : ""}">
            <span class="suggest-name">${escapeHtml(r.drug.name)}</span>
            ${r.isName ? "" : `<span class="suggest-alias">別名: ${escapeHtml(r.key)}</span>`}
            ${unitText(r.drug) ? `<span class="suggest-unit">${escapeHtml(unitText(r.drug))}</span>` : ""}
          </li>`
        )
        .join("");
      list.hidden = false;
      input.setAttribute("aria-expanded", "true");
    }

    function pick(drug) {
      input.value = drug.name;
      close();
      onPick(drug);
    }

    function commitTyped() {
      const text = input.value.trim();
      if (!text) return;
      const exact = findExact(text);
      if (exact) return pick(exact);
      const first = search(text)[0];
      if (first) return pick(first.drug);
      close();
      onNoMatch(text);
    }

    input.addEventListener("input", () => {
      active = -1;
      render();
    });
    // Re-focusing quickly must cancel the close scheduled by the previous blur.
    input.addEventListener("focus", () => {
      clearTimeout(blurTimer);
      render();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (!items.length) return;
        e.preventDefault();
        active = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        render();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (active >= 0 && items[active]) pick(items[active].drug);
        else commitTyped();
      } else if (e.key === "Escape") {
        close();
      }
    });
    // pointerdown so the pick happens before the input loses focus
    list.addEventListener("pointerdown", (e) => {
      const li = e.target.closest(".suggest-item");
      if (!li) return;
      e.preventDefault();
      pick(items[Number(li.dataset.i)].drug);
    });
    input.addEventListener("blur", () => {
      blurTimer = setTimeout(close, 150);
    });
    input.addEventListener("change", commitTyped);
  }

  function sourceBlock(source, extra) {
    return `<div class="drug-source">
      <p>${extra || "この情報は医薬品の添付文書(電子添文)を元に作成しています。"}</p>
      ${source ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${window.icon("note")} ${escapeHtml(source.label)}</a><span class="drug-url">${escapeHtml(source.url)}</span>` : ""}
      <p class="drug-checked">確認時期: ${escapeHtml(DB.checkedAt)}。添付文書は改訂されるため、使用前に必ず最新版を確認してください。</p>
    </div>`;
  }

  // ---- 薬検索 ----
  const q = document.getElementById("drug-q");
  const detail = document.getElementById("drug-detail");
  const empty = document.getElementById("drug-empty");
  const msg = document.getElementById("drug-msg");

  function list(title, items, cls) {
    if (!items || !items.length) return "";
    return `<section class="drug-sec ${cls || ""}"><h3>${title}</h3><ul>${items.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul></section>`;
  }

  function showDrug(drug) {
    msg.textContent = "";
    empty.hidden = true;
    const isRef = drug.type === "group" || drug.type === "fluid";
    detail.innerHTML = `
      <div class="drug-head">
        <h2>${escapeHtml(drug.name)}</h2>
        ${drug.category ? `<span class="drug-cat">${escapeHtml(drug.category)}</span>` : ""}
      </div>
      ${drug.aliases && drug.aliases.length ? `<p class="drug-row"><b>別名・販売名</b>${escapeHtml(drug.aliases.join("、"))}</p>` : ""}
      ${unitText(drug) ? `<p class="drug-row"><b>規格・単位</b>${escapeHtml(unitText(drug))}</p>` : ""}
      <div class="drug-body">
        ${isRef ? `<p class="drug-summary">${escapeHtml(drug.summary || "")}</p>` : ""}
        ${list("効能・効果", drug.indications, "sec-ind")}
        ${isRef ? "" : drug.contraindications && drug.contraindications.length
          ? list("禁忌(抜粋)", drug.contraindications, "sec-contra")
          : `<section class="drug-sec sec-contra"><h3>禁忌(抜粋)</h3><p class="drug-none">登録なし。添付文書の「禁忌」を確認してください。</p></section>`}
        ${list("注意・取り扱い", drug.notes, "sec-note")}
        ${isRef ? "" : sourceBlock(drug.source)}
        <a class="drug-more" href="${escapeHtml(keggSearchUrl(drug.name.replace(/\(.*\)/, "")))}" target="_blank" rel="noopener">${window.icon("chevron-right")} KEGGで他の製品・添付文書の全文を見る</a>
      </div>`;
    detail.hidden = false;
    detail.querySelector(".drug-body").scrollTop = 0;
    fitDetail();
  }

  function showNoMatch(text) {
    detail.hidden = true;
    empty.hidden = false;
    requestAnimationFrame(fitDetail);
    msg.innerHTML = `「${escapeHtml(text)}」はアプリに未登録です。<a href="${escapeHtml(keggSearchUrl(text))}" target="_blank" rel="noopener">KEGGで「${escapeHtml(text)}」を検索</a> / <a href="${PMDA_SEARCH_URL}" target="_blank" rel="noopener">PMDAの添付文書検索</a>`;
  }

  attachSuggest(q, document.getElementById("drug-q-list"), showDrug, showNoMatch);
  q.addEventListener("input", () => {
    if (!q.value.trim()) {
      detail.hidden = true;
      empty.hidden = false;
      msg.textContent = "";
      fitDetail();
    }
  });

  document.getElementById("drug-chips").innerHTML = DB.drugs
    .filter((d) => d.type !== "group" && d.type !== "fluid")
    .map((d) => `<button type="button" class="drug-chip" data-id="${escapeHtml(d.id)}">${escapeHtml(d.name)}</button>`)
    .join("");
  document.getElementById("drug-chips").addEventListener("click", (e) => {
    const btn = e.target.closest(".drug-chip");
    if (!btn) return;
    const drug = byId.get(btn.dataset.id);
    q.value = drug.name;
    showDrug(drug);
  });

  // The detail (or the drug list) scrolls inside its box so the page itself stays one screen.
  function fitBox(box, min) {
    box.style.maxHeight = "";
    const rest = document.body.scrollHeight - box.offsetHeight;
    box.style.maxHeight = Math.max(min, Math.floor(window.innerHeight - rest) - 2) + "px";
  }
  function fitDetail() {
    if (!document.getElementById("tab-search").classList.contains("active")) return;
    if (!detail.hidden) fitBox(detail.querySelector(".drug-body"), 140);
    else if (!empty.hidden) fitBox(document.getElementById("drug-chips"), 80);
  }
  window.addEventListener("resize", fitDetail);
  window.addEventListener("load", fitDetail);
  // The Android app reports the status/navigation bar sizes a moment later, as styles on <html>.
  new MutationObserver(fitDetail).observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

  // ---- 配合変化 ----
  const picked = { a: null, b: null };
  const resultBtn = document.getElementById("compat-result");
  const mark = document.getElementById("compat-mark");
  const label = document.getElementById("compat-label");
  let reasonHtml = "";

  // An explicit record wins; otherwise a "do not mix with other drugs" statement in either insert means ×.
  function findCompat(a, b) {
    const rec = DB.compat.find((c) => (c.pair[0] === a.id && c.pair[1] === b.id) || (c.pair[0] === b.id && c.pair[1] === a.id));
    if (rec) return rec;
    const ruled = [a, b].find((d, i) => d.mixRule && !d.mixRule.except.includes((i === 0 ? b : a).id));
    if (!ruled) return null;
    return {
      result: "x",
      reason: `${ruled.name}:${ruled.mixRule.reason}`,
      source: ruled.mixRule.source || ruled.source,
    };
  }

  function renderCompat() {
    resultBtn.className = "compat-result";
    const { a, b } = picked;
    if (!a || !b) {
      mark.textContent = "?";
      label.textContent = "2つの薬を選んでください";
      resultBtn.disabled = true;
      return;
    }
    resultBtn.disabled = false;
    if (a.id === b.id) {
      mark.textContent = "ー";
      label.textContent = "同じ薬が選ばれています";
      resultBtn.classList.add("is-none");
      reasonHtml = "<h3>同じ薬です</h3><p>別の薬を選んでください。</p>";
      return;
    }
    const rec = findCompat(a, b);
    const notes = [a, b].filter((d) => d.compatNote).map((d) => `<p class="compat-note">${window.icon("alert")} ${escapeHtml(d.name)}:${escapeHtml(d.compatNote)}</p>`).join("");
    if (rec) {
      const ok = rec.result === "o";
      mark.textContent = ok ? "〇" : "×";
      label.textContent = (ok ? "配合可の記載あり" : "配合不可(配合変化あり)") + " — タップで理由";
      resultBtn.classList.add(ok ? "is-ok" : "is-ng");
      reasonHtml = `<h3 class="${ok ? "tone-success" : "tone-danger"}">${ok ? "〇 配合可の記載あり" : "× 配合不可(配合変化あり)"}</h3><p>${escapeHtml(rec.reason)}</p>${notes}${sourceBlock(rec.source)}`;
    } else {
      mark.textContent = "ー";
      label.textContent = "情報なし — タップで詳細";
      resultBtn.classList.add("is-none");
      reasonHtml = `<h3>ー 情報なし</h3><p>この組み合わせは登録されている添付文書の記載にありません。配合してよいかは不明のため、配合変化表や薬剤師に確認してください。</p>${notes}`;
    }
  }

  // The reason opens as a popup so the compatibility screen itself always fits one screen.
  resultBtn.addEventListener("click", () => {
    if (resultBtn.disabled) return;
    const { a, b } = picked;
    const overlay = document.createElement("div");
    overlay.className = "consent-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML = `<div class="consent-box compat-reason" id="compat-reason">
        <p class="compat-pair">${escapeHtml(a.name)} × ${escapeHtml(b.name)}</p>
        ${reasonHtml}
        <button class="btn-secondary compat-close" type="button">閉じる</button>
      </div>`;
    const close = () => {
      overlay.remove();
      resultBtn.focus();
    };
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.closest(".compat-close")) close();
    });
    document.body.appendChild(overlay);
    overlay.querySelector(".compat-close").focus();
  });

  ["a", "b"].forEach((key) => {
    const input = document.getElementById("compat-" + key);
    attachSuggest(
      input,
      document.getElementById(`compat-${key}-list`),
      (drug) => {
        picked[key] = drug;
        renderCompat();
      },
      (text) => {
        picked[key] = null;
        renderCompat();
        label.textContent = `「${text}」は未登録です`;
      }
    );
    input.addEventListener("input", () => {
      if (picked[key] && input.value !== picked[key].name) {
        picked[key] = null;
        renderCompat();
      }
    });
  });
  fitDetail();
})();
