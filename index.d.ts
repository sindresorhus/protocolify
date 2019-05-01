declare namespace protocolify {
	interface Options {
		/**
		 * Prepend `https://` instead of `http://` to URLs.
		 *
		 * @default false
		 */
		readonly https?: boolean;
	}
}

/**
Prepend `http://` to humanized URLs like `todomvc.com` and `file://` to file paths.

@param urlOrFilePath - URL to prepend `http://` or file path to prepend `file://`.

@example
```
import protocolify = require('protocolify');

protocolify('todomvc.com');
//=> 'http://todomvc.com'

protocolify('todomvc.com', {https: true});
//=> 'https://todomvc.com'

protocolify('localhost');
//=> 'http://localhost'

protocolify('http://todomvc.com');
//=> 'http://todomvc.com'

// If it exists on disk, it will be interpreted as a file and not a URL
protocolify('index.js');
//=> 'file:///Users/sindresorhus/dev/protocolify/index.js'
```
*/
declare function protocolify(url: string, options?: protocolify.Options): string;

export = protocolify;
