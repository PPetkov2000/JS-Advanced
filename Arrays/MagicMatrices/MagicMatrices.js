function solve(data) {
  let arrSum = data[0].reduce((a, b) => a + b, 0);
  let isMagical = true;
  for (let i = 0; i < data.length; i++) {
    let rowsSum = data[i].reduce((a, b) => a + b, 0);
    let colsSum = data.map(x => x[i]).reduce((a, b) => a + b, 0);
    if (rowsSum !== arrSum || colsSum !== arrSum || rowsSum !== colsSum) {
      isMagical = false;
    }
  }
  return isMagical;
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
  ])
);

console.log("_".repeat(40) + "\n");

console.log(
  solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
  ])
);
