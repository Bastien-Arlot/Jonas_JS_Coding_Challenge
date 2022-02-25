// ---- Data 1
let heightMark = 1.69;
let heightJohn = 1.95;

let massMark = 78;
let massJohn = 92;

const bmiMark = massMark / heightMark ** 2;
const bmiMarkv2 = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / heightJohn ** 2;
const bmiJohnv2 = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiMarkv2);
console.log(bmiJohn, bmiJohnv2);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// ----- Data 2

heightMark = 1.88;
massMark = 95;

heightJohn = 1.76;
massJohn = 85;

console.log(bmiMark, bmiMarkv2);
console.log(bmiJohn, bmiJohnv2);
console.log(markHigherBMI);