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

		grunt.util.async.forEachSeries(this.filesSrc, function (src, callback) {

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
			grunt.log.writeln('-> '.cyan + 'executing ' + src.cyan);

			//use spawn so we don't have to depend on process.exit();
			var child = grunt.util.spawn({
				cmd: 'node',
				args: [src],
				opts: {
					cwd: (options.cwd !== null) ? options.cwd : path.dirname(src)
				}
			},
			function (error, result, code) {
				if (error) {
					grunt.fail.warn('-> '.cyan + 'error '.red + ('' + code).red + ' ' + src.cyan + ' (' + (Date.now() - loop) + 'ms)');
				} else {
					counter += 1;
					grunt.log.writeln('-> '.cyan + 'completed ' + src.cyan + ' (' + (Date.now() - loop) + 'ms)');
				}
				callback(error);
			});
			child.stdout.on('data', function (data) {
				grunt.log.write(data);
			});
			child.stderr.on('data', function (data) {
				grunt.log.write(('' + data).red);
			});
		},
		function (err) {
			grunt.log.writeln('');
			if (err) {
				grunt.fail.warn((' ' + err).red);
			}
			else {
				grunt.log.ok('' + counter + ' file' + (counter === 1 ? '' : 's') + ' executed (' + (Date.now() - timer) + 'ms)\n');
			}
			done();
		}, this);
	});
};