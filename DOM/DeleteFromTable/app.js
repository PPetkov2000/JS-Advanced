function main() {
  const result = document.querySelector("#result");
  const emailPattern = /[A-Za-z]+@[A-Za-z]+\.(com|net|org)/;
  const tableData = Array.from(
    document.querySelectorAll("table > tbody > tr > td")
  );

  function deleteByEmail() {
    const emailField = document.querySelector("#email");
    if (emailField === null) {
      throw new Error("Missing dom elements");
    }
    if (emailField.value.match(emailPattern)) {
      for (let i = 0; i < tableData.length; i += 2) {
        let tableName = tableData[i];
        let tableEmail = tableData[i + 1];
        if (tableEmail.textContent === emailField.value) {
          result.textContent = `User with name: ${tableName.textContent} and email: ${tableEmail.textContent} successfully deleted`;
          document
            .querySelector("table > tbody")
            .removeChild(tableEmail.parentElement);
        }
      }
    } else {
      result.textContent = "Not found.";
    }
  }

  document.querySelector("#delete").addEventListener("click", deleteByEmail);
}

document.addEventListener("DOMContentLoaded", main);

// There are still a few bugs in this problem. One of them is when you successfully delete table row and then try again to delete it with the same input value there is an error in the console
