#!/usr/bin/env node
module.exports =function(){
var os = require("os");
console.log(os.networkInterfaces()["en0"][0]["address"]);
var IPv6Address = os.networkInterfaces()["en0"][0]["address"]
var IPv4Address = os.networkInterfaces()["en0"][1]["address"]
var  Netmask = os.networkInterfaces()["en0"][1]["netmask"]

console.log(`IPv6Address: ${IPv6Address}
IPv4Address: ${IPv4Address}
Netmask:  ${Netmask}`)
}