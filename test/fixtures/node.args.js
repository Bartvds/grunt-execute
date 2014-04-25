var help = require('../helper.js');
var ctx = help.getContext(__filename, ' ' + process.argv[0] + ' ' + process.argv[1]);

var fs = require('fs');

setTimeout(function () {
	fs.writeFile(ctx.dest, ctx.data, function (err) {
		if(err) throw err;
	});
}, 100);
