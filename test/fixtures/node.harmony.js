var help = require('../helper.js');
var ctx = help.getContext(__filename);

var fs = require('fs');

setTimeout(function () {
    fs.writeFile(ctx.dest, ctx.data + ' ' + ('function' === typeof Map), function (err) {
        if(err) throw err;
    });
}, 100);
