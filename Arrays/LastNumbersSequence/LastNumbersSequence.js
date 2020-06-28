function solve(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let sum = arr.slice(-k).reduce((a, b) => a + b);
    arr.push(sum);
  }
  return arr.join(" ");
}

console.log(solve(6, 3));

console.log("_".repeat(40) + "\n");

console.log(solve(8, 2));
