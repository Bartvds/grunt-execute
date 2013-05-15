/*
 * grunt-execute
 * https://github.com/Bartvds/grunt-execute
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

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
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		execute: {
			sync: {
				options: {

				},
				src: ['test/fixtures/**/*.sync.js']
			},
			async: {
				options: {

				},
				src: ['test/fixtures/**/*.async.js']
			},
			error: {
				options: {

				},
				src: ['test/fixtures/error*.js']
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

	grunt.registerTask('test', ['clean', 'execute:sync', 'nodeunit']);

	grunt.registerTask('default', ['jshint', 'test']);

};
