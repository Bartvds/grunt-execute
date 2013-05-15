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

exports.execute = {
	setUp: function (done) {
		done();
	},
	sync: function (test) {
		test.expect(2);

		var actual, expected;

		actual = grunt.file.read('test/tmp/alpha.txt');
		expected = grunt.file.read('test/expected/alpha.txt');
		test.equal(actual, expected, 'alpha should run and output alpha.txt.');

		actual = grunt.file.read('test/tmp/bravo.txt');
		expected = grunt.file.read('test/expected/bravo.txt');
		test.equal(actual, expected, 'bravo should run and output bravo.txt.');

		test.done();
	},
	async: function (test) {
		test.expect(1);

		var actual, expected;

		actual = grunt.file.read('test/tmp/charlie.txt');
		expected = grunt.file.read('test/expected/charlie.txt');
		test.equal(actual, expected, 'charlie should run and output charlie.txt.');

		test.done();

	}
};
