
var fs = require('fs');
var path = require('path');

console.log('running ' +path.basename(__filename));
var help = require('../helper');

setTimeout(function () {
	fs.writeFile(help.tmp + '/charlie.txt', 'charlie 3 4 5', function (err) {
		if(err) throw err;
	});
}, 500);