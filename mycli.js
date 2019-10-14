
// Que Write your own cli "mycli" using readline module
// that implements two commands ipconfig, mkdir
// Input: Node mycli to start your cli
// myipconfig => Object with that your network information{ }
// mymkdir folder => create a directory named folder
// 	else should output wrong command
// ON exit should print "See you later"
var readline = require("readline");
var mk = require("./mymkdir");
var ls = require("./myls");
var rm = require("./myrmdir")
var myipconfig = require("./myipconfig")
var chalk = require("chalk");
// font
var figlet = require("figlet");
var log = console.log;
var reader = readline.createInterface({
    input: process.stdin, // input from command line
    output: process.stdout,// output to command line
    prompt: "mycli>"
});
console.clear();
log(chalk.blue(figlet.textSync("MY CLI")));
reader.prompt();
reader.on("line", function(data){
    var cmd = data.split(" ")[0];
    var folder = data.split(" ")[1];
    if(cmd == "mymkdir"){
        mk(folder);
    } else if (cmd == "myls"){
        ls();
    }else if (cmd == "myipconfig"){
        myipconfig();
    }else if(cmd == "myrmdir"){
        rm(folder);
    }else {
        log("wrong command");
    }
    reader.prompt();
});
reader.on("close",function(){
    log("Thank You for using our cli");
})