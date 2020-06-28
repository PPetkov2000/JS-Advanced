function solve(num) {
  return function(x) {
    return num + x * 1;
  };
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

console.log("_".repeat(40) + "\n");

let add7 = solve(7);
console.log(add7(2));
console.log(add7(3));
