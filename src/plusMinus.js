const arr = [-4, 3, -9, 0, 4, 1];

const long = arr.length;
let pos = null;
let neg = null;
let zero = null;

arr.forEach((element) => {
  if (element > 0) {
    pos += 1;
  } else if (element < 0) {
    neg += 1;
  } else if (element === 0) {
    zero += 1;
  }
});

let rPos = (pos / long).toFixed(6);
let rNeg = (neg / long).toFixed(6);
let rZero = (zero / long).toFixed(6);

console.log(rPos + "\n" + rNeg + "\n" + rZero);
