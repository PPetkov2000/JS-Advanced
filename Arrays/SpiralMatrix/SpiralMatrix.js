// Too difficult at this point - 02/01/2020
function solve(x, y) {
  let total = x * y;
  let matrix = [];
  let result = [];
  for (let i = 1; i <= total; i++) {
    matrix.push(i);
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % x === 0) {
      result.push(matrix[i]);
    }
  }
  return result;
}

console.log(solve(3, 3));

console.log("_".repeat(40) + "\n");

console.log(solve(5, 5));
