function solve(arr) {
  return arr
    .filter((element, index) => index % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(" ");
}

console.log(solve([10, 15, 20, 25]));

console.log("_".repeat(40) + "\n");

console.log(solve([3, 0, 10, 4, 7, 3]));
