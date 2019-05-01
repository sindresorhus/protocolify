import {expectType} from 'tsd';
import protocolify = require('.');

const options: protocolify.Options = {};

expectType<string>(protocolify('sindresorhus.com'));
expectType<string>(protocolify('sindresorhus.com', {https: false}));
