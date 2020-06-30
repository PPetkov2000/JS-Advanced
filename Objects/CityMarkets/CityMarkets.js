function solve(params) {
  let obj = {};
  let totalIncome = 0;

  for (let param of params) {
    let tokens = param.split(" : ");
    let [town, products, sales] = tokens[0].split(" -> ");
    let pricePerUnit = Number(tokens[1]);
    totalIncome = Number(sales) * pricePerUnit;

    if (!obj.hasOwnProperty(town)) {
      obj[town] = {};
    }
    if (!obj[town].hasOwnProperty(products)) {
      obj[town][products] = totalIncome;
    }
  }

  Object.entries(obj).forEach(town => {
    console.log(`Town - ${town[0]}`);
    Object.entries(town[1]).forEach(townInfo =>
      console.log(`$$$${townInfo[0]} : ${townInfo[1]}`)
    );
  });
}

solve([
  "Sofia -> Laptops HP -> 200 : 2000",
  "Sofia -> Raspberry -> 200000 : 1500",
  "Sofia -> Audi Q7 -> 200 : 100000",
  "Montana -> Portokals -> 200000 : 1",
  "Montana -> Qgodas -> 20000 : 0.2",
  "Montana -> Chereshas -> 1000 : 0.3"
]);
