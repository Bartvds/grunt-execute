/*
 * grunt-execute
 * https://github.com/Bartvds/grunt-execute
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	var path = require('path');

	grunt.registerMultiTask('execute', 'execute code in node', function () {

		grunt.log.writeln('start'.white);
		var self = this;
		var done = this.async();

		if (this.filesSrc.length === 0) {
			grunt.log.writeln('zero files selected');
		}

		grunt.util.async.forEachSeries(this.filesSrc, function(src, callback) {

			src = path.resolve(src);
			if (!src) {
				grunt.fail.warn('undefined src parameter');
				return false;
			}
			if (!grunt.file.exists(src)) {
				grunt.fail.warn(' file does not exist ' + src);
				return false;
			}
			grunt.log.writeln('run ' + '--> '.white + src.cyan);

			grunt.util.spawn({
				cmd: 'node',
				args: [src],
				opts: {
					stdio: 'inherit'
				}
			},
			function (error, result, code) {
				if (error) {
					grunt.fail.warn('end ' + '--> '.red + src.cyan + (' '+ code).red + '\n');
				} else {
					grunt.log.writeln('end ' + '--> '.white + src.cyan + (' '+ code).green + '\n');
				}
				callback(error);
			});

			callback(null);
		},
		function (err) {
			if (err) {
				grunt.fail.warn('error '.red + err + '\n');
			}
			else {
				grunt.log.warn('complete'.white + '\n');
			}
			done();
		}, this);
	});
};