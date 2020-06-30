function solve() {
  Array.from(document.querySelectorAll("tr"))
    .slice(1)
    .forEach((tr) => {
      tr.addEventListener("click", function () {
        if (this.hasAttribute("style")) {
          this.removeAttribute("style");
        } else {
          Array.from(this.parentElement.children).forEach((row) => {
            row.removeAttribute("style");
          });
          this.style.backgroundColor = "#413f5e";
        }
      });
    });
}

// Points 100/100
