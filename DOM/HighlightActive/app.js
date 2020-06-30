function focus() {
  Array.from(document.querySelectorAll("div > div > input")).map(input => {
    input.addEventListener("focus", highlight);
    input.addEventListener("blur", blur);
  });

  function highlight(e) {
    return e.target.parentElement.classList.add("focused");
  }

  function blur(e) {
    return e.target.parentElement.classList.remove("focused");
  }
}

document.addEventListener("DOMContentLoaded", focus);
