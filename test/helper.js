var fs = require('fs');
var path = require('path');

var tmp = path.resolve(__dirname + '/tmp');
if (!fs.existsSync(tmp)) {
	fs.mkdirSync(tmp);
}

function testFile(name) {
	return path.join(help.tmp, path.basename(name, path.extname(name)) + '.txt');
}
function testData(name) {
	return 'test 3 2 1 ' + path.basename(name, path.extname(name));
}

var help = {
	tmp: tmp,
	getContext: function (file, silent) {
		var name = path.basename(file);
		var ctx = {
			file: file,
			name: name,
			dest: testFile(name),
			data: testData(name)
		};
		if (!silent) {
			console.log('Greetings from ' + name + '!');
		}
		return ctx;
	}
};
module.exports = help;