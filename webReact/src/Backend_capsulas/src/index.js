import koa from "koa";
import KoaLogger from "koa-logger";
import {koaBody} from "koa-body";
//importamos nuestro archivo de ruta principal
import router from "./routes.js";

const app = new koa();

// ESTRUCTURA
// REQUEST -> logger-> body->router
//router->body->logger->response

app.use(KoaLogger());
app.use(koaBody());

//koa router
app.use(router.routes());

//middleware 
app.use((ctx, next)=> {
    ctx.body = "Hola Mundo!;"
});

app.listen(5173, () => {
    console.log("Server on port 5173")
});