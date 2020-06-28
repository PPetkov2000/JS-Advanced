function solve(arr) {
  return Number(arr[0]) + Number(arr[arr.length - 1]);
}

console.log(solve(["20", "30", "40"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["5", "10"]));
