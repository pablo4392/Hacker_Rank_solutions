console.clear();
console.log("===ARRAY GENERATOR===");
let arr = [];
const createArrays = (end) => {
  for (let i = 1; i <= end; i++) {
    arr.push(i);
  }
};

createArrays(8);
