'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🟠' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
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
    ],
    [
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
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayes] = players1;
const allplayers = [...players1, ...players2];
console.log(allplayers);
const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw : ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Lewandowski', 'Kimich');
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is most likely to win');
team1 > team2 && console.log('Team 2 is most likely to win');

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let avverage = 0;
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum = sum + odd;
}
avverage = sum / Object.values(game.odds).length;
console.log(avverage);
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const [team, odd] = Object.entries(game.odds);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

let events = [...gameEvents.values()];
console.log(events);
const eventsSet = new Set(events);
events = [...eventsSet];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);
for (const [min, event] of gameEvents.entries()) {
  if (min <= 45) {
    console.log(`[FIRST HALF] ${min} - ${event}`);
  } else {
    console.log(`[SECOND HALF] ${min} - ${event}`);
  }
}

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🟢'.repeat(i + 1)}`);
  }
});
