class Kitchen {
  constructor(budget) {
    this.budget = budget;
    this.menu = {};
    this.productsInStock = [];
    this.actionsHistory = [];
  }

  loadProducts(arr) {
    let actions = [];
    for (let product of arr) {
      let [productName, productQuantity, productPrice] = product.split(" ");
      if (this.budget - Number(productPrice) >= 0) {
        if (this.productsInStock.hasOwnProperty(productName)) {
          this.productsInStock[productName] += Number(productQuantity);
        } else {
          this.productsInStock[productName] = Number(productQuantity);
          this.budget -= Number(productPrice);
        }
        actions.push(`Successfully loaded ${productQuantity} ${productName}`);
      } else {
        actions.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    this.actionsHistory = [...this.actionsHistory, ...actions];
    return this.actionsHistory.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    if (!this.menu.hasOwnProperty(meal)) {
      this.menu[meal] = {
        price: price,
        neededProducts: neededProducts
      };
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meals in the menu, other ideas?`;
    } else {
      return `The ${meal} is already in our menu, try something different.`;
    }
  }

  showTheMenu() {
    let printMessage = [];
    Object.entries(this.menu).forEach(product =>
      printMessage.push(`${product[0]} - $ ${product[1].price}`)
    );
    if (printMessage.length === 0) {
      return `Our menu is not ready yet, please come later...`;
    } else {
      return printMessage.join("\n") + "\n";
    }
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    const neededProducts = this.menu[meal].neededProducts;
    for (let product of neededProducts) {
      let [productName, productQuantity] = product.split(" ");
      if (
        !this.productsInStock.hasOwnProperty(productName) ||
        this.productsInStock[productName] < Number(productQuantity)
      ) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      } else {
        this.productsInStock[productName] -= Number(productQuantity);
        this.budget += this.menu[meal].price;
      }
    }
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

let kitchen = new Kitchen(1000);

kitchen.loadProducts([
  "Banana 10 5",
  "Banana 20 10",
  "Strawberries 50 30",
  "Yogurt 10 10",
  "Yogurt 500 1500",
  "Honey 5 50"
]);

console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50"
  ])
);

console.log("_".repeat(50));

console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5"
    ],
    15.55
  )
);

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder("frozenYogurt"));

// Points 93/100 - Got help from internet for this one
