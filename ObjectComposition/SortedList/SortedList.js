function solve() {
  const collection = [];

  const instance = {
    add,
    remove,
    get,
    size: 0,
  };

  function add(element) {
    collection.push(element);
    collection.sort((a, b) => a - b);
    instance.size++;
    return instance;
  }

  function remove(index) {
    if (index >= 0 && index < collection.length) {
      collection.splice(index, 1);
      instance.size--;
      return instance;
    }
  }

  function get(index) {
    if (index >= 0 && index < collection.length) {
      return collection[index];
    }
  }

  return instance;
}

// Points 100/100
