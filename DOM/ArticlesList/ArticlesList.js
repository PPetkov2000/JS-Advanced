function generateArticle() {
  let title = document.querySelector("#createTitle");
  let content = document.querySelector("#createContent");
  let articles = document.querySelector("#articles");
  if (title === null || content === null || articles === null) {
    throw new Error("There are no such elements on the page!");
  }
  if (title.value === "" || content.value === "") {
    throw new Error("Please fill in the fields!");
  }
  let article = document.createElement("article");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  h3.innerHTML = title.value;
  p.innerHTML = content.value;
  article.append(h3, p);
  articles.appendChild(article);
  title.value = "";
  content.value = "";
}

const keyCodes = {
  13: () => generateArticle(), // Enter
  10: () => generateArticle(), // Ctrl + Enter
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#generateArticle")
    .addEventListener("click", generateArticle);
  document.addEventListener("keypress", function (event) {
    if (typeof keyCodes[event.keyCode] === "function") {
      keyCodes[event.keyCode]();
    }
  });
});
