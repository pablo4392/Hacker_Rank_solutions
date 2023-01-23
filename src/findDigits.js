console.clear();
console.log("===FIND DIGITS===");
// Objetivo: dividir un numero entero entre sus propios digitos
// y devolver la cantidad de veces que se puede devolver un
// numero entero en su division

const n = 5634;

const findDigits = (n) => {
  const arrSupport = [];
  let output = null;
  let intString = n.toString();

  for (let i = 0; i < intString.length; i++) {
    arrSupport.push(intString[i]);
  }

  let arrParse = arrSupport.map((value) => parseInt(value, 10));

  for (let i = 0; i < arrParse.length; i++) {
    if (n % arrParse[i] === 0) {
      output++;
    }
  }

  return output;
};

console.log(findDigits(n));
