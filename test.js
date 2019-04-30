import test from 'ava';
import protocolify from '.';

test('main', t => {
	t.is(protocolify('todomvc.com'), 'http://todomvc.com');
	t.is(protocolify('todomvc.com', {https: true}), 'https://todomvc.com');
	t.true(/file:\/\/.*index\.js/.test(protocolify('index.js')));

	const dataURL = 'data:image/png;base64,iVBORw0KGgo=';
	t.is(protocolify(dataURL), dataURL);
});
