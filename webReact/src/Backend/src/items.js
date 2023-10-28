// const Router = require('koa-router');
import Router from "koa-router";

// Prefix all routes with: /items
const router = new Router({
	prefix: '/items'
});

let items = [
	{ id: 0, id_user: 0, iname: 'Clases Matematicas', price: 'US $150.00', descripcion: 'Soy profe hace rato', categoria: 'Ofrezco', fecha: '1-12-2023'},
	{ id: 1, id_user: 0, iname: 'Cuido ninos', price: 'US $80.00', descripcion: 'Se cambiar panales', categoria: 'Ofrezco', fecha: '1-12-2023'},
	{ id: 2, id_user: 0, iname: 'Clases de Ingles', price: 'US $100.00', descripcion: 'Soy profe hace rato', categoria: 'Necesito', fecha: '1-12-2023'},
];

// Routes

// module.exports = router;

// POST, GET
router.post('/add', (ctx) => {
	const newItem = ctx.request.body; // Obtenemos los datos del producto del cuerpo de la solicitud
  
	if (newItem) {
	  // Genera un nuevo ID (puedes usar una estrategia más robusta en un entorno de producción)
	  const newId = items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
	  newItem.id = newId;
  
	  items.push(newItem); // Agregamos el nuevo producto al array
  
	  ctx.status = 201; // Código de respuesta 201 (creado)
	  ctx.body = newItem; // Devolvemos el producto recién creado
	} else {
	  ctx.status = 400; // Código de respuesta 400 (solicitud incorrecta)
	  ctx.body = 'Status 400: Datos del producto no proporcionados o incorrectos';
	}
  });

router.get('/:id', (ctx) => {
	const itemId = parseInt(ctx.params.id);
	const item = items.find((item) => item.id === itemId);
  
	if (item) {
	  ctx.body = item;
	} else {
	  ctx.status = 404;
	  ctx.body = 'Status 404: Publicacion no encontrada';
	}
  });


  // DELETE
  router.delete('/:id', (ctx) => {
	const itemId = parseInt(ctx.params.id);
	const index = items.findIndex((item) => item.id === itemId);
  
	if (index !== -1) {
	  items.splice(index, 1);
	  ctx.status = 204;
	  ctx.body = 'Status 204: Se ha eliminado correctamente la Publicacion';
	} else {
	  ctx.status = 404;
	  ctx.body = 'Status 404: Publicacion no encontrada';
	}
  });


  // PUT
  router.put('/:id', (ctx) => {
	const itemId = parseInt(ctx.params.id);
	const index = items.findIndex((item) => item.id === itemId);
  
	if (index !== -1) {
	  // Actualiza el producto con los datos proporcionados en el cuerpo de la solicitud
	  items[index] = { ...items[index], ...ctx.request.body };
	  ctx.body = items[index]; // Devuelve el producto actualizado
	} else {
	  ctx.status = 404;
	  ctx.body = 'Status 404: Publicacion no encontrada';
	}
  });
  

router.get('/', (ctx) => {
	ctx.body = items;
});



export default router;


