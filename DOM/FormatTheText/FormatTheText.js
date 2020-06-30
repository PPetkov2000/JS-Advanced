function formatText() {
  let text = document.querySelector("#text");
  let output = document.querySelector("#output");

  if (text === null || output === null) {
    throw new Error("Some elements do not exist!");
  }

  let sentences = text.innerHTML
    .split(".")
    .map(x => x.trim())
    .filter(x => x !== "");

  for (let i = 0; i < sentences.length; i += 3) {
    let p = document.createElement("p");
    let formattedText = "";
    for (let j = 0; j < 3; j++) {
      if (i + j < sentences.length) {
        formattedText += sentences[i + j].trim() + ".";
      }
    }
    p.innerHTML = formattedText;
    output.appendChild(p);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#formatItBtn").addEventListener("click", formatText);
});
