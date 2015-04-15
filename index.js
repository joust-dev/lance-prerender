#!/usr/bin/env node

var child_process = require('child_process');

var server = child_process.spawn('./node_modules/.bin/prerender', {stdio: 'inherit'});
