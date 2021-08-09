export interface Options {
	/**
	Prepend `https://` instead of `http://` to URLs.

	@default true
	*/
	readonly https?: boolean;
}

/**
Prepend `https://` to humanized URLs like `sindresorhus.com` and `file://` to file paths.

@param urlOrFilePath - The URL to prepend `https://` or file path to prepend `file://`.

@example
```
import protocolify from 'protocolify';

protocolify('sindresorhus.com');
//=> 'https://sindresorhus.com'

protocolify('localhost', {https: false});
//=> 'http://localhost'

protocolify('https://sindresorhus.com');
//=> 'https://sindresorhus.com'

// If it exists on disk, it will be interpreted as a file and not a URL
protocolify('index.js');
//=> 'file:///Users/sindresorhus/dev/protocolify/index.js'
```
*/
export default function protocolify(urlOrFilePath: string, options?: Options): string;
