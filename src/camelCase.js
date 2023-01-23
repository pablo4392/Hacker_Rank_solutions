console.clear();
console.log("===CAMEL CASE===");
const s = "saveChangesInTheEditor";

const camelCase = (s) => {
  const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output = 1;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < alphabeth.length; j++) {
      if (s[i] === alphabeth[j]) {
        output++;
      }
    }
  }

  return output;
};

console.log(camelCase(s));
