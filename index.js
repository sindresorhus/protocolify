'use strict';
var fileUrl = require('file-url');
var prependHttp = require('prepend-http');
var pathExists = require('path-exists');

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string, got ' + typeof url);
	}

	return pathExists.sync(url) ? fileUrl(url) : prependHttp(url);
};
