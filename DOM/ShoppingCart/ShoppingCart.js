document.addEventListener("DOMContentLoaded", function() {
  const output = document.querySelector("textarea");
  const checkout = document.querySelector(".checkout");
  const boughtProducts = [];
  let totalPrice = 0;

  Array.from(
    document.querySelectorAll(".product > .product-add > .add-product")
  ).map(button => button.addEventListener("click", addToCart));
  checkout.addEventListener("click", checkOut);

  function addToCart(e) {
    const parent = e.target.parentElement.parentElement;
    const productName = parent.querySelector(
      ".product-details > .product-title"
    ).innerHTML;
    const productPrice = Number(
      parent.querySelector(".product-line-price").innerHTML
    );
    output.value += `Added ${productName} for ${productPrice.toFixed(
      2
    )} to the cart.\n`;
    if (!boughtProducts.includes(productName)) {
      boughtProducts.push(productName);
    }
    totalPrice += productPrice;
  }

  function checkOut() {
    output.value += `You bought ${boughtProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}`;
    Array.from(
      document.querySelectorAll(".product > .product-add > .add-product")
    ).map(button => button.removeEventListener("click", addToCart));
    checkout.removeEventListener("click", checkOut);
  }
});
