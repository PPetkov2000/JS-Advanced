function create(words) {
  const content = document.getElementById("content");
  for (let word of words) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    content.appendChild(div);
  }
  content.addEventListener("click", function(e) {
    if (e.target.firstChild.style.display === "block") {
      e.target.firstChild.style.display = "none";
    } else if (e.target.firstChild.style.display === "none") {
      e.target.firstChild.style.display = "block";
    }
  });
}

document.addEventListener(
  "DOMContentLoaded",
  create(["Section 1", "Section 2", "Section 3", "Section 4"])
);
