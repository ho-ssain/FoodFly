'use strict';

const foodfly = require('..');
const assert = require('assert').strict;

assert.strictEqual(foodfly(), 'Hello from foodfly');
console.info('foodfly tests passed');
