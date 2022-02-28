'use strict';



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Data 1
let avgDolphins = calcAverage(44, 23 , 71);
let avgKoalas = calcAverage(65, 54, 49);
//Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

function checkWinner(dolphinsScore, koalasScore){
    if (dolphinsScore > (koalasScore * 2)) {
        return `Dolphins wins ${dolphinsScore} vs ${koalasScore}`;
    } else if(avgKoalas > (avgDolphins * 2)){
        return `Koalas wins ${koalasScore} vs ${dolphinsScore}`;
    } else{
        return "No one win";
    }
}

const match1 = checkWinner(avgDolphins, avgKoalas);

console.log(match1);

const match2 = checkWinner(avgDolphins,avgKoalas);
console.log(match2);





