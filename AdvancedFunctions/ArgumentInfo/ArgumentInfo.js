function solve(...args) {
  let [types, typeOfArgs] = args.reduce(
    (acc, curr) => {
      let [arr, obj] = acc;
      let typeOfArg = typeof curr;
      arr.push(`${typeOfArg}: ${curr}`);
      if (!obj.hasOwnProperty(typeOfArg)) {
        obj[typeOfArg] = 0;
      }
      obj[typeOfArg]++;
      return acc;
    },
    [[], {}]
  );
  return (
    types.join("\n") +
    "\n" +
    Object.entries(typeOfArgs)
      .sort((a, b) => b[1] - a[1])
      .map(arg => `${arg[0]} = ${arg[1]}`)
      .join("\n")
  );
}

console.log(
  solve("cat", 42, function() {
    console.log("Hello world!");
  })
);

// For some reason Judge gives 0/100 even though the results are correct
