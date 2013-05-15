console.log(__filename);
var fs = require('fs');

setTimeout(function () {
	fs.writeFile(__dirname + '../tmp/charlie.txt', 'charlie 3 4 5', function (err) {
		if(err) throw err;
	});
}, 500);