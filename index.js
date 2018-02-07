const loader = require('sandboxed-module-loader');

loader(/\/mocha\/lib\/mocha.js$/, {
  verbose: false,
  sandboxExternal: false
});

