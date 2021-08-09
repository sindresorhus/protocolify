import {expectType} from 'tsd';
import protocolify from './index.js';

expectType<string>(protocolify('sindresorhus.com'));
expectType<string>(protocolify('sindresorhus.com', {https: false}));
