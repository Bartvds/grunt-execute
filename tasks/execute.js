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

		var options = this.options({
			stdio: 'inherit',
			cwd: '.'
		});

		if (this.filesSrc.length === 0) {
			grunt.log.ok('zero files executed');
			return;
		}
		//var self = this;
		var done = this.async();
		var counter = 0;
		var timer = Date.now();

		grunt.util.async.forEachSeries(this.filesSrc, function(src, callback) {

			var loop = Date.now();

			src = path.resolve(src);
			if (!src) {
				grunt.fail.warn('undefined src parameter');
				return false;
			}
			if (!grunt.file.exists(src)) {
				grunt.fail.warn('file does not exist ' + src);
				return false;
			}
			grunt.log.writeln ('run '.white + src.cyan);

			grunt.util.spawn({
				cmd: 'node',
				args: [src],
				opts: {
					cwd: (options.cwd !== null) ? options.cwd : path.dirname(src),
					stdio: options.stdio
				}
			},
			function (error, result, code) {
				grunt.log.write(result);
				if (error) {
					grunt.fail.warn('error'.red + ' ' + (''+code).red);
				} else {
					counter += 1;
					grunt.log.writeln('ok '.white + (code !== 0 ? (''+code).cyan : '') + '(' +(Date.now() - loop)+ 'ms)');
				}
				callback(error);
			});
		},
		function (err) {
			if (err) {
				grunt.fail.warn((' ' + err).red);
			}
			else {
				grunt.log.ok('' + counter + ' file' + (counter > 1 ? 's' : '') + ' executed (' +(Date.now() - timer)+ 'ms)\n');
			}
			done();
		}, this);
	});
};