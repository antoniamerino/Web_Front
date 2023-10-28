import Router from "koa-router";

const router = new Router();

const publicaciones = [
    {"id_post": 1, 
    "id_user": 1,
    "nombre": "Cazatalentos",
    "descripcion": "Hola",
    "categoria": "Hola",
    "precio": "Hola",
    "fecha": "Hola"},
    
    {"id_post": 2,
    "id_user": 2,
    "nombre": "Necesito un programador",
    "descripcion": "Hola",
    "categoria": "Hola",
    "precio": "Hola",
    "fecha": "Hola"}

]

router.get("publicaciones.show", "/show", async (ctx) => {
    ctx.body = publicaciones;
})

export default router;