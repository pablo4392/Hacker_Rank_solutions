console.log("===CAESAR CIPHER===");
const s = "middle-Outz";
const k = 20;
const abc = "abcdefghijklmnopqrstuvwxyz";
const abcUpper = abc.toUpperCase();

const output = s.split("").map((c) => {
  if (abc.includes(c)) {
    console.log((abc.indexOf(c) + k) % 26, abc.indexOf(c) + k);
    return abc[(abc.indexOf(c) + k) % 26];
  } else if (abcUpper.includes(c)) {
    return abcUpper[(abcUpper.indexOf(c) + k) % 26];
  } else {
    return c;
  }
});

console.log(output);
