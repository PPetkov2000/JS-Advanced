(function () {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return `${str}${this}`;
    }
    return `${this}`;
  };
  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return `${this}${str}`;
    }
    return `${this}`;
  };
  String.prototype.isEmpty = function () {
    return this.toString() === "";
  };
  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    } else if (n >= this.length) {
      return this.toString();
    } else if (n < this.length) {
      let lastSpace = this.substr(0, n - 2).lastIndexOf(" ");
      if (lastSpace !== -1) {
        return this.substr(0, lastSpace).concat("...");
      } else {
        return this.substr(0, n - 3).concat("...");
      }
    }
  };
  String.format = function (string, ...params) {
    return params.reduce((str, param, i) => {
      return str.replace(`{${i}}`, param);
    }, string);
  };
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);
str = String.format("jumps {0} {1}", "dog");
console.log(str);

// Points 100/100
