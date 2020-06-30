function solve(arr) {
  let obj = {};
  for (let str of arr) {
    str = str
      .match(/\w+/gim)
      .map(w => (!obj.hasOwnProperty(w) ? (obj[w] = 1) : (obj[w] += 1)));
  }
  console.log(JSON.stringify(obj));
}

solve(["Far too slow, you're far too slow."]);

console.log("_".repeat(40) + "\n");

solve(["JS devs use Node.js for server-side JS.-- JS for devs"]);

// Points 100/100 - I solved this entirely on my own
