function calculatePercentage(x, y) {
  return Math.floor((x / y) * 100);
}

function resultDivTemplate(str) {
  return `${str}%`;
}

function constructGradient(gradient, result) {
  return {
    gradient,
    result,
    handleEvent: function(e) {
      let width = Number(
        getComputedStyle(this.gradient).width.replace("px", "")
      );
      this.result.innerHTML = resultDivTemplate(
        calculatePercentage(e.offsetX, width)
      );
    }
  };
}

function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");
  gradient.addEventListener("click", constructGradient(gradient, result));
}

document.addEventListener("DOMContentLoaded", attachGradientEvents);
