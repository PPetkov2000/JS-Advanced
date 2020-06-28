function solve(arr) {
  let result = arr.reduce((acc, curr) => {
    if (curr >= Math.max(...acc)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return result.join("\n");
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log("_".repeat(40) + "\n");

console.log(solve([20, 3, 2, 15, 6, 1]));

// Solution 2
// function solve(arr) {
//   let firstElement = arr[0];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= firstElement) {
//       result.push(arr[i]);
//       firstElement = arr[i];
//     }
//   }
//   return result.join("\n");
// }
