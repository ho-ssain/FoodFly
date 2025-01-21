'use strict';

const gatewayService = require('..');
const assert = require('assert').strict;

assert.strictEqual(gatewayService(), 'Hello from gatewayService');
console.info('gatewayService tests passed');
