function toggle() {
  const spanBtn = document.querySelector(".button");
  const content = document.getElementById("extra");
  function action() {
    if (spanBtn.textContent === "More") {
      spanBtn.textContent = "Less";
      content.style.display = "block";
    } else if (spanBtn.textContent === "Less") {
      spanBtn.textContent = "More";
      content.style.display = "none";
    }
  }
  spanBtn.addEventListener("click", action);
}
document.addEventListener("DOMContentLoaded", toggle);
