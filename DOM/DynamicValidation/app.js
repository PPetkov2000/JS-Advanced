function validate() {
  const emailInput = document.getElementById("email");
  const emailPattern = /[a-z]+@[a-z]+\.(com|net|org)/;

  function change() {
    if (emailInput.value.match(emailPattern)) {
      emailInput.classList.add("valid");
      emailInput.classList.remove("error");
    } else {
      emailInput.classList.remove("valid");
      emailInput.classList.add("error");
    }
  }

  emailInput.addEventListener("change", change);
}

document.addEventListener("DOMContentLoaded", validate);
