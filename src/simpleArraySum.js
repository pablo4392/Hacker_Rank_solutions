console.clear();
console.log("===SIMPLE ARRAY SUM===");

const firstArray = [1, 2, 3, 4, 5, 6];
const secondArray = [2, 4, 6, 8, 10];

//using "forEach" function
const simpleArraySum = (arr) => {
  let output = null;
  arr.forEach((element) => {
    output += element;
  });

  return output;
};

// using "for" function
function arraySum(arr) {
  let sum = null;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(simpleArraySum(firstArray));
console.log(arraySum(secondArray));
