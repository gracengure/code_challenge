 //the readline module prompts the user to input the basicSalary and benefits in the terminal and view the respons
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//This function calculate the netpay based on the basicSalary and benefits input
function netSalaryCalculator(basicSalary,benefits){
  const taxRates=[
    { min :0, max:24000, rate:0.1},
    { min :24001, max:32333, rate:0.25},
    { min :32334, max:500000, rate:0.30},
    { min :500001, max:800000, rate:0.325},
    { min :800001, max:Infinity, rate:0.35},
    ]
// The grossSalary is declared and assigned values that point out how its calculation is done
    const grossSalary =basicSalary + benefits ;
    // the nhifDeductions is assigned a fixed amount
    const nhifDeductions= 1500;
    // the nssfDeductions is assigned a fixed amount
const nssfDeductions =500;
 //The tax is assigned a  fixed taxrate
let tax =0.7;
 //The netSalary is attained after deducting the grossSalary,tax,nhifDeductions and nssfDeductions
   const netSalary= grossSalary - tax-nhifDeductions-nssfDeductions;
//output the assigned value 
  console.log ( 'Gross pay:'+ basicSalary);
  console.log('PAYEE:'+ tax);
  console.log('NHIF deduction:'+nhifDeductions)
  console.log('NSSF deduction:'+nssfDeductions)
  console.log( 'net pay:'+netSalary)
//prompts the user to input the basicSalary and benefits
   rl.question("enter basic salary:",(basicSalary)=>{
    rl.question('enter benefits:',(benefits)=>{
      const result =netSalaryCalculator(parseFloat(basicSalary),
      parseFloat(benefits));
      rl.close()
  })})
  }
  netSalaryCalculator(5000 , 2000 )