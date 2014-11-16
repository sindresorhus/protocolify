'use strict';
var test = require('ava');
var protocolify = require('./');

test(function (t) {
	t.assert(protocolify('todomvc.com') === 'http://todomvc.com');
	t.assert(/file:\/\/.*index\.js/.test(protocolify('index.js')));
	t.end();
});
