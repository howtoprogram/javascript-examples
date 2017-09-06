var assert = require('assert');
var strings = require('./strings');

it('"Hello World" should contain "Hello"', function() {
    assert.equal(true, strings.containByIncludes('Hello World', 'Hello'));
});