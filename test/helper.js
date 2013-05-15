
var fs = require('fs');
var path = require('path');

var tmp = path.resolve(__dirname + '/tmp');
if (!fs.existsSync(tmp)) {
	fs.mkdirSync(tmp);
}

module.exports = {tmp:tmp};