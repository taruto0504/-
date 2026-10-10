(function () {
  "use strict";

  const exprEl = document.getElementById("calc-expr");
  const currentEl = document.getElementById("calc-current");

  let current = "0";
  let previous = null;
  let operator = null;
  let justEvaluated = false;
  // True right after an operator is pressed, until the next number is typed.
  let awaitingOperand = false;

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
    awaitingOperand = false;
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
    if (justEvaluated || awaitingOperand) {
      awaitingOperand = false;
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
    // Pressing another operator right away just replaces it (5 ÷ × 2 = 10, not an error).
    if (operator && awaitingOperand) {
      operator = op;
      render();
      return;
    }
    if (operator && !justEvaluated) {
      evaluate();
    }
    if (!isFinite(parseFloat(current))) {
      clearAll();
      return;
    }
    previous = parseFloat(current);
    operator = op;
    justEvaluated = false;
    awaitingOperand = true;
    current = "0";
    render();
  }

  function evaluate() {
    // "=" before the second number is typed would compute with 0 (5 ÷ = → error); ignore it.
    if (operator === null || previous === null || awaitingOperand) return;
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
    awaitingOperand = false;
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
    if (!isFinite(val)) return;
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
