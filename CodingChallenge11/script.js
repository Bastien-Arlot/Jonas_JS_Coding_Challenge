`use strict`;

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// My solution
// let events = [];
//
// for ([key, value] of gameEvents){
//     events.includes(value) ? false : events += value;
// };
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
//
// for([key,value] of gameEvents){
//     console.log(`A ${value} happened every at ${key}`);
// }
//
// for ([key, value] of gameEvents){
//     key < 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
// };

// Refactored solution

const events = [...new Set(gameEvents.values())];
console.log(events);

// console.log(`An event happened on average every ${90 / gameEvents.size} minutes`);

// the previous statement answer the question but to be more accurate you can select the last elem of the map by putting into an array and applying pop on it (which delete but also return the last elem)

const time =  [...gameEvents.keys()].pop();
console.log(`An event happened on average every ${time / gameEvents.size} minutes`);




