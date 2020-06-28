function solve(params) {
  const delimiter = params.slice().pop();
  const result = [];
  for (let i = 0; i < params.length - 1; i++) {
    result.push(params[i]);
  }
  return result.join(delimiter);
}

console.log(solve(["One", "Two", "Three", "Four", "Five", "-"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["How about no?", "I", "will", "not", "do", "it!", "_"]));
