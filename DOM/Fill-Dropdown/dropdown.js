function addItem() {
  const selectMenu = document.getElementById("menu");
  function addOption() {
    let newItemText = document.getElementById("newItemText").value;
    let newItemValue = document.getElementById("newItemValue").value;
    let option = document.createElement("option");
    option.value = newItemValue;
    option.textContent = newItemText;
    selectMenu.appendChild(option);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
  }
  document.getElementById("addOption").addEventListener("click", addOption);
}
document.addEventListener("DOMContentLoaded", addItem);
