# mocha-sandboxed-module-loader
Sandbox loading of modules for each test file.

Each test file will have it's own instance of all dependencies. This helps in avoiding state to leak between tests.

## Install

```
$ npm install --save-dev mocha-sandboxed-module-loader
```


## Usage

```
mocha --require=mocha-sandboxed-module-loader test/test.js
```

## License

MIT © [Johan Blumenberg](http://github.com/johanblumenberg)
