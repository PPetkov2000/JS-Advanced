function solve(data) {
  return JSON.parse(data).reduce((acc, curr) => {
    for (let prop in curr) {
      acc[prop] = curr[prop];
    }
    return acc;
  }, {});
}

console.log(
  solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)
);

console.log("_".repeat(40));

console.log(
  solve(
    `[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`
  )
);
