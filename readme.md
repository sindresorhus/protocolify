# protocolify [![Build Status](https://travis-ci.org/sindresorhus/protocolify.svg?branch=master)](https://travis-ci.org/sindresorhus/protocolify)

> Prepend `https://` to humanized URLs like `sindresorhus.com` and `file://` to file paths

Useful when you want to accept either a local file or URL as argument in your CLI app.


## Install

```
$ npm install protocolify
```


## Usage

```js
const protocolify = require('protocolify');

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


## API

### protocolify(urlOrFilePath, [options])

#### urlOrFilePath

Type: `string`

URL to prepend `https://` or file path to prepend `file://`.

#### options

Type: `object`

##### https

Type: `boolean`<br>
Default: `true`

Prepend `https://` instead of `http://` to URLs.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
