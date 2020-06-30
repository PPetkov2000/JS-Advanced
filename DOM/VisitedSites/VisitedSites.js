const template = x => `visited ${x} times`;
const linksState = {
  SoftUni: 1,
  Google: 2,
  YouTube: 4,
  Wikipedia: 4,
  Gmail: 7,
  stackoverflow: 6
};

document.addEventListener("click", function(event) {
  if (
    event.target &&
    event.target.classList &&
    event.target.classList.contains("linkAction")
  ) {
    event.target.parentNode.querySelector(".linkOut").innerHTML = template(
      linksState[event.target.textContent.trim()]++
    );
  }
});
