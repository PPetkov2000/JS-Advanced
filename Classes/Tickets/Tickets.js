function solve(arr, prop) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  return arr
    .reduce((acc, curr) => {
      let [destination, price, status] = curr.split("|");
      let ticket = new Ticket(destination, price, status);
      acc.push(ticket);
      return acc;
    }, [])
    .sort((a, b) => {
      if (typeof a[prop] === "string") {
        return a[prop].localeCompare(b[prop]);
      } else {
        return a[prop] - b[prop];
      }
    });
}

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed"
    ],
    "destination"
  )
);
