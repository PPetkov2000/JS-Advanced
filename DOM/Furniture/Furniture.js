document.addEventListener("DOMContentLoaded", function() {
  const furniture = document.querySelector("#furniture");
  const boughtFurniture = document.querySelector("#boughtFurniture");
  const tBody = document.querySelector("tbody");

  function generateRow() {
    if (furniture.value === "") {
      throw new Error("No data entered!");
    }

    const data = JSON.parse(furniture.value);
    const name = data.map(info => info.name);
    const imgUrl = data.map(info => info.img).toString();
    const price = Number(data.map(info => info.price));
    const decFactor = Number(data.map(info => info.decFactor));

    const tr = document.createElement("tr");
    const tdImg = document.createElement("td");
    const tdName = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdDecFactor = document.createElement("td");
    const tdCheckBox = document.createElement("td");
    const img = document.createElement("img");
    const paraName = document.createElement("p");
    const paraPrice = document.createElement("p");
    const paraDecFactor = document.createElement("p");
    const checkbox = document.createElement("input");

    img.setAttribute("src", imgUrl);
    paraName.innerHTML = name;
    paraPrice.innerHTML = price;
    paraDecFactor.innerHTML = decFactor;
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    tdImg.appendChild(img);
    tdName.appendChild(paraName);
    tdPrice.appendChild(paraPrice);
    tdDecFactor.appendChild(paraDecFactor);
    tdCheckBox.appendChild(checkbox);

    tr.append(tdImg, tdName, tdPrice, tdDecFactor, tdCheckBox);
    tBody.appendChild(tr);
  }

  function BuyFurniture() {
    const boughtFurnitures = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    Array.from(document.querySelectorAll(".checkbox"))
      .filter(checkbox => checkbox.checked === true)
      .map(checkbox => {
        const name =
          checkbox.parentElement.parentElement.children[1].textContent;
        const price = Number(
          checkbox.parentElement.parentElement.children[2].textContent
        );
        const decFactor = Number(
          checkbox.parentElement.parentElement.children[3].textContent
        );
        boughtFurnitures.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
      });

    boughtFurniture.value += `Bought furniture: ${boughtFurnitures.join(
      ", "
    )}\n`;
    boughtFurniture.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    boughtFurniture.value += `Average decoration factor: ${totalDecFactor /
      boughtFurnitures.length}`;
  }

  document.querySelector("#generator").addEventListener("click", generateRow);
  document
    .querySelector("#addFurniture")
    .addEventListener("click", BuyFurniture);
});

// This solution works fine but the code still needs refactor
// Validation could be added
