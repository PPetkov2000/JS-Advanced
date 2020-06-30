document.addEventListener("DOMContentLoaded", function() {
  const result = document.querySelector("#result");
  const resultHistory = document.querySelector("#history");
  const cardHistory = [];
  let firstPlayerCard;
  let secondPlayerCard;
  let firstPlayerCardValue;
  let secondPlayerCardValue;

  Array.from(document.querySelectorAll(".cards  img")).map(card =>
    card.addEventListener("click", function() {
      card.src = "images/whiteCard.jpg";

      if (card.parentElement.id === "player1Div") {
        firstPlayerCard = card;
        firstPlayerCardValue = Number(card.name);
        result.firstElementChild.textContent = firstPlayerCardValue;
      } else if (card.parentElement.id === "player2Div") {
        secondPlayerCard = card;
        secondPlayerCardValue = Number(card.name);
        result.lastElementChild.textContent = secondPlayerCardValue;
      }

      if (firstPlayerCard && secondPlayerCard) {
        if (firstPlayerCardValue > secondPlayerCardValue) {
          firstPlayerCard.style.border = "2px solid green";
          secondPlayerCard.style.border = "2px solid red";
        } else if (firstPlayerCardValue < secondPlayerCardValue) {
          secondPlayerCard.style.border = "2px solid green";
          firstPlayerCard.style.border = "2px solid red";
        } else if (firstPlayerCardValue === secondPlayerCardValue) {
          secondPlayerCard.style.border = "2px solid gray";
          firstPlayerCard.style.border = "2px solid gray";
        }

        cardHistory.push(
          `[${firstPlayerCardValue} vs ${secondPlayerCardValue}]`
        );
        firstPlayerCard = null;
        firstPlayerCardValue = null;
        secondPlayerCard = null;
        secondPlayerCardValue = null;
        resultHistory.textContent = cardHistory.join(" ");
      }
    })
  );
});
