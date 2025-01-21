'use strict';

const restuarantService = require('..');
const assert = require('assert').strict;

assert.strictEqual(restuarantService(), 'Hello from restuarantService');
console.info('restuarantService tests passed');
