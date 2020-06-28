function solve(arr) {
  let step = arr.pop();
  return arr.filter((element, index) => index % step === 0).join("\n");
}

console.log(solve(["5", "20", "31", "4", "20", "2"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["dsa", "asd", "test", "tset", "2"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["1", "2", "3", "4", "5", "6"]));
