function solve(params) {
  let obj = {};

  for (let param of params) {
    let [carBrand, carModel, producedCars] = param.split(" | ");
    if (!obj.hasOwnProperty(carBrand)) {
      obj[carBrand] = {};
    }
    if (!obj[carBrand].hasOwnProperty(carModel)) {
      obj[carBrand][carModel] = 0;
    }
    obj[carBrand][carModel] += Number(producedCars);
  }

  for (let car in obj) {
    console.log(car);
    for (let carInfo in obj[car]) {
      console.log(`###${carInfo} -> ${obj[car][carInfo]}`);
    }
  }

  // Object.entries(obj).forEach(obj => {
  //   console.log(obj[0]);
  //   Object.entries(obj[1]).forEach(car =>
  //     console.log(`###${car[0]} -> ${car[1]}`)
  //   );
  // });
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10"
]);
