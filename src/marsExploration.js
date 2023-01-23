console.clear();
console.log("===MARS EXPLORATION===");

const s = "SOSSPSSQSSOR";
const marsExploration = (s) => {
  const signalTimes = s.length / 3;
  const signal = "SOS".repeat(signalTimes);
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== signal[i]) {
      output++;
    }
  }

  return output;
};

console.log(marsExploration(s));
