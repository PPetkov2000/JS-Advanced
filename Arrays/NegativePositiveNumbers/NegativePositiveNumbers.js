function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.unshift(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("\n");
}

console.log(solve([7, -2, 8, 9]));

console.log("_".repeat(40) + "\n");

console.log(solve([3, -2, 0, -1]));

// PRO Solution
// const actions = {
//   true: "unshift",
//   false: "push"
// };
// function solve(arr) {
//   return arr
//     .reduce((result, x) => {
//       result[actions[x < 0]](x);
//       return result;
//     }, [])
//     .join("\n");
// }
