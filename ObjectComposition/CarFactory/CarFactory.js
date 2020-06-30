function solve(params) {
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  return {
    model: params.model,
    engine: engines.find((e) => params.power <= e.power),
    carriage: {
      type: params.carriage,
      color: params.color,
    },
    wheels: Array(4).fill(
      params.wheelsize % 2 === 0 ? params.wheelsize - 1 : params.wheelsize
    ),
  };
}

console.log(
  solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);

console.log("_".repeat(40));

console.log(
  solve({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

// Points 100/100
