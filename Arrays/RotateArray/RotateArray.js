function solve(arr) {
  let rotations = Number(arr.pop()) % arr.length;
  return arr
    .reduceRight(
      (acc, curr) => {
        if (rotations) {
          acc = [curr, ...acc.slice(0, arr.length - 1)];
          rotations--;
        }
        return acc;
      },
      [...arr]
    )
    .join(" ");
}

console.log(solve(["1", "2", "3", "4", "2"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["Banana", "Orange", "Coconut", "Apple", "15"]));

// Solution 2
// function solve(arr) {
//   let rotations = Number(arr.pop()) % arr.length;
//   for (let i = 0; i < rotations; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr.join(" ");
// }
