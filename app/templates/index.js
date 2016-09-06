'use strict';

const config  = require('config');
const app     = require('koa')();
const send    = require('koa-send');
const serve   = require('koa-static');
const favicon = require('koa-favicon');

app.use(serve('dist'));
app.use(favicon(`${__dirname}/favicon.png`));

app.use(function* () {
    // if we make it this far with /api... it's a 404
    if (this.request.url.indexOf('/api') === 0) {
        this.throw(404);
    }

    if (process.env.NODE_ENV) {
        yield send(this, '/dist/index.html');
    }
});

app.listen(config.port, () =>
    console.log(`<%=appname%> running on '${process.env.NODE_ENV || 'local'}' at port ${config.port}`)
);
