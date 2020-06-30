function solve(params) {
  return {
    weight: params.weight,
    experience: params.experience,
    levelOfHydrated: params.dizziness
      ? (params.levelOfHydrated += params.weight * 0.1 * params.experience)
      : params.levelOfHydrated,
    dizziness: params.dizziness ? (params.dizziness = false) : params.dizziness,
  };
}

console.log(
  solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })
);

console.log("_".repeat(40));

console.log(
  solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true })
);

console.log("_".repeat(40));

console.log(
  solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false })
);

// Points 100/100
