module.exports = function (grunt) {

	var help = require('../helper.js');
	var ctx = help.getContext(__filename);

	grunt.file.write(ctx.dest, ctx.data);

};