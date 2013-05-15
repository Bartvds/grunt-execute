console.log(__filename);
var fs = require('fs');
var path = require('path');

setTimeout(function () {
	fs.writeFile(path.resolve(__dirname + '/../tmp/charlie.txt'), 'charlie 3 4 5', function (err) {
		if(err) throw err;
	});
}, 500);