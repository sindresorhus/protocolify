'use strict';
const fs = require('fs');
const fileUrl = require('file-url');
const prependHttp = require('prepend-http');

module.exports = (urlOrFilePath, options) => {
	if (typeof urlOrFilePath !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof urlOrFilePath}\``);
	}

	return fs.existsSync(urlOrFilePath) ? fileUrl(urlOrFilePath) : prependHttp(urlOrFilePath, options);
};
