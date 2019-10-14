module.exports = function (input) {
    var fs = require("fs");
    // input
    var input = input;
    var ans = fs.existsSync(input);
    // rmdir use
    if (input == undefined) {
        console.log("Please input folder name");
        return;
    }
    if (ans != true) {
        console.log(input + " already deleted");
    } else {
        fs.rmdirSync(input);
        console.log(input + " is deleted");
    }
};