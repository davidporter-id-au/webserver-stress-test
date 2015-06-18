'use strict';
const compress = require('koa-compress');
const logger = require('koa-logger');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const app = module.exports = koa();
const request = require('koa-request');

// Logger
app.use(logger());

app.use(route.get('/', function * (){   
    const res = yield request.get('http://localhost:4000');
    console.log(res.body);
    this.body = res;
}));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
