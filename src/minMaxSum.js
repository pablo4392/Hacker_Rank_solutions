console.clear();
console.log("===MIN MAX SUM ===");

const arr = [1, 3, 5, 7, 9];
const newArr = [3, 3, 5, 5];

const minMaxSum = (arr) => {
  let outMaxSum = null;
  let outMinSum = null;

  const maxNum = Math.max.apply(null, arr);
  const minNum = Math.min.apply(null, arr);

  if (maxNum === minNum) {
    let supportSum = null;
    arr.forEach((i) => (supportSum += i));
    outMaxSum = supportSum - maxNum;
    outMinSum = outMaxSum;
  } else {
    arr.filter((n) => n !== minNum).forEach((x) => (outMaxSum += x));
    arr.filter((m) => m !== maxNum).forEach((x) => (outMinSum += x));
  }

  return console.log(outMinSum, outMaxSum);
};

minMaxSum(arr);
minMaxSum(newArr);
