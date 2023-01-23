console.clear();
console.log("===BIRTHDAY CAKE CANDLES===");
const candles = [3, 2, 1, 3, 3];

const birthdayCakeCandles = (candles) => {
  const maxValue = Math.max(...candles);
  let output = 0;

  candles.forEach((value) => {
    if (value === maxValue) {
      output++;
    }
  });

  return output;
};

console.log(birthdayCakeCandles(candles));
