console.clear();
console.log("=== STRONG PASSWORD ===");

const n = 11;
const password = "Ab1";

const stringPassword = (n, password) => {
  let output = 0;
  if (!/[\d]/.test(password)) {
    output++;
  }
  if (!/[a-z]/.test(password)) {
    output++;
  }
  if (!/[A-Z]/.test(password)) {
    output++;
  }
  if (!/[!@#$%^&*()--+]/.test(password)) {
    output++;
  }
  if (password.length < 6 && 6 - password.length > output) {
    return 6 - password.length;
  }
  return output;
};

console.log(stringPassword(n, password));
