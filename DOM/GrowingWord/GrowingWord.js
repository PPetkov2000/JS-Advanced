let colors = ["#5B88BD", "#A40014", "#8FF897"];
let colorsCounter = 0;

function formatElements() {
  let growingWord = document.querySelector(".growingWord");

  if (growingWord === null) {
    throw new Error("Error!");
  }

  if (colorsCounter >= colors.length) {
    colorsCounter = 0;
  }

  let fontSize = window
    .getComputedStyle(growingWord)
    .fontSize.replace("px", "");

  growingWord.style.fontSize = (fontSize === "0" ? "2" : fontSize * 2) + "px";
  growingWord.style.color = colors[colorsCounter];
  colorsCounter++;
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#format").addEventListener("click", formatElements);
});
