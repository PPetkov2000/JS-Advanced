function solve(kingdoms, fightingKingdoms) {
  let obj = {};

  for (let kingdomInfo of kingdoms) {
    let kingdomName = kingdomInfo.kingdom;
    let kingdomGeneral = kingdomInfo.general;
    let generalArmy = kingdomInfo.army;

    if (!obj.hasOwnProperty(kingdomName)) {
      obj[kingdomName] = {};
    }
    if (!obj[kingdomName].hasOwnProperty(kingdomGeneral)) {
      obj[kingdomName][kingdomGeneral] = {
        generalArmy: 0,
        victories: 0,
        defeats: 0
      };
    }
    obj[kingdomName][kingdomGeneral].generalArmy += generalArmy;
  }

  for (let fightingKingdomInfo of fightingKingdoms) {
    let attackingKingdom = fightingKingdomInfo[0];
    let attackingGeneral = fightingKingdomInfo[1];
    let defendingKingdom = fightingKingdomInfo[2];
    let defendingGeneral = fightingKingdomInfo[3];
    let differentKingdoms = false;

    for (let i = 0; i < Object.keys(obj[attackingKingdom]).length; i++) {
      if (
        Object.keys(obj[attackingKingdom])[i] !==
        Object.keys(obj[defendingKingdom])[i]
      ) {
        differentKingdoms = true;
      }
    }

    if (differentKingdoms) {
      if (
        obj[attackingKingdom][attackingGeneral].generalArmy >
        obj[defendingKingdom][defendingGeneral].generalArmy
      ) {
        obj[attackingKingdom][attackingGeneral].generalArmy = Math.floor(
          obj[attackingKingdom][attackingGeneral].generalArmy * 1.1
        );
        obj[defendingKingdom][defendingGeneral].generalArmy = Math.floor(
          obj[defendingKingdom][defendingGeneral].generalArmy * 0.9
        );
        obj[attackingKingdom][attackingGeneral].victories++;
        obj[defendingKingdom][defendingGeneral].defeats++;
      } else if (
        obj[attackingKingdom][attackingGeneral].generalArmy <
        obj[defendingKingdom][defendingGeneral].generalArmy
      ) {
        obj[attackingKingdom][attackingGeneral].generalArmy = Math.floor(
          obj[attackingKingdom][attackingGeneral].generalArmy * 0.9
        );
        obj[defendingKingdom][defendingGeneral].generalArmy = Math.floor(
          obj[defendingKingdom][defendingGeneral].generalArmy * 1.1
        );
        obj[attackingKingdom][attackingGeneral].defeats++;
        obj[defendingKingdom][defendingGeneral].victories++;
      }
    }
  }

  let sortedGenerals = Object.entries(obj).sort((a, b) => {
    let aVictories = 0;
    let bVictories = 0;
    let aDefeats = 0;
    let bDefeats = 0;

    Object.values(a[1]).forEach(val => {
      aVictories += val.victories;
      aDefeats += val.defeats;
    });
    Object.values(b[1]).forEach(val => {
      bVictories += val.victories;
      bDefeats += val.defeats;
    });

    return (
      bVictories - aVictories || aDefeats - bDefeats || a[0].localeCompare(b[0])
    );
  });

  sortedGenerals.slice(0, 1).forEach(info => {
    console.log(`Winner: ${info[0]}`);
    Object.entries(info[1])
      .sort((a, b) => b[1].generalArmy - a[1].generalArmy)
      .forEach(general => {
        console.log(`/\\general: ${general[0]}`);
        console.log(`---army: ${general[1].generalArmy}`);
        console.log(`---wins: ${general[1].victories}`);
        console.log(`---losses: ${general[1].defeats}`);
      });
  });
}

solve(
  [
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }
  ],
  [
    ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
  ]
);

console.log("_".repeat(40) + "\n");

solve(
  [
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 }
  ],
  [
    ["YorkenShire", "Quinn", "Stonegate", "Doran"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"]
  ]
);

// Points 100/100 - I cannot believe that I solved this problem on my own
