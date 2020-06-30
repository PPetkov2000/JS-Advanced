function attachEventsListeners() {
  const convertForm = {
    days: value => {
      const hours = value * 24;
      const minutes = hours * 60;
      const seconds = minutes * 60;
      return [hours, minutes, seconds];
    },
    hours: value => {
      const days = value / 24;
      const minutes = value * 60;
      const seconds = minutes * 60;
      return [days, minutes, seconds];
    },
    minutes: value => {
      const hours = value / 60;
      const days = hours / 24;
      const seconds = value * 60;
      return [days, hours, seconds];
    },
    seconds: value => {
      const minutes = value / 60;
      const hours = minutes / 60;
      const days = hours / 24;
      return [days, hours, minutes];
    }
  };

  const daysInput = document.getElementById("days");
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  function inputHandler(currentInput, unit, firstI, secondI, thirdI) {
    const value = Number(currentInput.value);
    let [firstUnit, secondUnit, thirdUnit] = convertForm[unit](value);
    firstI.value = firstUnit;
    secondI.value = secondUnit;
    thirdI.value = thirdUnit;
  }

  document
    .getElementById("daysBtn")
    .addEventListener("click", () =>
      inputHandler(daysInput, "days", hoursInput, minutesInput, secondsInput)
    );
  document
    .getElementById("hoursBtn")
    .addEventListener("click", () =>
      inputHandler(hoursInput, "hours", daysInput, minutesInput, secondsInput)
    );
  document
    .getElementById("minutesBtn")
    .addEventListener("click", () =>
      inputHandler(minutesInput, "minutes", daysInput, hoursInput, secondsInput)
    );
  document
    .getElementById("secondsBtn")
    .addEventListener("click", () =>
      inputHandler(secondsInput, "seconds", daysInput, hoursInput, minutesInput)
    );
}

document.addEventListener("DOMContentLoaded", attachEventsListeners);

// Rounding could be added
