import Router from "koa-router";
import publicaciones from "./routes/publicaciones.js";

const router = new Router();

//solo estamos importando esta ruta
router.use('/publicaciones', publicaciones.routes());

export default router;