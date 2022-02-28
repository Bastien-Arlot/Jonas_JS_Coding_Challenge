'use strict';


const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return bill * (15 / 100);
    }else {
        return bill * (20/100);
    }
}
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [125+tips[0], 555+tips[1], 44+tips[2]];
console.log(total);

