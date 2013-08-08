module.exports = function (grunt, options, async) {

	var help = require('../helper.js');
	var ctx = help.getContext(__filename);

	// callback get, makes grunt-execute run async
	var done = async();

	var fs = require('fs');

	setTimeout(function () {
		fs.writeFile(ctx.dest, ctx.data, function (err) {

			// call callback, passing error will fail the task
			done(err);
		});
	}, 500);
};