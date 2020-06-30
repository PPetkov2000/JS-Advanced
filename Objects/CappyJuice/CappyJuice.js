function solve(params) {
  let juices = {};
  let bottles = {};

  for (let param of params) {
    let [juiceName, juiceQuantity] = param.split(" => ");
    if (!juices.hasOwnProperty(juiceName)) {
      juices[juiceName] = 0;
    }
    juices[juiceName] += Number(juiceQuantity);
    if (juices[juiceName] >= 1000) {
      bottles[juiceName] = Math.trunc(juices[juiceName] / 1000);
    }
  }

  for (let juice in bottles) {
    console.log(`${juice} => ${bottles[juice]}`);
  }
}

solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549"
]);

console.log("_".repeat(40) + "\n");

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789"
]);
