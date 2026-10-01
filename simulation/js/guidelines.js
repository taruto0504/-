// AI評価が参照する医療ガイドライン集（2026年10月時点で確認した最新版の要点）。
// シナリオの疾患名・主訴・既往歴などから関係するものを選び、AIへの指示に添える。
// 要点は教育用の要約であり、詳細や最新の改訂は各ガイドラインの原文を確認すること。
// minds：Mindsガイドラインライブラリの掲載ページ（掲載が確認できたもの）

const JCS_LIST = "https://www.j-circ.or.jp/guideline/form-kankoubutsu-guideline_current-htm/";

// Mindsガイドラインライブラリ（日本医療機能評価機構）：評価・選定された国内の診療ガイドラインを公開している
export const MINDS_URL = "https://minds.jcqhc.or.jp/";

export const GUIDELINES_CHECKED = "2026年10月";

export const GUIDELINES = [
  {
    id: "jrc2025",
    title: "JRC蘇生ガイドライン2025",
    org: "日本蘇生協議会",
    year: "2025（書籍 2026年7月）",
    url: "https://www.japanresuscitationcouncil.org/",
    keywords: ["心停止", "心肺停止", "CPA", "蘇生", "CPR", "VF", "心室細動", "無脈", "PEA", "心静止", "AED", "除細動", "ROSC"],
    points: [
      "反応がなく普段どおりの呼吸がなければ心停止と判断し、ただちに胸骨圧迫を開始する（約5cm、100〜120回/分、中断を最小限に）",
      "AEDまたは除細動器を早期に使用し、ショック後はすぐに胸骨圧迫を再開する",
      "ショック非適応リズム（PEA・心静止）では早期にアドレナリンを投与し、可逆的な原因（低酸素、循環血液量減少、高/低カリウム、低体温、緊張性気胸、タンポナーデ、中毒、血栓）を検索する",
      "自己心拍再開後は低酸素・高酸素を避け、血圧・体温を管理する（心停止後症候群の管理）",
    ],
  },
  {
    id: "jssg2024",
    title: "日本版敗血症診療ガイドライン2024（J-SSCG2024）",
    org: "日本集中治療医学会・日本救急医学会",
    year: "2024",
    url: "https://www.jsicm.org/pdf/cq/J-SSCG2024/J-SSCG2024_Main.pdf",
    minds: "https://minds.jcqhc.or.jp/summary/c00895/",
    keywords: ["敗血症", "セプシス", "sepsis", "敗血性", "感染", "発熱", "腎盂腎炎", "胆管炎", "蜂窩織炎"],
    points: [
      "感染症が疑われ、臓器障害（SOFAスコア2点以上の上昇）を伴えば敗血症。病院前・一般病棟ではqSOFA（呼吸数22回/分以上、意識変容、収縮期血圧100mmHg以下）を拾い上げに用いる",
      "敗血症性ショック：十分な輸液でも平均血圧65mmHg以上の維持に血管収縮薬を要し、乳酸値2mmol/Lを超える状態",
      "血液培養2セットを採取し、できるだけ早く（目安1時間以内）適切な抗菌薬を開始する。感染巣のコントロールを検討する",
      "初期輸液は晶質液を用い、平均血圧65mmHg以上を目標に、反応をみながら行う。第一選択の血管収縮薬はノルアドレナリン",
    ],
  },
  {
    id: "acs2018",
    title: "急性冠症候群ガイドライン（2018年改訂版）",
    org: "日本循環器学会",
    year: "2018（2019年更新）",
    url: JCS_LIST,
    keywords: ["心筋梗塞", "AMI", "STEMI", "NSTEMI", "急性冠症候群", "ACS", "狭心症", "胸痛", "胸部痛", "胸部圧迫"],
    points: [
      "胸痛患者では来院後10分以内に12誘導心電図を記録・評価し、ST上昇の有無で治療方針を分ける",
      "STEMIでは発症からの時間を意識し、来院から再灌流（PCI）までの時間をできるだけ短くする（目標90分以内）",
      "禁忌がなければアスピリンを早期に投与する。SpO2が保たれている患者へのルーチンの酸素投与は推奨されない（低酸素血症時に投与）",
      "右室梗塞や低血圧ではニトログリセリンで血圧低下を招くことがあり注意する。不整脈・心原性ショック・機械的合併症の出現に注意する",
    ],
  },
  {
    id: "hf2025",
    title: "2025年改訂版 心不全診療ガイドライン",
    org: "日本循環器学会・日本心不全学会",
    year: "2025",
    url: JCS_LIST,
    keywords: ["心不全", "うっ血", "肺水腫", "起座呼吸", "浮腫", "BNP", "心原性"],
    points: [
      "急性心不全では、まず呼吸不全・ショックの有無を評価し、うっ血（wet/dry）と低灌流（warm/cold）の組み合わせで病態を捉える",
      "呼吸困難・低酸素ではNPPV（CPAPなど）を早期に考慮する。うっ血には利尿薬、血圧が保たれていれば血管拡張薬を用いる",
      "低灌流・ショックでは強心薬や機械的循環補助を検討する。急性冠症候群など原因疾患の検索を並行する",
    ],
  },
  {
    id: "pe2025",
    title: "2025年改訂版 肺血栓塞栓症・深部静脈血栓症および肺高血圧症に関するガイドライン",
    org: "日本循環器学会ほか",
    year: "2025",
    url: JCS_LIST,
    keywords: ["肺塞栓", "肺血栓塞栓", "PE", "深部静脈血栓", "DVT", "エコノミークラス"],
    points: [
      "突然の呼吸困難・胸痛・頻脈・低酸素血症で疑い、長期臥床・術後・下肢静脈血栓などの危険因子を確認する",
      "ショックや低血圧を伴う高リスク例では、血栓溶解療法やカテーテル治療・外科的治療を考慮する",
      "禁忌がなければ抗凝固療法を速やかに開始する",
    ],
  },
  {
    id: "aorta2020",
    title: "2020年改訂版 大動脈瘤・大動脈解離診療ガイドライン",
    org: "日本循環器学会ほか",
    year: "2020",
    url: "https://minds.jcqhc.or.jp/summary/c00487/",
    minds: "https://minds.jcqhc.or.jp/summary/c00487/",
    keywords: ["大動脈解離", "解離", "大動脈瘤", "破裂", "背部痛", "移動する痛み"],
    points: [
      "突然発症の激しい胸背部痛、痛みの移動、血圧の左右差、脈の欠損、新たな大動脈弁逆流は大動脈解離を疑う所見",
      "降圧（収縮期血圧100〜120mmHg程度を目標）と心拍数のコントロール、十分な鎮痛を行う",
      "Stanford A型は原則として緊急手術の適応。造影CTで診断する",
      "解離が否定できない胸痛に、安易に抗血栓薬・血栓溶解薬を使わない",
    ],
  },
  {
    id: "stroke2021",
    title: "脳卒中治療ガイドライン2021〔改訂2025〕",
    org: "日本脳卒中学会",
    year: "2025",
    url: "https://www.jsts.gr.jp/",
    minds: "https://minds.jcqhc.or.jp/guidelines_kind/%E8%84%B3%E5%8D%92%E4%B8%AD/",
    keywords: ["脳卒中", "脳梗塞", "脳出血", "くも膜下", "SAH", "麻痺", "片麻痺", "構音障害", "失語", "TIA", "rt-PA", "血栓回収"],
    points: [
      "発症時刻（最終未発症確認時刻）を必ず確認する。片麻痺・構音障害・失語・顔のゆがみは脳卒中を疑うサイン",
      "急性期脳梗塞では、発症4.5時間以内で適応があればrt-PA静注療法を行う。主幹動脈閉塞では機械的血栓回収療法を考慮する",
      "低血糖など脳卒中に似た症状を示す病態（ストロークミミック）を血糖測定で除外する",
      "脳出血では収縮期血圧を早期に下げる（目標140mmHg未満が目安）。くも膜下出血は再出血予防が重要",
    ],
  },
  {
    id: "anaphylaxis2022",
    title: "アナフィラキシーガイドライン2022",
    org: "日本アレルギー学会",
    year: "2022",
    url: "https://www.jsaweb.jp/uploads/files/Web_AnaGL_2023_0301.pdf",
    keywords: ["アナフィラキシー", "アレルギー", "蕁麻疹", "じんましん", "ハチ", "蜂", "造影剤", "喘鳴", "食物"],
    points: [
      "皮膚症状がなくても、アレルゲン曝露後の急な血圧低下や呼吸器症状があればアナフィラキシーと判断しうる",
      "第一選択はアドレナリン0.01mg/kgの大腿前外側への筋肉注射（成人最大0.5mg、小児最大0.3mg）。効果が不十分なら5〜15分ごとに反復できる。アドレナリンに絶対禁忌はない",
      "仰臥位・下肢挙上（呼吸困難時は楽な姿勢）、酸素投与、大量輸液を行う。急に立たせたり座らせたりしない",
      "抗ヒスタミン薬・ステロイドは補助的な治療であり、アドレナリンの代わりにはならない。二相性反応に注意して経過観察する",
    ],
  },
  {
    id: "asthma2024",
    title: "喘息予防・管理ガイドライン2024（JGL2024）",
    org: "日本アレルギー学会",
    year: "2024",
    url: "https://www.jsaweb.jp/",
    keywords: ["喘息", "ぜんそく", "喘鳴", "気管支喘息", "喘息発作"],
    points: [
      "発作の強度は呼吸困難の程度、会話・歩行の可否、SpO2などで判断する。会話困難・意識障害・チアノーゼ・SpO2低下は重篤",
      "短時間作用性β2刺激薬（SABA）の吸入を反復し、SpO2 95%前後を目標に酸素投与する。中等度以上では全身性ステロイドを投与する",
      "喘鳴が聞こえなくなる（silent chest）、呼吸数減少、意識低下は呼吸停止が迫るサインで、挿管・人工呼吸を準備する",
    ],
  },
  {
    id: "copd2022",
    title: "COPD（慢性閉塞性肺疾患）診断と治療のためのガイドライン2022［第6版］",
    org: "日本呼吸器学会",
    year: "2022",
    url: "https://www.jrs.or.jp/",
    minds: "https://minds.jcqhc.or.jp/summary/c00722/",
    keywords: ["COPD", "慢性閉塞性肺疾患", "肺気腫", "CO2ナルコーシス", "在宅酸素"],
    points: [
      "増悪時の酸素投与は高二酸化炭素血症（CO2ナルコーシス）に注意し、SpO2 88〜92%程度を目安に少量から調整する",
      "意識低下や呼吸性アシドーシスの進行ではNPPVを考慮する",
      "短時間作用性気管支拡張薬の吸入、全身性ステロイド、感染があれば抗菌薬を用いる",
    ],
  },
  {
    id: "pneumonia2024",
    title: "成人肺炎診療ガイドライン2024",
    org: "日本呼吸器学会",
    year: "2024",
    url: "https://www.jrs.or.jp/",
    minds: "https://minds.jcqhc.or.jp/summary/c00846/",
    keywords: ["肺炎", "誤嚥", "呼吸器感染"],
    points: [
      "市中肺炎の重症度はA-DROP（年齢、脱水、SpO2 90%以下、意識障害、収縮期血圧90mmHg以下）で評価する",
      "敗血症の合併を評価し、該当すれば敗血症の診療に準じて早期に治療する",
      "誤嚥性肺炎では嚥下機能の評価と再発予防が重要",
    ],
  },
  {
    id: "heat2024",
    title: "熱中症診療ガイドライン2024",
    org: "日本救急医学会",
    year: "2024",
    url: "https://www.jaam.jp/",
    minds: "https://minds.jcqhc.or.jp/summary/c00897/",
    keywords: ["熱中症", "熱射病", "高体温", "日射病", "暑熱"],
    points: [
      "重症度はI〜IV度に分類する。IV度は深部体温40.0℃以上かつ中等度以上の意識障害（GCS 8以下）を伴う最重症",
      "重症例では深部体温を測定しながら、速やかに積極的冷却（冷水浸漬、蒸散冷却など）を行う",
      "脱水の補正、横紋筋融解・腎障害・DICなどの臓器障害に注意する",
    ],
  },
  {
    id: "jatec6",
    title: "外傷初期診療ガイドラインJATEC（改訂第6版）",
    org: "日本外傷学会・日本救急医学会",
    year: "2021",
    url: "https://www.jtcr-jatec.org/",
    keywords: ["外傷", "交通事故", "転落", "墜落", "骨折", "外出血", "出血性ショック", "頭部外傷", "気胸", "緊張性気胸", "多発外傷"],
    points: [
      "Primary surveyでA（気道・頸椎保護）、B（呼吸）、C（循環・止血）、D（中枢神経）、E（脱衣・体温管理）の順に評価し、生命を脅かす異常をその場で蘇生する",
      "外傷のショックはまず出血性ショックを考え、外出血の止血と出血源の検索（FASTなど）を行う。緊張性気胸・心タンポナーデを見逃さない",
      "低体温・アシドーシス・凝固障害（死の三徴）を防ぐ",
    ],
  },
  {
    id: "diabetes2024",
    title: "糖尿病診療ガイドライン2024",
    org: "日本糖尿病学会",
    year: "2024",
    url: "https://www.jds.or.jp/",
    minds: "https://minds.jcqhc.or.jp/summary/c00864/",
    keywords: ["低血糖", "高血糖", "糖尿病", "DKA", "ケトアシドーシス", "高浸透圧", "インスリン"],
    points: [
      "意識障害では必ず血糖を測定する。低血糖ではブドウ糖を投与し（経口不能なら静注）、再評価する",
      "糖尿病性ケトアシドーシス・高浸透圧高血糖状態では、十分な輸液、インスリン持続投与、カリウムの補正を行う",
      "SU薬や持効型インスリンによる低血糖は遷延・再発しやすく、経過観察が必要",
    ],
  },
  {
    id: "arrhythmia2020",
    title: "2020年改訂版 不整脈薬物治療ガイドライン",
    org: "日本循環器学会・日本不整脈心電学会",
    year: "2020",
    url: JCS_LIST,
    keywords: ["不整脈", "頻拍", "心房細動", "AF", "徐脈", "房室ブロック", "PSVT", "動悸", "失神", "VT", "心室頻拍"],
    points: [
      "頻脈・徐脈ではまず血行動態が不安定（ショック、意識障害、胸痛、心不全）かを判断する",
      "不安定な頻拍は同期電気ショック、不安定な徐脈はアトロピンや経皮ペーシングを考慮する",
      "安定していれば12誘導心電図でQRS幅と規則性から頻拍の種類を見極めて治療する",
    ],
  },
  {
    id: "burn2021",
    title: "熱傷診療ガイドライン〔改訂第3版〕",
    org: "日本熱傷学会",
    year: "2021",
    url: "https://www.jsbi-burn.org/",
    keywords: ["熱傷", "やけど", "火傷", "気道熱傷", "化学損傷"],
    points: [
      "熱傷面積（9の法則など）と深度を評価し、広範囲熱傷では初期輸液を行い尿量を指標に調整する",
      "顔面熱傷、鼻毛の焦げ、嗄声、すすを含む痰は気道熱傷を疑い、気道確保の準備をする",
      "低体温を防ぐ",
    ],
  },
  {
    id: "abdomen2025",
    title: "急性腹症診療ガイドライン2025（第2版）",
    org: "日本腹部救急医学会ほか",
    year: "2025",
    url: "https://minds.jcqhc.or.jp/category_a/digestiveorgan/",
    minds: "https://minds.jcqhc.or.jp/category_a/digestiveorgan/",
    keywords: ["急性腹症", "腹痛", "腹部痛", "イレウス", "腸閉塞", "穿孔", "腹膜炎", "虫垂炎", "腸管虚血", "異所性妊娠", "子宮外妊娠"],
    points: [
      "まずバイタルサインの異常（ショック、意識障害、呼吸不全）を評価し、気道・呼吸・循環を安定させながら診断を進める",
      "緊急性の高い疾患（腹部大動脈瘤破裂、消化管穿孔、腸管虚血、絞扼性腸閉塞、異所性妊娠など）を優先して除外する",
      "急性冠症候群など、腹部以外の疾患が腹痛として現れることがある。妊娠可能年齢の女性では妊娠の可能性を確認する",
      "診断が付く前でも、痛みが強ければ鎮痛薬の投与を検討する（鎮痛で診断を誤らせることは少ない）",
    ],
  },
  {
    id: "pancreatitis2021",
    title: "急性膵炎診療ガイドライン2021（第5版）",
    org: "日本腹部救急医学会ほか",
    year: "2021",
    url: "https://minds.jcqhc.or.jp/summary/c00697/",
    minds: "https://minds.jcqhc.or.jp/summary/c00697/",
    keywords: ["膵炎"],
    points: [
      "診断後は、厚生労働省の重症度判定基準（予後因子と造影CT Grade）で重症度を繰り返し評価する",
      "発症早期から十分な輸液を行う。ただし過剰な輸液は避け、尿量・循環動態を指標に調整する",
      "十分な鎮痛を行う。軽症例での予防的抗菌薬は推奨されない",
      "胆石性で胆管炎や胆道通過障害を伴う場合は、早期のERCP・内視鏡的治療を考慮する",
    ],
  },
  {
    id: "headinjury4",
    title: "頭部外傷治療・管理のガイドライン 第4版",
    org: "日本脳神経外科学会・日本脳神経外傷学会",
    year: "2019",
    url: "https://minds.jcqhc.or.jp/summary/c00550/",
    minds: "https://minds.jcqhc.or.jp/summary/c00550/",
    keywords: ["頭部外傷", "脳挫傷", "硬膜下血腫", "硬膜外血腫", "頭を打", "頭部打撲"],
    points: [
      "GCSで重症度を判定する（GCS 8以下は重症）。意識レベル・瞳孔・麻痺を経時的に評価する",
      "低酸素血症と低血圧は二次性脳損傷を悪化させるため、気道確保・酸素化・循環の維持を最優先する",
      "瞳孔不同、意識の急な低下、血圧上昇と徐脈（クッシング徴候）は脳ヘルニアの切迫を示し、緊急の対応が必要",
      "抗血栓薬を内服している患者は、軽症に見えても遅れて出血が増えることがあり注意する",
    ],
  },
  {
    id: "pedsse2023",
    title: "小児てんかん重積状態・けいれん重積状態治療ガイドライン2023",
    org: "日本小児神経学会",
    year: "2023",
    url: "https://minds.jcqhc.or.jp/summary/c00759/",
    minds: "https://minds.jcqhc.or.jp/summary/c00759/",
    keywords: ["けいれん", "痙攣", "てんかん", "重積", "ひきつけ"],
    points: [
      "けいれんが5分以上続く場合は、自然には止まりにくいとして治療を始める",
      "気道確保・酸素投与を行い、低血糖など治療可能な原因を確認する（血糖測定）",
      "第一選択はベンゾジアゼピン系薬（静脈路があればミダゾラム・ジアゼパムの静注、なければミダゾラムの口腔粘膜投与など）",
      "止まらなければ第二選択薬（ホスフェニトイン、レベチラセタムなど）へ進み、呼吸抑制に備える",
    ],
  },
];

// 急変対応の基本（どのシナリオにも添える）
export const GENERAL_POINTS = [
  "急変時はABCDEアプローチ（気道・呼吸・循環・意識・体温/全身）で評価し、異常を見つけたらその場で介入して再評価する",
  "呼吸数の増加は急変の早い兆候であり、SpO2より先に変化することが多い",
  "意識障害ではまず低血糖・低酸素・ショックを除外する（JCS・GCSで経時的に評価する）",
  "ショックの初期は頻脈で代償され、血圧低下は遅れて現れる（ショック指数＝心拍数÷収縮期血圧が1以上は要注意）",
];

const n = (v) => {
  const x = parseFloat(v);
  return Number.isFinite(x) ? x : null;
};

// バイタルサインから関係しそうなガイドラインを補う
function vitalHints(data) {
  const hits = new Set();
  for (const p of ["v1", "v2"]) {
    const hr = n(data[`${p}.hr`]);
    const temp = n(data[`${p}.temp`]);
    const rr = n(data[`${p}.rr`]);
    if (hr === 0) hits.add("jrc2025");
    if (temp != null && (temp >= 38 || temp < 36) && rr != null && rr >= 22) hits.add("jssg2024");
    if (temp != null && temp >= 40) hits.add("heat2024");
    if (hr != null && (hr >= 150 || (hr > 0 && hr < 40))) hits.add("arrhythmia2020");
    const ls = n(data[`${p}.bpLSys`]);
    const rs = n(data[`${p}.bpRSys`]);
    if (ls != null && rs != null && Math.abs(ls - rs) >= 20) hits.add("aorta2020");
  }
  return hits;
}

// 英字の略語（PE, AF など）は単語として一致したときだけ数える
function has(text, keyword) {
  const kw = keyword.toLowerCase();
  if (!/^[a-z0-9-]+$/.test(kw)) return text.includes(kw);
  return new RegExp(`(^|[^a-z])${kw.replace(/-/g, "\\-")}([^a-z]|$)`).test(text);
}

// シナリオに関係するガイドラインを選ぶ（多すぎるとAIの焦点がぼやけるので最大4件）
export function selectGuidelines(data, max = 4) {
  const text = ["disease", "summary", "complaint", "v1.history", "v1.treatment", "v1.notes", "v2.history", "v2.treatment", "v2.notes"]
    .map((k) => data[k] || "")
    .join(" ")
    .toLowerCase();
  const disease = (data["disease"] || "").toLowerCase();
  const scored = GUIDELINES.map((g) => {
    let score = 0;
    for (const k of g.keywords) {
      if (has(disease, k)) score += 3;
      else if (has(text, k)) score += 1;
    }
    return { g, score };
  });
  const hints = vitalHints(data);
  for (const s of scored) if (hints.has(s.g.id)) s.score += 1;
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.g);
}

export function guidelinesToPrompt(list) {
  const blocks = list.map(
    (g) => `■ ${g.title}（${g.org}、${g.year}${g.minds ? "、Minds掲載" : ""}）\n${g.points.map((p) => `・${p}`).join("\n")}`
  );
  return `【参考ガイドラインの要点（${GUIDELINES_CHECKED}時点の最新版。Mindsガイドラインライブラリ掲載のものを含む）】
評価と解説は、次の要点と矛盾しないように書いてください。要点にない内容を書くときは、確かな根拠があるものだけにしてください。

■ 急変対応の基本
${GENERAL_POINTS.map((p) => `・${p}`).join("\n")}
${blocks.length ? "\n" + blocks.join("\n\n") : ""}`;
}

// AIが挙げた参考資料の名前を、内蔵のガイドラインと照らし合わせてリンクを付ける
export function linkReference(title) {
  const t = String(title || "");
  const g = GUIDELINES.find((x) => t.includes(x.title) || t.includes(x.title.replace(/（.*?）|〔.*?〕|\[.*?\]/g, "").trim()));
  return g ? { title: t, url: g.url, minds: g.minds || "" } : { title: t, url: "", minds: "" };
}
