const arr = [-4, 3, -9, 0, 4, 1];
const long = arr.length;

let positive = (arr.filter((i) => i > 0).length / long).toFixed(6);
let negative = (arr.filter((i) => i < 0).length / long).toFixed(6);
let zero = (arr.filter((i) => i === 0).length / long).toFixed(6);

console.log(positive + "\n" + negative + "\n" + zero);
