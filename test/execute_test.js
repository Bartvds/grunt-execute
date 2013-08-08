'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
var path = require('path');
var helper = require('./helper');

var easyTestOutput = function (test, name) {
	var ctx = helper.getContext(name, true);
	var actual = grunt.file.read(ctx.dest);
	var expected = ctx.data;

	test.strictEqual(actual, expected, path.basename(name));
};

exports.execute = {
	setUp: function (done) {
		done();
	},
	sync: function (test) {
		test.expect(2);
		easyTestOutput(test, 'node.sync.alpha.js');
		easyTestOutput(test, 'node.sync.bravo.js');
		test.done();
	},
	async: function (test) {
		test.expect(1);
		easyTestOutput(test, 'node.async.js');
		test.done();
	},
	module_sync: function (test) {
		test.expect(1);
		easyTestOutput(test, 'module.sync.js');
		test.done();
	},
	module_async: function (test) {
		test.expect(1);
		easyTestOutput(test, 'module.async.js');
		test.done();
	},
	call_sync: function (test) {
		test.expect(1);
		easyTestOutput(test, 'call.sync.gruntfile.js');
		test.done();
	},
	call_async: function (test) {
		test.expect(1);
		easyTestOutput(test, 'call.async.gruntfile.js');
		test.done();
	},
	beforeAfter_sync: function (test) {
		test.expect(4);
		easyTestOutput(test, 'before.sync.gruntfile.js');
		easyTestOutput(test, 'before.options.sync.gruntfile.js');
		easyTestOutput(test, 'after.sync.gruntfile.js');
		easyTestOutput(test, 'after.options.sync.gruntfile.js');
		test.done();
	}
};
