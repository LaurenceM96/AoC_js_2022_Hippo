const read_input = require("../read_input");

data = read_input.read_input('./day3/day3_input.txt');

lines = data.split('\n');

// Part 1
sum = 0;

for (line of lines) {
    secondHalf = line.substring(line.length / 2);
    
    for (let i = 0; i < line.length/2; i++) {
        if (secondHalf.includes(line[i])) {
            char = line[i];
            break;
        }
    }

    sum += char.charCodeAt(0) - 96 < 0 ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
}

console.log(sum);

// Part 2
sum = 0;

for (let i = 0; i < lines.length; i += 3) {
    for (char of lines[i]) {
        if (lines[i+1].includes(char) && lines[i+2].includes(char)) {
            commonChar = char;
            break;
        }
    }

    sum += char.charCodeAt(0) - 96 < 0 ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
}

console.log(sum);