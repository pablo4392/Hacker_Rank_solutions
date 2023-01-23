console.clear();
console.log("=== TIME CONVERSION ===");

// Objetivo: convierte el reloj de 12 horas a 24
const am = "12:25:50AM";
const pm = "09:05:45PM";

const timeConversion = (s) => {
  let substract = s.slice(0, 2);
  let add = parseInt(substract, 10) + 12;

  if (s[8] === "P") {
    if (add === 24) {
      return s.replace("PM", "");
    } else {
      let modify = s.replace(substract, add);
      let output = modify.replace("PM", "");
      return output;
    }
  } else {
    if (add === 24) {
      let change = s.replace(substract, "00");
      let output = change.replace("AM", "");
      return output;
    } else {
      return s.replace("AM", "");
    }
  }
};

console.log(timeConversion(am));
console.log(timeConversion(pm));
