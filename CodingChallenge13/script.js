// // 'use strict';
// // const flight = "LH234";
// // const bastien ={
// //   name: "Bastien Arlot",
// //   passport: 2344555
// // }
// //
// // const checkIn = function(flightNum, passenger){
// //  flightNum = 'LH999';
// //  passenger.name = "Mr." + passenger.name;
// //
// //  if(passenger.passport === 2344555){
// //    alert("Check in")
// //  } else {
// //    alert("Wrong passport!");
// //  }
// // }
// //
// // checkIn(flight, bastien);
// // console.log(flight, bastien);
// //
// // const oneWord = function(str){
// //   return str.replace(/ /g, "").toLowerCase();
// // }
// // const  firstUpperWord = function(str){
// //   const [first, ...other] =  str.split(" ");
// //   console.log(typeof first);
// //   console.log(typeof other);
// //    return [first.toUpperCase(),...other].join(" ");
// //
// // }
// // const transform = function(str, fn){
// //   console.log(`${str}`);
// //   console.log(`${fn(str)}`);
// //   console.log(`${fn.name}`);
// // }
// // console.log(transform("Salut les potes", firstUpperWord));
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name}, booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//   },
// };
//
// lufthansa.book(239, 'Barlot');
// console.table(lufthansa);
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//
// };
// //call ,ethod for this.
// const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa, 453, 'me and myself');
// console.log(lufthansa)
//
// //Apply method is the the same than the call method but it takes an array as argument
//
// const flightData = [583, 'Laurie Dec'];
// book.apply(eurowings, flightData);
// console.log(eurowings);
//
// // The apply method isnt used nowdays cause we have the spread method now aka ...
// book.call(eurowings, ...flightData);
//
// //the bind method allow to create a new function with (here) the book method which will bind with it's arg
//
// const bookEurowing = book.bind(eurowings);
// bookEurowing(455, "marcus rash");
// console.log(eurowings);
// const bookLU = book.bind(lufthansa);
// // You can use bind to be more specific since the arg at the initialization of the new function will be set in stone
// const bookEurowings23 = book.bind(eurowings, 23);
// bookEurowings23("Roger Moore"); // since the flight number is already set in stone you juste have to indicate the name of the passenger
// console.log(eurowings);
// //If you use argument already established in part, it's called partial application
//
// // bind method with Event Listeners
//
// lufthansa.planes = 300;
// lufthansa.buyPlane = function (){
//   console.log(this);
//   this.planes++; // this keyword is always attached to the event handler of its
//   console.log(this.planes)
// };
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// //since this keyword is attributed dynamically we have to specify in what we want it to reference to
// //that's why we'd use the bind method (without any indication this keyword refere to it's event handler, here it's the button
// //so it wouldnt be a Number.
//
// // Partial Application (preset parameters)
//
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200)); // would be without presets
//
// const addVat = addTax.bind(null, 0.23); // we preset params so it's partial application
// // addVat = value => value + value * 0.23;
//
// console.log(addVat(100));
// console.log(addVat(23));
//
// const newTax = (rate, value) => value + value * rate;
// console.log(newTax(0.1, 200));
//
// const addTaxRate = function(rate){
//   return function (value) {
//     return value + (value * rate);
//   };
// };
//
// console.log(addTaxRate(0.1)(200));
// const addVAT2 = addTaxRate(0.1);
// console.log(addVAT2(200));
//
// const addVAT3 = rate => value => value + value * rate;
//
// console.log(addVAT3(0.1)(200));
//
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function (){
//     let answer = prompt(this.question + "\n" + this.options);
//
//     if (Number(answer) >= 0 && Number(answer) <= 3){
//       switch (Number(answer)){
//         case 0:
//           this.answers[0] += 1;
//           break;
//         case 1:
//           this.answers[1] += 1;
//           break;
//         case 2:
//           this.answers[2] += 1;
//           break;
//         case 3:
//           this.answers[3] += 1;
//           break;
//       }
//     }else{
//       prompt("Invalid option! You must choose between 0 and 3");
//     }
//   }
// };
// const pollButton = document.querySelector(".poll");
// pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));
// console.log("hello");
// poll.registerNewAnswer();
// // poll.registerNewAnswer();
// console.log(poll.answers);
// console.log(poll.answers[0]);
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(prompt(this.question + "\n" + this.options));
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    console.log(poll.answers);

  },
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
console.log(poll.answers);