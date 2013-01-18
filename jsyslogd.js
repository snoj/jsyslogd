var dgram = require('dgram')
    ,util = require('util')
    ,fs = require('fs')
    ,conf = require('./config.json');

String.prototype.padLeft = function(length, char) {
  var t = this;
  while(t.length < length) {
    t = char + t;
  }
  return t;
}

var server = dgram.createSocket('udp4');
function genLog() {
  var d = new Date();
  return util.format(conf.logpath + "/log-%s-%s-%s-%s-%s.txt"
    ,d.getFullYear()
    ,d.getMonth().toString().padLeft(2,'0')
    ,d.getDate().toString().padLeft(2,'0')
    ,d.getHours().toString().padLeft(2,'0')
    ,(d.getMinutes()+1 - ((d.getMinutes()+1)%5)).toString().padLeft(2,'0')
  );
}

server.on("message", function (msg, rinfo) {
  fs.appendFile(genLog(),msg.toString('utf8')+"\r\n");
  if(conf.consolelog == "true" || conf.consolelog == "1") console.log(msg.toString('ascii'));
});

server.bind(514);