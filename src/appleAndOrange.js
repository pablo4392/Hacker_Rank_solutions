console.clear();
console.log("===APPLE AND ORANGE===");

const s = 7; //sam's house start position
const t = 11; //sam's house final position
const a = 5; //apple tree position
const b = 15; //orange tree position
const apples = [-2, 2, 1]; //aples positions
const oranges = [5, -6]; //oranges positions

const appleAndOrange = (s, t, a, b, apples, oranges) => {
  const samsHouse = [];
  let appleOutput = null;
  let orangeOutput = null;

  for (let i = s; i <= t; i++) {
    samsHouse.push(i);
  }

  const applesPosition = apples.map((element) => element + a);
  const orangesPosition = oranges.map((element) => element + b);

  for (let i = 0; i < samsHouse.length; i++) {
    for (let j = 0; j < applesPosition.length; j++) {
      if (samsHouse[i] === applesPosition[j]) {
        appleOutput++;
      }
    }
    for (let j = 0; j < orangesPosition.length; j++) {
      if (samsHouse[i] === orangesPosition[j]) {
        orangeOutput++;
      }
    }
  }

  return [appleOutput, orangeOutput];
};

console.log(appleAndOrange(s, t, a, b, apples, oranges));
