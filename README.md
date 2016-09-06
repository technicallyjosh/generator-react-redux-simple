# generator-react-redux-simple

This is a simple [yeoman](http://yeoman.io) generator of a single page application using React, Redux, and Koa.

## This is a work in progress. Not deployed to npm yet.

## Installation

**NodeJS 4+ required**

```bash
npm install -g yo
npm install -g generator-react-redux-simple
```

## Build It

```bash
mkdir my-application
cd my-application
yo react-redux-simple
```

## Run It

### Step 1
The following command will run webpack-dev-server on port 8080 with a proxy to port 8000.
```bash
npm start
```

### Step 2

Navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## Compiling

When you are ready to compile and run directly off the server without webpack-dev-server, just do the following.

### Step 1
```bash
npm run build
node index.js
```

### Step 2

Navigate to [http://localhost:8000](http://localhost:8000) in your browser.

## License

MIT © [Josh Newman]()


[npm-image]: https://badge.fury.io/js/generator-react-test.svg
[npm-url]: https://npmjs.org/package/generator-react-test
[travis-image]: https://travis-ci.org/technicallyjosh/generator-react-test.svg?branch=master
[travis-url]: https://travis-ci.org/technicallyjosh/generator-react-test
[daviddm-image]: https://david-dm.org/technicallyjosh/generator-react-test.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/technicallyjosh/generator-react-test
