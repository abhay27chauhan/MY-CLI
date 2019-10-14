#!/usr/bin/env node
module.exports = function(input) {
    var fs = require("fs");
    // input
    // console.log(process.argv[2]);
    // console.log(process.argv.slice(2));
    // input
    var input = input;
    var ans = fs.existsSync(input);
    // mkdir use
    if (input == undefined) {
      console.log("Please input folder name");
      return;
    }
    if (ans === true) {
      console.log(input + " already exist");
    } else {
      fs.mkdirSync(input);
      console.log(input + " is made");
    }
  };
  
  