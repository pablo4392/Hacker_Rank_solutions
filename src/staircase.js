console.clear();
console.log("=== STAIRCASE ===");

const n = 18;

const staircase = (n) => {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
      output += " ";
    }

    for (let j = 1; j <= i; j++) {
      output += "#";
    }
    output += "\n";
  }

  return output;
};

console.log(staircase(n));
