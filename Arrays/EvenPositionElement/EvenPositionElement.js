function solve(arr) {
  return arr.filter((el, i, arr) => i % 2 === 0).join(" ");
}

console.log(solve(["20", "30", "40"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["5", "10"]));

// Solution 2
// function solve(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       result += arr[i] + " ";
//     }
//   }
//   return result;
// }

// Solution 3
// function solve(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i += 2) {
//     result += arr[i] + " ";
//   }
//   return result;
// }

// Solution 4
// function solve(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result.join(" ");
// }

// Solution 5
// function solve(arr) {
//   let result = new Array(Math.floor(arr.length / 2));
//   for (let i = 0; i < arr.length; i += 2) {
//     result[i / 2] = arr[i];
//   }
//   return result.join(" ");
// }
