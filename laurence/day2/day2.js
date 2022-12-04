const read_input = require("../read_input");

data = read_input.read_input('./day2/day2_input.txt');

function mod(a, b) {
    const c = a % b;
    return c < 0 ? c + b : c;
}

games = data.split('\n');


// Part 1
points = 0;

for (game of games) {
    plays = game.split(' ');

    points += parseInt(plays[1], 36) - 32;

    // Draw
    if ((parseInt(plays[0],36)-10) === (parseInt(plays[1],36)-33)) {
        points += 3;
        continue;
    }

    // Winner
    if (mod((parseInt(plays[0], 36)-10) - (parseInt(plays[1], 36)-33), 3) > 3 / 2) {
        points += 6;
    }

}

console.log(points);

// Part 2

points = 0;

const winMap = new Map([
    ["A", 2],
    ["B", 3],
    ["C", 1]
]);

const loseMap = new Map([
    ["A", 3],
    ["B", 1],
    ["C", 2]
]);

for (game of games) {
    plays = game.split(' ');

    //Lose
    if (plays[1] === "X") {
        points += loseMap.get(plays[0]);
    }

    //Draw
    if (plays[1] === "Y") {
        points += parseInt(plays[0], 36) - 6;
    }

    //Win
    if (plays[1] === "Z") {
        points += winMap.get(plays[0]) + 6
    }
}

console.log(points);