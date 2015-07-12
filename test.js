'use strict';
var assert = require('assert');
var isOSX = require('./index');

it('should be on Mac OSX', function () {
	assert.strictEqual(isOSX(), true);
});
