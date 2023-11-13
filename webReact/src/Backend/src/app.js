// Ayuda de: https://javascript.plainenglish.io/koa-js-and-rest-api-cd0770fbe916

// app.js
import Koa from "koa";
import KoaLogger from "koa-logger";
import {koaBody} from "koa-body";
// const Koa = require('koa');
// const koaBody = require('koa-body');
import items from './items.js';

const app = new Koa();

// middleware
app.use(KoaLogger());
app.use(koaBody());

// Require the routers
// let items = require('./items.js');

// use the routes
app.use(items.routes());

app.use((ctx, next)=> {
    ctx.body = "Hola Mundo!;"
});

app.listen(3000, () => {
    console.log("Tamos en el 3000")
});