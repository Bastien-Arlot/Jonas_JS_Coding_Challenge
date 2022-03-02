'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills.length);

const tips = [];
const totals = [];

const calctip = function(bill){
    if (bill >= 50 && bill <= 300){
    return bill * (15/100);
    } else {
        return bill * (20/100);
    }
}


let i = 0;

while (bills[i]){
    tips[i] = calctip(bills[i]);
    totals[i] = tips[i] + bills [i];
    i++;
}

console.log(tips);
console.log(totals);

const calcAverage = function(arr){
    let i = 0
    let sum = 0
    while(arr[i]){
    sum += arr[i];
    i++;
    }
    return sum / (arr.length);
}

console.log(calcAverage(bills));
