import fs from 'node:fs';
import fileUrl from 'file-url';
import prependHttp from 'prepend-http';

export default function protocolify(urlOrFilePath, options) {
	if (typeof urlOrFilePath !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof urlOrFilePath}\``);
	}

	return fs.existsSync(urlOrFilePath) ? fileUrl(urlOrFilePath) : prependHttp(urlOrFilePath, options);
}
