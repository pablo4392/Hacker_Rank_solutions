console.clear();
console.log("===DIAGONAL DIFERENCES===");
const arr = [
  [1, 2, 3, 3],
  [4, -5, 6, 9],
  [9, 59, 9, 7],
  [10, 11, 1, -13]
];

function diagonalDiference(arr) {
  let x = null;
  let y = null;

  for (let i = 0; i < arr.length; i++) {
    x += arr[i][i];
  }

  arr.reverse();
  for (let j = 0; j < arr.length; j++) {
    y += arr[j][j];
  }

  // console.log("x = ", x);
  // console.log("y = ", y);
  return Math.abs(x - y);
}

console.log(diagonalDiference(arr));
