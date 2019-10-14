#!/usr/bin/env node
module.exports=function(){
    var fs = require("fs");
    
    // js code 
    console.log(__dirname);
    // code => is called
    console.log(process.cwd());
    var listing = fs.readdirSync(process.cwd());
    // console.log(listing);
    for (var i = 0; i < listing.length; i++) {
      console.log("\n =>" + listing[i]);
    }
    }
    