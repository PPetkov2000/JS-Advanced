(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    const newArr = [];

    for (let i = n; i < this.length; i++) {
      newArr.push(this[i]);
    }

    return newArr;
  };
  Array.prototype.take = function (n) {
    const newArr = [];

    for (let i = 0; i < n; i++) {
      newArr.push(this[i]);
    }

    return newArr;
  };
  Array.prototype.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0);
  };
  Array.prototype.average = function () {
    return this.reduce((acc, curr) => acc + curr, 0) / this.length;
  };
})();

// Points 100/100
