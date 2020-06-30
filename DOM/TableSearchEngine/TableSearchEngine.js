document.addEventListener("DOMContentLoaded", function() {
  let studentsData = Array.from(document.querySelectorAll("tbody > tr"));
  document.querySelector("#searchBtn").addEventListener("click", function() {
    let searchField = document.querySelector("#searchField").value;
    let dataPattern = new RegExp(searchField, "gim");
    studentsData.map(tr => {
      tr.classList.remove("select");
      if (tr.innerHTML.match(dataPattern) !== null) {
        tr.classList.add("select");
      }
    });
    document.querySelector("#searchField").value = "";
  });
});

// There are a few bugs in this solution - One of them is when you click on the "Search" button with empty input field the "select" class is applied to all "tr"
