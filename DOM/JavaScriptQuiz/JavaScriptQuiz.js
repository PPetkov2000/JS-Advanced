document.addEventListener("DOMContentLoaded", function() {
  let correctAnswers = 0;
  let counter = 0;

  Array.from(document.querySelectorAll(".quiz-answer")).map(element =>
    element.addEventListener("click", function(event) {
      if (
        event.target.innerText === "onclick" ||
        event.target.innerText === "JSON.stringify()" ||
        event.target.innerText ===
          "A programming API for HTML and XML documents"
      ) {
        correctAnswers++;
      }
      let currentSection = document.querySelectorAll("section")[counter];
      let nextSection = document.querySelectorAll("section")[counter + 1];

      currentSection.style.display = "none";
      currentSection.classList.add("hidden");

      if (nextSection) {
        nextSection.style.display = "block";
        currentSection.classList.remove("hidden");
      } else {
        showResult(correctAnswers);
      }

      counter++;
    })
  );

  function showResult(correctAnswers) {
    document.querySelector("#results").style.display = "block";

    if (correctAnswers === 3) {
      document.querySelector("#results > li> h1").innerText =
        "You are recognized as top JavaScript fan!";
    } else {
      document.querySelector(
        "#results > li> h1"
      ).innerText = `You have ${correctAnswers} right answers`;
    }
  }
});
