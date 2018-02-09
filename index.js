const loader = require('sandboxed-module-loader');

loader(/\/mocha\/lib\/mocha.js$/, {
  verbose: 0,
  sandboxExternal: true
});

