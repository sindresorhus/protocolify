import test from 'ava';
import protocolify from '.';

test('main', t => {
	t.is(protocolify('sindresorhus.com'), 'https://sindresorhus.com');
	t.is(protocolify('sindresorhus.com', {https: false}), 'http://sindresorhus.com');
	t.true(/file:\/\/.*index\.js/.test(protocolify('index.js')));

	const dataURL = 'data:image/png;base64,iVBORw0KGgo=';
	t.is(protocolify(dataURL), dataURL);
});
