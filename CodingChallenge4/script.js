// Coding Challenge #4

let bill = 275;
bill = 40;
bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);

const finalBill = bill + tip;

console.log(`the bill is ${bill} euros so the tip will be ${tip} euros thus the final bill will be ${finalBill}euros`);