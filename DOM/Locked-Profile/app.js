function lockedProfile() {
  Array.from(document.querySelectorAll("button")).map(button =>
    button.addEventListener("click", action)
  );

  function action(e) {
    Array.from(e.target.parentElement.querySelectorAll("input"))
      .filter(input => input.type === "radio")
      .map(input => {
        if (input.checked && input.value === "unlock") {
          if (e.target.previousElementSibling.style.display === "none") {
            e.target.previousElementSibling.style.display = "block";
            e.target.textContent = "Hide it";
          } else {
            e.target.previousElementSibling.style.display = "none";
            e.target.textContent = "Show more";
          }
        }
      });
  }
}

document.addEventListener("DOMContentLoaded", lockedProfile);
