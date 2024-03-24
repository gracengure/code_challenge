//the readline module prompts the user to input the speed in the terminal and view the response
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function speedDetector() {
  rl.question("Insert the speed:", (speed) => {
    //Determine the answer based on the input speed
    if (speed <= 70) {
      answer = "OK";
    } else if ((demeritpoints = (speed - 70) / 5) <= 12) {
      answer=`points:${demeritpoints}`;
    } else {
      answer="License suspended";
    }
    //output the corresponding answer to the input speed
    console.log(`${answer}`)
    rl.close()
  });
}
speedDetector()