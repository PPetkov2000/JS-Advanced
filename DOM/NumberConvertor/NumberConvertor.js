document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#convert").addEventListener("click", converter);
  let selectMenu = document.querySelector("#selectMenuTo");

  if (selectMenu === null) {
    throw new Error(".....");
  }

  function converter() {
    let enteredNumber = Number(document.querySelector("#input").value);
    let result;
    if (selectMenu.value === "binary") {
      result = decimalToBinary(enteredNumber);
    } else if (selectMenu.value === "hexadecimal") {
      result = decimalToHexadecimal(enteredNumber);
    }
    appendResult(result);
  }

  function decimalToBinary(num) {
    return (num >>> 0).toString(2);
  }

  function decimalToHexadecimal(num) {
    return num.toString(16).toUpperCase();
  }

  function appendResult(result) {
    document.querySelector("#result").value = result;
  }

  function selectOptions() {
    let binaryOption = document.createElement("option");
    let hexadecimalOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.textContent = "Hexadecimal";
    selectMenu.append(binaryOption, hexadecimalOption);
  }

  selectOptions();
});
