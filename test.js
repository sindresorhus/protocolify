import test from 'ava';
import m from './';

test(t => {
	t.is(m('todomvc.com'), 'http://todomvc.com');
	t.true(/file:\/\/.*index\.js/.test(m('index.js')));

	const dataURL = 'data:image/png;base64,iVBORw0KGgo=';
	t.is(m(dataURL), dataURL);
});
