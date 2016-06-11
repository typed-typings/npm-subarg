/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import subarg = require('subarg');
import assert = require('assert');

assert.deepEqual(subarg(['test'])._, ['test']);
