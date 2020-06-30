function attachEventsListeners() {
  const html = {
    inputDistance: () => document.getElementById("inputDistance"),
    outputDistance: () => document.getElementById("outputDistance"),
    inputUnits: () => document.getElementById("inputUnits"),
    outputUnits: () => document.getElementById("outputUnits"),
  };

  const outputToHTML = output.bind(
    undefined,
    html.outputDistance(),
    html.inputUnits(),
    html.outputUnits()
  );

  const units = ["km", "m", "cm", "mm", "mi", "yrd", "ft", "in"].reduce(
    (acc, curr) => {
      acc[curr] = (value) => outputToHTML(value);
      return acc;
    },
    {}
  );

  const actions = {
    convert: (inputValue) => units[html.inputUnits().value](inputValue),
  };

  function convert(from, to, value) {
    const unitsMap = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };

    return (unitsMap[from] * value) / unitsMap[to];
  }

  function output(outputField, inputUnit, outputUnit, value) {
    outputField.value = convert(inputUnit.value, outputUnit.value, value);
  }

  document.addEventListener("click", function (e) {
    if (typeof actions[e.target.id] === "function") {
      actions[e.target.id](html.inputDistance().value);
    }
  });
}
