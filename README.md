# Entrega 4 :construction:

* :pencil2: **Grupo:** grupo_Chatgepeteros_frontend

### :scroll: Archivos

* Descripción Proyecto: descripción sencilla de nuestro proyecto
* Historias de Usuarios: relatos de usuarios para construir nuestra app
* ER_Web.drawio.pdf: diagrama de entidad- relación para comprender un poco cómo pensamos armar este proyecto

## Código :symbols:

Ojo: se debe hacer yarn y luego yarn dev dentro de la carpeta webReact.<br>
Es necesario también instalar la librería de axios con: yarn add axios antes de comenzar con el uso del frontend, esta librería nos permite hacer uso de las requests de HTTP y entablar enlace con el backend y la BDD.

En este codigo se crea la estructura principal básica de nuestra pagina web.
Para esto se usaron varios componentes como: Landing, Instructions, Feed, Post, User, etc. Para mostrar la navegacion entre las vistas principales mediante una navbar.
Las paginas principales son:

1. Landing page: Aqui se encuentra el logo y una frase representativa de la red social. Con esto se busca transmitir que dentro de la apliacción se pueden ofrecer o solicitar servicios a cambio de dinero de forma fácil y rápida. 
Ademas se incluyen elementos como iniciar sesion y el registro.

2. Pagina principal: En la pagina principal hay un box para crear posts y el feed con los posts que han subido los usuarios. En estos posts es posible ver una imagen, titulo y dar likes. Ademas hay un boton que luego dirigira a otra vista con el detalle de esa publicacion para poder ofrecer o solicitar ese servicio. 

3. Pagina de instrucciones: Aqui hay una guía detallada de la aplicación.

4. Perfil del usuario: Este es el perfil del usuario donde habrán datos personales, publicaciones, seguidores, reseñas, etc.

### Explicación de que endpoints están conectados de front a back

Los endpoints conectados son todos los esenciales para poder utilizar la app.

Por categoría tenemos los siguientes endpoints con las siguientes funciones asociadas:

/posts: get, post
posts/${inputId}: get, delete

/users/email/${email}: get
/users: get
/users/${userId}: delete

/login: post

/signup: post

/followers: post
/followers/user/${userId}/follower/${followerUserId}: get
/followers/${response.data[0].id}: delete

/chats: post
/chats/user1/${myUserIdValue}/user2/${userId}: get

/mensajes: post
/mensajes/chat/${chat.id}: get

/comentarios: post
/comentarios/post/${postId}: get
/comentarios/${comentarioId}: delete

/reviews/user/${userId}: get
/reviews/${reviewId}: delete
/reviews: post


### Usuarios admin y normal

La aplicación cuenta con dos tipos de usuarios, la única diferencia entre ambos es que el admin cumple un rol de moderador, lo que le permite eliminar a otros usuarios.
Las credenciales para acceder al admin son:
email: admin@gmail.com
password: 1234
Para usar un usuario normal se puede registrar como nuevo usuario o utilizar al dummy 'Jhon Doe', las credenciales para acceder a este perfil son:
email: johndoe@gmail.com
password: 1234

### Flujos de la aplicación

La aplicación funciona con un centro en una página a la que le llamamamos "Home", desde ahí se pueden seleccionar opciones de iniciar sesión o registrarse. Toda la navegación grande funciona desde la NavBar, que permite acceder a los usuarios [User], información de la página [About], al [Home] y al [Feed] donde se ven las publicaciones. Este último está restringido para usuarios y requiere credenciales.

Luego, una vez en la página [User] se despliega una lista de usuarios, los que se pueden seguir o dejar de seguir, además de eliminarlos en caso de ser admin. Al [ver reviews] se llega a una página específica de el usuario seleccionado en la cual se puede publicar una review sobre este o leer reviews que ya tiene.

Por último en el [Feed] se ven las publicaciones, y al apretar en una los [Comentarios] se va a una página específica de comentarios que funciona de manera similar a las [Review] pero en vez de para un usuario está optimizada para un post. También existe la opción de [Contactar al oferente] lo que despliega un chat en el que se pueden intercambiar mensajes.

### :book: Referencias

Para este proyecto se utilizaron videos de youtube, codigos en internet y chatgpt para resolver dudas y aprender aspectos importantes del lenguaje y su funcionamiento. 

A continuacion estan los links de las fuentes de informacion:
1. https://www.youtube.com/watch?v=SLfhMt5OUPI se utilizo para la Navbar
2. Las capsulas del curso fueron una guia importante dentro del codigo
3. https://github.com/safak/youtube/blob/react-social-ui/src/components/post/Post.jsx codigo de una red social creada con react
4. https://github.com/machadop1407/react-website-tutorial/tree/main/src 
4. Chat GPT se uso para dudas basicas de codigo css, para orientar el diseño y tambien funcionamiento y conexion entre vistas. 
