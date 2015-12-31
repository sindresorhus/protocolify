import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('todomvc.com'), 'http://todomvc.com');
	t.true(/file:\/\/.*index\.js/.test(fn('index.js')));
});
