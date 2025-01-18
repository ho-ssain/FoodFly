'use strict';

const drivers = require('..');
const assert = require('assert').strict;

assert.strictEqual(drivers(), 'Hello from drivers');
console.info('drivers tests passed');
