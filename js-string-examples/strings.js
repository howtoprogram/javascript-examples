var _ = require('lodash');
var s = require("underscore.string");

var strings = {};

strings.contain = function(string, substring) {
    return string.indexOf(substring) != -1;
};

strings.containByIncludes = function(string, substring) {
    return string.includes(substring);
};

strings.containBySearch = function(string, substring) {
    return string.search(substring) != -1;
};
strings.containByRegexTest = function(string, substring) {
    var patt = new RegExp(substring);
    return patt.test(string);
};
strings.containByMatch = function(string, substring) {
    var patt = new RegExp(substring);
    return string.match(patt);
};
strings.containByLodash = function(string, substring) {
    return _.includes(string, substring);
};
strings.containByUnderscore = function(string, substring) {
    return s.include(string, substring);
};
module.exports = strings;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
//https://www.w3schools.com/jsref/jsref_search.asp