function solve(data) {
  return data
    .reduce(
      (result, row, index, arr) => {
        result[0] += row[index];
        result[1] += row[arr.length - 1 - index];
        return result;
      },
      [0, 0]
    )
    .join(" ");
}

console.log(
  solve([
    [20, 40],
    [10, 60]
  ])
);

console.log("_".repeat(40) + "\n");

console.log(
  solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
  ])
);

// Solution 2
// function solve(arr) {
//   let first = 0;
//   let second = 0;
//   for (let row = 0; row < arr.length; row++) {
//     first += arr[row][row];
//     second += arr[row][arr.length - 1 - row];
//   }
//   return [first, second].join(" ");
// }
