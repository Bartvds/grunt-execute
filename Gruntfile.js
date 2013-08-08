/*
 * grunt-execute
 * https://github.com/Bartvds/grunt-execute
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

/*jshint -W098 */
module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp', 'test/tmp']
		},

		// Configuration to be run (and then tested).
		execute: {
			//error: {src: ['test/fixtures/error*.js']},
			node_sync: {
				src: ['test/fixtures/**/node.sync.*js']
			},
			node_async: {
				src: ['test/fixtures/node.async.js']
			},
			zero: {
				src: ['test/fixtures/nonexisting.js']
			},
			module_sync: {
				options: {
					module: true
				},
				src: ['test/fixtures/module.sync.js']
			},
			module_async: {
				options: {
					module: true
				},
				src: ['test/fixtures/module.async.js']
			},
			call_sync: {
				call: function (grunt, options, async) {
					var help = require('./test/helper.js');
					var ctx = help.getContext('call.sync.gruntfile.js');

					grunt.file.write(ctx.dest, ctx.data);
				}
			},
			call_async: {
				call: function (grunt, options, async) {
					var help = require('./test/helper.js');
					var ctx = help.getContext('call.async.gruntfile.js');

					// callback get, makes grunt-execute run async
					var done = async();

					var fs = require('fs');
					setTimeout(function () {
						fs.writeFile(ctx.dest, ctx.data, function (err) {

							// call callback, passing error will fail the task
							done(err);
						});
					}, 500);
				}
			},
			beforeAfter: {
				options: {
					before: function (grunt, options, async) {
						var help = require('./test/helper.js');
						var ctx = help.getContext('before.options.sync.gruntfile.js');

						grunt.file.write(ctx.dest, ctx.data);
					},
					after: function (grunt, options, async) {
						var help = require('./test/helper.js');
						var ctx = help.getContext('after.options.sync.gruntfile.js');

						grunt.file.write(ctx.dest, ctx.data);
					}
				},
				before: function (grunt, options, async) {
					var help = require('./test/helper.js');
					var ctx = help.getContext('before.sync.gruntfile.js');

					grunt.file.write(ctx.dest, ctx.data);
				},
				after: function (grunt, options, async) {
					var help = require('./test/helper.js');
					var ctx = help.getContext('after.sync.gruntfile.js');

					grunt.file.write(ctx.dest, ctx.data);
				},
				src: ['test/fixtures/node.async.js']
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['jshint', 'clean', 'execute', 'nodeunit']);

	grunt.registerTask('default', ['test']);
	grunt.registerTask('dev', ['jshint']);

};
