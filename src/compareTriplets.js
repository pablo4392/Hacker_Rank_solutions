console.clear();
console.log("===COMPARE TRIPLETS===");
const a = [17, 28, 30];
const b = [99, 16, 8];

const compareTriplets = (a, b) => {
  let res = [null, null];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      res[0] += 1;
    }
    if (a[i] < b[i]) {
      res[1] += 1;
    }
  }

  return res;
};

console.log(compareTriplets(a, b));
