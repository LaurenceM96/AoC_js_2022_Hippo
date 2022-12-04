const fs = require('fs');

function read_input(path) {

    var content = fs.readFileSync(path, "utf8").toString();

    return content;
}

module.exports = { read_input };