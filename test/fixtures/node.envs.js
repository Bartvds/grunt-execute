var util = require('util');
var help = require('../helper.js');
var ctx = help.getContext(__filename);

var fs = require('fs');

setTimeout(function () {
  console.log("ENV " + util.inspect(process.env));
  fs.writeFile(ctx.dest, Object.keys(process.env)[0] + '=' + process.env[Object.keys(process.env)[0]] + ' ' + ctx.data, function (err) {
    if(err) throw err;
  });
}, 100);
