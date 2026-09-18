(function () {
  "use strict";

  const exprEl = document.getElementById("calc-expr");
  const currentEl = document.getElementById("calc-current");

  let current = "0";
  let previous = null;
  let operator = null;
  let justEvaluated = false;

  const OPS = {
    "+": (a, b) => a + b,
    "−": (a, b) => a - b,
    "×": (a, b) => a * b,
    "÷": (a, b) => (b === 0 ? NaN : a / b),
  };

  function render() {
    currentEl.textContent = current;
    exprEl.textContent = previous !== null && operator ? `${formatDisplay(previous)} ${operator}` : " ";
  }

  function formatDisplay(n) {
    if (typeof n === "string") return n;
    if (!isFinite(n)) return "エラー";
    const rounded = Math.round(n * 1e10) / 1e10;
    return rounded.toString();
  }

  function inputDigit(d) {
    if (justEvaluated) {
      current = d;
      justEvaluated = false;
    } else if (current === "0") {
      current = d;
    } else {
      if (current.replace("-", "").replace(".", "").length >= 15) return;
      current += d;
    }
    render();
  }

  function inputDecimal() {
    if (justEvaluated) {
      current = "0.";
      justEvaluated = false;
      render();
      return;
    }
    if (!current.includes(".")) {
      current += ".";
      render();
    }
  }

  function chooseOperator(op) {
    if (operator && !justEvaluated) {
      evaluate();
    }
    previous = parseFloat(current);
    operator = op;
    justEvaluated = false;
    current = "0";
    render();
  }

  function evaluate() {
    if (operator === null || previous === null) return;
    const a = previous;
    const b = parseFloat(current);
    const result = OPS[operator](a, b);
    current = formatDisplay(result);
    previous = null;
    operator = null;
    justEvaluated = true;
    render();
  }

  function clearAll() {
    current = "0";
    previous = null;
    operator = null;
    justEvaluated = false;
    render();
  }

  function backspace() {
    if (justEvaluated) {
      clearAll();
      return;
    }
    current = current.length > 1 ? current.slice(0, -1) : "0";
    render();
  }

  function percent() {
    const val = parseFloat(current);
    current = formatDisplay(val / 100);
    render();
  }

  document.querySelector(".calc-grid").addEventListener("click", (e) => {
    const btn = e.target.closest(".calc-btn");
    if (!btn) return;
    const action = btn.dataset.action;
    switch (action) {
      case "digit":
        inputDigit(btn.dataset.value);
        break;
      case "decimal":
        inputDecimal();
        break;
      case "op":
        chooseOperator(btn.dataset.value);
        break;
      case "equals":
        evaluate();
        break;
      case "clear":
        clearAll();
        break;
      case "backspace":
        backspace();
        break;
      case "percent":
        percent();
        break;
    }
  });

  render();
})();
