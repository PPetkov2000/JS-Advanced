function solve(arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result += intersect(arr[i], arr[i + 1]);
  }
  function intersect(a, b) {
    return a.filter((element, index) => b[index] === element).length;
  }
  return result;
}

console.log(
  solve([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"]
  ])
);

console.log("_".repeat(40) + "\n");

console.log(
  solve([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"]
  ])
);

// Points 50/100 - One test is incorrect

// Solution 2 - This solution does not work as expected
// function solve(arr) {
//   let neighbors = 0;
//   for (let row = 0; row < arr.length - 1; row++) {
//     for (let col = 0; col < arr[row]; col++) {
//       if (arr[row][col] === arr[row + 1][col]) {
//         neighbors++;
//       }
//       if (arr[row][col] === arr[row][col + 1]) {
//         neighbors++;
//       }
//       if (
//         row === arr.length - 2 &&
//         arr[row + 1][col] === arr[row + 1][col + 1]
//       ) {
//         neighbors++;
//       }
//     }
//   }
//   return neighbors;
// }
