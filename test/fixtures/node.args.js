var help = require('../helper.js');
var ctx = help.getContext(__filename);

var fs = require('fs');

setTimeout(function () {
	fs.writeFile(ctx.dest, ctx.data + ' ' + process.argv[2] + ' ' + process.argv[3], function (err) {
		if(err) throw err;
	});
}, 100);
