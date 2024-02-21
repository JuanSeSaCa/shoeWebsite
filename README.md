# Video de referencia

<iframe width="560" height="315" src="https://www.youtube.com/embed/oWmOqxIanjk?si=5-d7lzG1Y7dDdOUq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


para Html


1. **<html lang="sp">**: Define el inicio del documento HTML, especificando el idioma de la página como español ("sp").

2. **<head>**: Contiene metaetiquetas y enlaces a recursos externos que proporcionan información sobre el documento HTML.

   - **<meta charset="UTF-8">**: Define la codificación de caracteres como UTF-8.
   - **<meta name="viewport" content="width=device-width, initial-scale=1.0">**: Configura la visualización inicial y escala para dispositivos móviles.
   - **<title>**: Define el título de la página que se mostrará en la pestaña del navegador.
   - **<link rel="stylesheet" href="css/style.css">**: Enlaza la hoja de estilo externa "style.css".
   - **<script src="js/main.js" type="module" defer></script>**: Enlaza el archivo de script JavaScript "main.js" como módulo y lo carga de manera diferida (defer).
   - **<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">**: Enlaza la hoja de estilos de Font Awesome para obtener iconos.
   
3. **<body>**: Contiene el contenido principal del documento HTML.

4. **<header>**: Contiene la sección de encabezado de la página, que incluye la barra de navegación y la sección del cuerpo.

5. **<nav>**: Define la barra de navegación.

   - **<div class="container">**: Contenedor principal de la barra de navegación.
   
     - **<div>**: Contenedor para el logo, menú y formulario de búsqueda.
       - **<img src="storage/img/logo.png" alt="Logo" class="logo" />**: Muestra el logo de la página.
       - **<div class="menu">**: Contenedor para el menú de navegación y formulario de búsqueda.
         - **<ul>**: Lista de elementos de menú.
           - **<li>**: Elemento de la lista de menú.
             - **<a href="#">New Releases</a>**: Enlace dentro del elemento de menú.
         - **<form>**: Formulario de búsqueda.
           - **<div class="search-icon">**: Icono de búsqueda.
             - **<i class="fas fas fa-search"></i>**: Icono de búsqueda de Font Awesome.
           - **<input type="text" class="search" placeholder="search..." />**: Campo de entrada para la búsqueda.
           - **<button class="nav-btn">**: Botón de navegación.
             - **<i class="fas fa-car-plus"></i>**: Icono de carrito de Font Awesome.
       - **<div class="menu-btn">**: Botón del menú.
         - **<i class="fas-bars"></i>**: Icono de barras de Font Awesome.
   
   - **<div class="body">**: Contiene la sección del cuerpo de la página.
     - **<div>**: División para la información del producto.
       - **<h4>$47.97</h4>**: Encabezado de nivel 4 para mostrar el precio.
       - **<h1>Nike SuperRep Go</h1>**: Encabezado de nivel 1 para mostrar el nombre del producto.
       - **<div class="rating">**: Contenedor para la clasificación del producto.
         - **<i class="fas fa-star"></i>**: Icono de estrella de Font Awesome.
       - **<p>...</p>**: Párrafo que describe el producto.
       - **<a href="#" class="btn">Add to cart</a>**: Enlace de botón para agregar al carrito.

     - **<div>**: División para la imagen del producto.
       - **<img src="storage/img/shoe.png" alt="Nike SuperRep Go" />**: Imagen del producto.

   - **<div class="footer">**: Contiene la sección del pie de página.
     - **<div class="social">**: Contenedor para los enlaces a redes sociales.
       - **<a href="#"><i class="fab fa-facebook"></i></a>**: Enlace a Facebook con el icono de Font Awesome.
       - **<a href="#"><i class="fab fa-instagram"></i></a>**: Enlace a Instagram con el icono de Font Awesome.
       - **<a href="#"><i class="fab fa-twitter"></i></a>**: Enlace a Twitter con el icono de Font Awesome.
     - **<div class="watch">**: Contenedor para el ícono de reproducción y la leyenda "Preview".
       - **<div class="play-icon">**: Icono de reproducción con el icono de Font Awesome.
         - **<i class=" fas fas fa-play"></i>**: Icono de reproducción.
       - **<h3>Preview</h3>**: Encabezado de nivel 3 para mostrar "Preview".


para css

1. **body**: Establece estilos predeterminados para todo el cuerpo del documento HTML, incluyendo márgenes, rellenos, tipo de letra y color de fondo.

2. **nav**: Estilos para elementos de navegación, incluyendo color, posición y z-index.

3. **nav a, header a**: Estilo para elementos de anclaje (enlaces) dentro de las secciones de navegación y encabezado, estableciendo color y eliminando la decoración de texto.

4. **nav .container**: Estilos para el contenedor dentro de la sección de navegación, estableciendo máxima anchura, relleno y margen.

5. **nav .container > div**: Estilos para el div secundario dentro del contenedor de navegación, utilizando diseño de cuadrícula para columnas y alineando elementos en el centro.

6. **nav .menu, nav form, .footer, .footer .watch**: Estilos para varias secciones (menú, formulario, pie de página y reloj), estableciendo propiedades de visualización, justificación y alineación.

7. **nav ul**: Estilos para la lista no ordenada dentro de la navegación, estableciendo tipo de lista, relleno y propiedad de visualización.

8. **nav ul li**: Estilos para elementos de lista dentro de la lista de navegación, estableciendo propiedades de visualización y margen.

9. **nav ul a**: Estilos para elementos de anclaje dentro de la lista de navegación, estableciendo tamaño de fuente y transformación de texto.

10. **nav form**: Estilos para el formulario dentro de la navegación, estableciendo margen derecho y estilos para el elemento de entrada dentro del formulario.

11. **nav form input**: Estilos para los elementos de entrada dentro del formulario de navegación, estableciendo fondo, color, ancho, relleno, borde y sin contorno.

12. **nav form input::placeholder**: Estilos para el texto de marcador de posición dentro del formulario de navegación, estableciendo color.

13. **.logo**: Estilos para una clase llamada "logo", estableciendo ancho y propiedad de visualización.

14. **.nav-btn**: Estilos para una clase llamada "nav-btn", estableciendo fondo, color, ancho, alto, borde redondeado, y propiedades de transición. También se define el estado de hover.

15. **nav .container .menu-btn**: Estilos para una clase específica dentro del contenedor de navegación, estableciendo la visualización como "none".

16. **header**: Estilos para la sección de encabezado, estableciendo altura, color de fondo, posición, desbordamiento y color de texto.

17. **header::before**: Estilos para un pseudo-elemento antes del encabezado, creando un fondo de degradado lineal y un efecto de rotación.

18. **header::after**: Estilos para un pseudo-elemento después del encabezado, estableciendo contenido, posición, transformación, color, tamaño de fuente y z-index.

19. **.body**: Estilos para una clase llamada "body", estableciendo visualización, justificación de contenido, alineación de contenido, columnas de cuadrícula, brecha de cuadrícula, altura, posición, z-index, máxima anchura, margen y relleno.

20. **.body h1, .body h4, .body p**: Estilos para varios elementos de encabezado y párrafo dentro de la sección del cuerpo, estableciendo tamaño de fuente, margen, espaciado de letras, altura de línea y máxima anchura.

21. **.btn**: Estilos para una clase llamada "btn", estableciendo relleno, fondo, borde redondeado, espaciado de letras, tamaño de fuente y propiedades de transición. También se define el estado de hover.

22. **.body > div:nth-child(2)**: Estilos para el segundo div secundario dentro del cuerpo, estableciendo visualización, justificación de contenido y alineación de elementos.

23. **.body .fas**: Estilos para una clase específica dentro del cuerpo, estableciendo color.

24. **.body img**: Estilos para imágenes dentro del cuerpo, estableciendo ancho, rotación y sombra utilizando el filtro CSS.

25. **.footer**: Estilos para la sección de pie de página, estableciendo máxima anchura, margen, relleno y posición relativa.

26. **.footer a**: Estilos para elementos de anclaje dentro del pie de página, estableciendo margen y tamaño de fuente.

27. **.footer .play-icon**: Estilos para una clase específica dentro del pie de página, estableciendo borde, borde redondeado, ancho, altura, alineación de texto, altura de línea, tamaño de fuente, sombra y propiedades de transición. También se define el estado de hover.

28. **@media screen and (max-width: 1000px)**: Consulta de medios para pantallas con un ancho máximo de 1000px, ajustando estilos para la navegación y elementos relacionados.

29. **@media screen and (max-width: 1210px)**: Consulta de medios para pantallas con un ancho máximo de 1210px, ajustando estilos para la navegación, cuerpo, encabezado y elementos relacionados.

30. **@media screen and (max-width: 800px)**: Consulta de medios para pantallas con un ancho máximo de 800px, ajustando estilos para el tamaño de fuente HTML, imágenes del cuerpo y elementos del pie de página.

31. **@media screen and (max-height: 650px)**: Consulta de medios para pantallas con una altura máxima de 650px, ajustando estilos para el encabezado y elementos del pie de página.

