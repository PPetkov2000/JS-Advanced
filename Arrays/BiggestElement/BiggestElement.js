function solve(arr) {
  return Math.max(...arr.reduce((a, b) => [...a, ...b], []));
  // return Math.max(...arr.reduce((a, b) => a.concat(b), []));
  // return Math.max(...arr.flat(1));
}

console.log(
  solve([
    [20, 50, 10],
    [8, 33, 145]
  ])
);

console.log("_".repeat(40) + "\n");

console.log(
  solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
  ])
);
