function solve(commands) {
  let commandsInfo = {
    counter: 1,
    add: (arr, num) => [...arr, num],
    remove: arr => arr.slice(0, arr.length - 1)
  };
  let result = commands.reduce((acc, curr) => {
    acc = commandsInfo[curr](acc, commandsInfo.counter);
    commandsInfo.counter++;
    return acc;
  }, []);
  return result.length > 0 ? result.join("\n") : "Empty";
}

console.log(solve(["add", "add", "add", "add"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["add", "add", "remove", "add", "add"]));

console.log("_".repeat(40) + "\n");

console.log(solve(["remove", "remove", "remove"]));

// Solution 2
// function solve(commands) {
//   let initial = 1;
//   let result = [];
//   for (let command of commands) {
//     if (command === "add") {
//       result.push(initial);
//     } else if (command === "remove") {
//       result.pop();
//     }
//     initial++
//   }
//   return result.length > 0 ? result.join("\n") : "Empty";
// }
