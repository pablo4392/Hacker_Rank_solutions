console.clear();
console.log("===NUMBER LINE JUMPS===");

const x1 = 2081;
const v1 = 8403;
const x2 = 9107;
const v2 = 8400;

const numberLineJumps = (x1, v1, x2, v2) => {
  let output = "NO";
  let firstKangaroo = [];
  let secondKangaroo = [];

  //first kangarro jumps
  for (let i = x1; i < 1000000; i = i + v1) {
    firstKangaroo.push(i);
  }

  //second kangarro jumps
  for (let i = x2; i < 1000000; i = i + v2) {
    secondKangaroo.push(i);
  }

  if (firstKangaroo.length > secondKangaroo.length) {
    for (let i = 0; i < secondKangaroo.length; i++) {
      if (firstKangaroo[i] === secondKangaroo[i]) {
        output = "YES";
      }
    }
  } else {
    for (let i = 0; i < firstKangaroo.length; i++) {
      if (firstKangaroo[i] === secondKangaroo[i]) {
        output = "YES";
      }
    }
  }

  return output;
};

console.log(numberLineJumps(x1, v1, x2, v2));
