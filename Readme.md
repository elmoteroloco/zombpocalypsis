# Trabajo Práctico Final: Zombpocalypsis API

Este es el Back End del proyecto Full Stack Node.js realizado para el trabajo Práctico Final de la cursada de la Comisión 25256 Back End Node.js de [Talento Tech](https://talentotech.bue.edu.ar/#).

**Importante:** Este proyecto tiene una finalidad puramente académica y de demostración.

## Sobre el Proyecto

Esta API REST es el **cerebro** detrás del universo `zombpocalypsis`. No se trata de un simple gestor de productos, sino del motor que impulsa la lógica de negocio, la persistencia de datos y la seguridad para una experiencia de juego de supervivencia.

Construida con Node.js, Express y Firestore, esta API fue diseñada para ser consumida por su proyecto hermano, el **zombpocalypsis-terminal**, una interfaz de terminal retro que funciona como el centro de comando del jugador.

Juntos, ambos proyectos conforman la prueba de concepto de un sistema de juego RPG, donde los jugadores gestionan inventarios, comercian y sobreviven en un mundo post-apocalíptico.

## Hoja de Ruta del Proyecto

El desarrollo del ecosistema Zombpocalypsis se planifica en fases, comenzando con un Producto Mínimo Viable (MVP) y expandiéndose hacia una experiencia más rica.

### Fase 1: Fundación (MVP)
*El objetivo es construir el núcleo jugable y desplegar una versión funcional.*

-   [ ] **Sistema de Contenedores (Backend):** Implementar una colección `inventarios` en Firestore que funcione como base para cualquier tipo de contenedor de ítems (mochilas, almacenes, etc.).
-   [ ] **API de Mochila Personal (Backend):** Crear los endpoints (`/api/mochila`) que permitan a un usuario gestionar su propio inventario.
-   [ ] **Comandos de Jugador (Frontend):** Desarrollar los comandos `mochila`, `comprar` y `vender` para interactuar con la API.
-   [ ] **Despliegue Inicial:** Publicar la API en Vercel y la terminal en GitHub Pages para tener una versión funcional y accesible.

### Fase 2: Expansión del Mundo
*El objetivo es dar vida al entorno, poblándolo con más interacciones.*

-   [ ] **NPCs y Comerciantes:** Utilizar el sistema de contenedores para crear inventarios para Vendedores NPC.
-   [ ] **Saqueo y Descubrimiento:** Implementar el comando `saquear` para permitir a los jugadores obtener ítems de contenedores estáticos en el mundo (almacenes abandonados, vehículos, etc.).
-   [ ] **Economía Persistente:** Mover el manejo de los créditos/dinero del jugador al backend para que sea persistente entre sesiones.

### Fase 3: El Mundo Viviente
*El objetivo es profundizar en las mecánicas de RPG y la narrativa.*

-   [ ] **Sistema de Misiones:** Crear la lógica y los comandos (`misiones`, `aceptar`) para un diario de misiones.
-   [ ] **Progresión del Personaje:** Implementar comandos como `stats` y `perks` para mostrar la evolución del jugador.
-   [ ] **Comunicaciones:** Desarrollar un sistema de `radio` o `chat` para recibir mensajes de NPCs o interactuar con otros jugadores.

---

## Autenticación
La API reclama autenticación para todas las rutas, exceptuando la necesaria para el LogIn. Primero se debe obtener un "Bearer Token" utilizando las credenciales correctas.

**1. Iniciar Sesión (POST)**

`POST /auth/login`

**Body (JSON):**

```json
{
    "email": "sobreviviente@zombpocalypsis.com",
    "password": "alguna-contraseña-segura"
}


(Los datos de email y contraseña son solo un ejemplo)

## Endpoints
**Productos (Inventario)**
*Todas las rutas de productos requieren un Bearer Token válido en la cabecera `Authorization`.*


**1. Obtener todo el inventario (GET)** Trae la lista completa de suministros.

`GET /api/products`


**2. Obtener un suministro por su ID (GET)** Muestra los detalles de un único ítem del inventario.

`GET /api/products/:id`


**3. Registrar un nuevo suministro (POST)** Agrega un nuevo producto al inventario.

`POST /api/products/create`

**Body (JSON):**

`{
    "name": "Agua Potable (1L)",
    "price": 15,
    "stock": 50,
    "category": "Bebidas"
}`


**4. Actualizar un suministro (PUT / PATCH)** Modifica la información de un producto existente, identificado por su ID. Para cumplir con los requisitos, el endpoint responde a `PUT`. Adicionalmente, también acepta `PATCH`, que es el método ideal para actualizaciones parciales.

En ambos casos, solo es necesario enviar los campos que se desean modificar.

`PUT /api/products/edit/:id`

`PATCH /api/products/edit/:id`

**Body (JSON - ejemplos de actualización parcial):**

`{
    "price": 20
}`

ó

`{
    "stock": 100,
    "category": "Provisiones"
}`


**5. Eliminar un suministro (DELETE)** Elimina un producto del inventario usando su ID.

`DELETE /api/products/:id`


## Arquitectura

El proyecto sigue una arquitectura por capas para separar responsabilidades:

**Rutas (routes):** Definen los endpoints de la API.
**Controladores (controllers):** Manejan la lógica de las peticiones HTTP.
**Servicios (services):** Coordinan la lógica de negocio.
**Modelos (models):** Interactúan directamente con la base de datos (Firestore).

### Tecnologías Utilizadas
*Node.js y Express:* Para la creación del servidor.
*Firebase (Firestore):* Como base de datos NoSQL en la nube.
*Cloudinary:* Para el alojamiento y gestión de las imágenes de los productos.
*JSON Web Tokens (JWT):* Para la autenticación y protección de rutas.
*dotenv:* Para el manejo de variables de entorno.
*cors y express.json():* Middlewares esenciales para la comunicación y el parseo de peticiones.
