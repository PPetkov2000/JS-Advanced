function solve(params) {
  let register = [];

  for (let param of params) {
    let [heroName, heroLevel, items] = param.split(" / ");
    items = items ? items.split(", ") : [];
    let heroInfo = {
      name: heroName,
      level: Number(heroLevel),
      items: []
    };

    items.forEach(item => {
      heroInfo.items.push(item);
    });

    register.push(heroInfo);
  }

  console.log(JSON.stringify(register));
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara"
]);

console.log("_".repeat(40) + "\n");

solve(["Jake / 1000 / Gauss, HolidayGrenade"]);
