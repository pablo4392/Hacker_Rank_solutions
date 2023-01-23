console.clear();
console.log("===GRADING STUDENTS===");

const grades = [73, 65, 38, 33, 99];

const gradingStudents = (grades) => {
  const output = grades.map((grade) => {
    if (grade < 38 || grade % 5 < 3) {
      return grade;
    } else {
      return grade - (grade % 5) + 5;
    }
  });
  return output;
};

console.log(gradingStudents(grades));
