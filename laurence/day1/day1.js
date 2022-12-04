const read_input = require("../read_input");

function get_totals(data) {
    let numbers = data.split("\n");

    numbers = numbers.map(str => {
        return Number(str);
      });

    totals = [];
    thisTotal = 0;
    for (let num of numbers) {
        if (num === 0) {
            totals.push(thisTotal);
            thisTotal = 0;
            continue;
        }
        thisTotal += num;
    }

    return totals;
}

data = read_input.read_input('./day1/day1_input.txt')

totals = get_totals(data);

// part 1
console.log(Math.max(...totals))

// part 2
totals.sort()

console.log(totals[totals.length-1] + totals[totals.length-2] + totals[totals.length-3])