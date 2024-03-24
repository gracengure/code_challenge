//the readline module prompts the user to input the student marks in the terminal and view the grade
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function gradeGenerator(){
rl.question ('Insert student marks(between 0 and 100):', (studentMark) => {
  let grade;
  //Determine the grade based on the input marks
      if (studentMark > 79 && studentMark <= 100) {
    grade= "A";
  } else if (studentMark >= 60 && studentMark <= 79) {
    grade= "B";
  } else if (studentMark > 49 && studentMark <= 59) {
    grade= "C";
  } else if (studentMark >= 40 && studentMark <= 49) {
    grade= "D";
  } else if (studentMark >= 0 && studentMark <= 39) {
    grade= "E";
  }
  else (
    grade = "Invalid grade"
  )
  //output the corresponding grade to the input marks
console.log(`Grade:${grade}`);

rl.close()
});}
gradeGenerator()