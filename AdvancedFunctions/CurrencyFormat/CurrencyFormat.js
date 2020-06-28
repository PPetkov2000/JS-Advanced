function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) {
    return symbol + " " + result;
  } else {
    return result + " " + symbol;
  }
}

// function result(formatter) {
//   return function(value) {
//     return formatter(",", "$", true, value);
//   };
// }

let dollarFormatter = currencyFormatter.bind(undefined, ",", "$", true);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71

// For some reason Judge gives 0/100 even though the results are correct

// Solution 2
// function currencyFormatter(separator, symbol, symbolFirst, value) {
//   let result = Math.trunc(value) + separator;
//   result += value.toFixed(2).substr(-2, 2);
//   if (symbolFirst) {
//     return symbol + " " + result;
//   } else {
//     return result + " " + symbol;
//   }
// }
// function result(formatter) {
//   return function(value) {
//     return formatter(",", "$", true, value);
//   };
// }
// let dollarFormatter = result(currencyFormatter);
// console.log(dollarFormatter(5345)); // $ 5345,00
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709)); // $ 2,71
