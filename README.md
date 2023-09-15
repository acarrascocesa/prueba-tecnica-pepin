

# Documentación de la Aplicacinn de Gestion de Polizas prueba tecnica Seguros Pepin

## Resumen

Esta aplicación de gestión de pólizas permite a los usuarios administrar las pólizas de vehículos de los clientes. Permite la creación, lectura, actualización y eliminación de pólizas y sus vehículos asociados. La aplicación se divide en dos partes principales: el backend y el frontend.

## Tecnologías Utilizadas

### Backend
- Node.js: Entorno de ejecución de JavaScript en el servidor.
- Express.js: Marco de aplicación web para Node.js.
- MongoDB: Base de datos NoSQL utilizada para almacenar datos de la aplicación.
- Mongoose: Biblioteca de modelado de objetos MongoDB para Node.js.
- Axios: Cliente HTTP para realizar solicitudes a la API.

- Para el backend debe usar un archivo .env que tenga estas variables de entorno para que la base de datos de mongo funcione

PORT=3000
URL_DB=mongodb+srv://usuario:contraseña@cluster.mongodb.net/base_de_datos


### Frontend
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- React Router: Enrutamiento para la navegación dentro de la aplicación.
- Axios: Cliente HTTP para realizar solicitudes a la API.
- CSS: Hojas de estilo para la presentación de la aplicación.

## Backend

### Configuración

- Puerto del Servidor: 3000 (se puede configurar en `index.js`).
- Base de Datos MongoDB: MongoDB debe estar instalado y configurado en la URL especificada en `config/db.js`.

### Ejecución

1. Navega al directorio raíz del backend.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor backend.

### Rutas de la API

- Crear Póliza: `POST /polizas`
- Obtener Todas las Pólizas: `GET /polizas`
- Obtener Póliza por ID: `GET /polizas/:id`
- Actualizar Póliza: `PUT /polizas/:id`
- Eliminar Póliza: `DELETE /polizas/:id`
- Agregar Vehículos a una Póliza: `PUT /polizas/:id/vehiculos`

## Frontend

### Configuración

- Puerto de Desarrollo: 3001 (se puede configurar en `package.json`).

### Ejecución

1. Navega al directorio raíz del frontend.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor de desarrollo.

### Rutas del Frontend

- Inicio: `/`
- Lista de Clientes: `/clientes`
- Agregar Cliente: `/add-cliente`
- Lista de Pólizas: `/polizas`
- Agregar Póliza: `/add-poliza`



## Desarrolladores

- Angel Carrasco

## Contacto

acarrascocesa@gmail.com
https://acportfolio2023.netlify.app/