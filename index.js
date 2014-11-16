'use strict';
var fs = require('fs');
var fileUrl = require('file-url');
var prependHttp = require('prepend-http');

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string');
	}

	return fs.existsSync(url) ? fileUrl(url) : prependHttp(url);
};
