# Trabajo Práctico Final: Zombpocalypsis API

Este es el Back End del proyecto Full Stack Node.js realizado para el trabajo Práctico Final de la cursada de la Comisión 25256 Back End Node.js de [Talento Tech](https://talentotech.bue.edu.ar/#).

**Importante:** Este proyecto tiene una finalidad puramente académica y de demostración.

En este archivo se explica la arquitectura de la API, sus endpoints, las tecnologías utilizadas y cómo ponerla en funcionamiento.

Se trata de una API REST para la gestión de un "inventario/almacén de suministros" en un videojuego de post-apocalipsis zombie. Construida con Node.js (en ESModules con script `npm start`) y Express, conecta a una base de datos en Firestore. Cuenta con un Front End complementario desarrollado en HTML, CSS y JavaScript.

## Endpoints

La API reclama autenticación para la mayoría de las rutas. Primero se debe obtener un "Bearer Token" utilizando las credenciales correctas.

### Autenticación

**1. Iniciar Sesión (POST)**
`POST /auth/login`

**Body (JSON):**
```json
{
    "email": "sobreviviente@zombpocalypsis.com",
    "password": "alguna-contraseña-segura"
}

(Los datos de email y contraseña son solo un ejemplo)

Productos (Inventario)
Todas las rutas de productos requieren un Bearer Token válido en la cabecera Authorization.

1. Obtener todo el inventario (GET) Trae la lista completa de suministros. GET /api/products

2. Obtener un suministro por su ID (GET) Muestra los detalles de un único ítem del inventario. GET /api/products/:id

3. Registrar un nuevo suministro (POST) Agrega un nuevo producto al inventario. POST /api/products/create

Body (JSON):
{
    "name": "Agua Potable (1L)",
    "price": 15,
    "stock": 50,
    "category": "Bebidas"
}


4. Actualizar un suministro (PUT) Modifica la información de un producto existente, identificado por su ID. PUT /api/products/edit/:id

5. Eliminar un suministro (DELETE) Elimina un producto del inventario usando su ID. DELETE /api/products/:id

Arquitectura
El proyecto sigue una arquitectura por capas para separar responsabilidades:

Rutas (routes): Definen los endpoints de la API.
Controladores (controllers): Manejan la lógica de las peticiones HTTP.
Servicios (services): Coordinan la lógica de negocio.
Modelos (models): Interactúan directamente con la base de datos (Firestore).
Tecnologías Utilizadas
Node.js y Express: Para la creación del servidor.
Firebase (Firestore): Como base de datos NoSQL en la nube.
JSON Web Tokens (JWT): Para la autenticación y protección de rutas.
dotenv: Para el manejo de variables de entorno.
cors y express.json(): Middlewares esenciales para la comunicación y el parseo de peticiones.
