function solve(params) {
  let arr = [];

  const actions = {
    add: (arr, str) => [...arr, str],
    remove: (arr, str) => arr.filter((x) => x !== str),
    print: (arr) => {
      console.log(arr.join(","));
      return arr;
    },
  };

  return params.map((x) => {
    const [command, text] = x.split(" ");
    arr = actions[command](arr, text);
  });
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);

console.log("_".repeat(40));

solve(["add pesho", "add george", "add peter", "remove peter", "print"]);

// Points 100/100
