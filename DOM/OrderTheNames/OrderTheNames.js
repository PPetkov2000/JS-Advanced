document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("button");
  const db = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: []
  };
  const dbIndex = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    G: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
  };

  button.addEventListener("click", function() {
    let name = document.querySelector("input").value;
    let firstLetter = name[0].toUpperCase();
    let listItems = document.querySelectorAll("ol > li");
    name = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
    db[firstLetter].push(name);
    listItems[dbIndex[firstLetter] - 1].textContent = db[firstLetter].join(
      ", "
    );
    document.querySelector("input").value = "";
  });
});
