console.clear();
console.log("===BIG SORTING===");

const unsorted = [6, 31415926535897932384626433832795, 1, 3, 10, 3, 5];
let n = 0;

console.log(
  unsorted.sort((a, b) => {
    return a - b;
  })
);
