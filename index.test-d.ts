import {expectType} from 'tsd';
import protocolify = require('.');

const options: protocolify.Options = {};

expectType<string>(protocolify('todomvc.com'));
expectType<string>(protocolify('todomvc.com', {https: true}));
