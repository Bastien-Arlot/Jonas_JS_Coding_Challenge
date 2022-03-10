'use strict';


// const gk1 = "Neuer";
// const gk2 = "Lafont";
// const fieldPlayers1 = ["Davies", "Muller", "Kimmich", "Lewandowski", "Sané", "Süle", "Gnabry", "Goretzka", "Coman","Hernandez"];
// const fieldPlayers2 = ["Blas", "Pallois", "Kolo Muani", "Girotto", "Coco", "Simon", "Merlin", "Corchia", "Chirivella", "Castelleto"];
// const player1 = [gk1, ...fieldPlayers1];
// console.log(player1);
// const player2 = [gk2, ...fieldPlayers2];
// console.log(player2);
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
//
// const players1Final = ["Thiago", "Countinho", "Perisic", ...player1];
//
// // const {team1, draw, team2} = game.odds;
//
// const printGoals = function(...playersName){
//     console.log(`${playersName}`);
// };
//
// printGoals(...allPlayers);

const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ], [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ], ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }, };

//Create one plyaer array for each team
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

//Create a variable to have gk and fielplayers for team 1
const [gk, ...fieldPlayers] = player1;
console.log(fieldPlayers);
console.log(gk);

//Create an array with both teams
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//Create an array with 3 substitue players added for team1
const players1Final = ["Thiago", "Countinho", "Perisic", ...player1];
console.log(players1Final);

//Create Variables for each odd
const {team1, x: draw, team2} = game.odds;
console.log(team1);
console.log(draw);
console.log(team1);

//Function that receive an arbitrary number of players (not an array) and print each of them to the console
const printGoals = function(...playersName){
    console.log(`Here comes the famous ${playersName}`);
    console.log(`and the numbers of goals where ${playersName.length}`);
}
printGoals("Matth", "Bruno", "Oscar");

//Local Operator Assignment

console.log(team1 > team2 && "Team 1 win");
console.log(team2 > team1 && "Team 2 win");