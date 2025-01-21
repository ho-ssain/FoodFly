'use strict';

const authService = require('..');
const assert = require('assert').strict;

assert.strictEqual(authService(), 'Hello from authService');
console.info('authService tests passed');
