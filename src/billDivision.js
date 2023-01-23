console.clear();
console.log("===BILL DIVISION===");

//constantes
const k = 1;
const bill = [3, 10, 2, 9];
const b = 12;

const billDivision = (k, b, bill) => {
  let total = null;
  bill.splice(k, 1);
  for (let i = 0; i < bill.length; i++) {
    total = bill[i] + total;
  }

  let output = b - total / 2;

  if (output !== 0) {
    return output;
  } else {
    return "Bon apetite";
  }
};

console.log(billDivision(k, b, bill));
