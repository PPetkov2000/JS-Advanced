function solve() {
  const [nameInput, ageInput, kindInput, currentOwnerInput] = Array.from(
    document.querySelectorAll("#container input")
  );
  const adoptionSectionUl = document.querySelector("#adoption ul");
  const adoptedSectionUl = document.querySelector("#adopted ul");

  function adoptPet(e) {
    e.preventDefault();

    const name = nameInput.value;
    const age = Number(ageInput.value);
    const kind = kindInput.value;
    const currentOwner = currentOwnerInput.value;

    if (!name || !age || !kind || !currentOwner || Number.isNaN(age)) {
      return;
    }

    const contactBtn = createElement("button", "Contact with owner");

    const li = createElement("li", [
      createElement("p", [
        createElement("strong", name),
        " is a ",
        createElement("strong", age),
        " year old ",
        createElement("strong", kind),
      ]),
      createElement("span", `Owner: ${currentOwner}`),
      contactBtn,
    ]);
    adoptionSectionUl.appendChild(li);

    contactBtn.addEventListener("click", () => {
      contactBtn.remove();
      const input = createElement("input", "", {
        placeholder: "Enter your names",
      });
      const takeItBtn = createElement("button", "Yes! I take it!");
      li.appendChild(createElement("div", [input, takeItBtn]));

      takeItBtn.addEventListener("click", () => {
        adoptionSectionUl.removeChild(li);
        const inputValue = input.value;

        if (inputValue.length > 0) {
          const checkBtn = createElement("button", "Checked");
          const newLi = createElement("li", [
            createElement("p", [
              createElement("strong", name),
              " is a ",
              createElement("strong", age),
              " year old ",
              createElement("strong", kind),
            ]),
            createElement("span", `New Owner: ${inputValue}`),
            checkBtn,
          ]);
          adoptedSectionUl.appendChild(newLi);

          checkBtn.addEventListener("click", () => {
            newLi.remove();
          });
        }
      });
    });

    nameInput.value = "";
    ageInput.value = "";
    kindInput.value = "";
    currentOwnerInput.value = "";
  }

  function createElement(type, content, attributes) {
    const element = document.createElement(type);

    if (attributes !== undefined) {
      // Object.assign(element, attributes);
      Object.keys(attributes).forEach((key) => {
        element[key] = attributes[key];
      });
    }

    if (Array.isArray(content)) {
      content.forEach(append);
    } else {
      append(content);
    }

    function append(node) {
      if (typeof node === "string" || typeof node === "number") {
        node = document.createTextNode(node);
      }
      element.appendChild(node);
    }

    return element;
  }

  document
    .querySelector("#container button")
    .addEventListener("click", adoptPet);
}
