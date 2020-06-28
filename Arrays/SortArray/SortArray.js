function solve(arr) {
  return arr
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}

console.log(solve(["alpha", "beta", "gamma"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["test", "Deny", "omen", "Default"]));
