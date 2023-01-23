const multiplicacion = (m) => {
  for (let i = 1; i <= 10; i++) {
    let output = `${i} x ${m} = ${i * m}`;
    console.log(output);
  }
};

console.log(multiplicacion(3));
