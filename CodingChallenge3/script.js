// Coding Challenge #3

//Data 1

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

//Data 2

dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;

//Data 3

koalasScore3 = 106;

const averageDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(`The average score of the Dolphins is ${averageDolphinsScore}`);

const averageKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(`The average score of the Koalas is ${averageKoalasScore}`);

if ( averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log("Victoire des Koalas!!");
} else if(averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log("Victoire des Dolphins!!");
} else if(averageDolphinsScore === averageKoalasScore && averageKoalasScore >= 100 && averageDolphinsScore >= 100){
    console.log("I think there is a draw here!!");
} else {
    console.log("There is no winner today!");
}
