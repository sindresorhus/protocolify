# protocolify [![Build Status](https://travis-ci.org/sindresorhus/protocolify.svg?branch=master)](https://travis-ci.org/sindresorhus/protocolify)

> Prepend `http://` to humanized URLs like `todomvc.com` and `file://` to file paths

Useful when you want to accept either a local file or URL as argument in your CLI app.


## Install

```
$ npm install protocolify
```


## Usage

```js
const protocolify = require('protocolify');

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


## API

### protocolify(urlOrFilePath, [options])

#### urlOrFilePath

Type: `string`

URL to prepend `http://` or file path to prepend `file://`.

#### options

Type: `object`

##### https

Type: `boolean`<br>
Default: `false`

Prepend `https://` instead of `http://` to URLs.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
