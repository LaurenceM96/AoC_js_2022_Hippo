const read_input = require("../read_input");

data = read_input.read_input('./day4/day4_input.txt');

lines = data.split('\n');


// Part 1
sum = 0;

for (line of lines) {
    pairs = line.split(',');
    pair0 = pairs[0].split('-');
    pair1 = pairs[1].split('-');

    pair0 = pair0.map(Number);
    pair1 = pair1.map(Number);

    if (pair0[0] >= pair1[0] && pair0[1] <= pair1[1]) {
        sum++;
        continue;
    }

    if (pair1[0] >= pair0[0] && pair1[1] <= pair0[1]) {
        sum++;
    }
}

console.log(sum);

// Part 2
sum = 0;

for (line of lines) {
    pairs = line.split(',');
    pair0 = pairs[0].split('-');
    pair1 = pairs[1].split('-');

    pair0 = pair0.map(Number);
    pair1 = pair1.map(Number);

    if (Math.max(...pair0) < Math.min(...pair1) || Math.max(...pair1) < Math.min(...pair0)) {
        continue;
    }
    
    sum++
}

console.log(sum);