# Desarrollador Backend Node js Test - Ernesto Gutierrez Cuba

## Descripción

Este proyecto esta desarrollado con Node.js, TypeScript y Serverless Framework, utilizando AWS Lambda, API Gateway, y DynamoDB para crear y desplegar servicios en Lambda. Ademas de la integracion con la API de Star Wars (SWAPI) y uso de AWS Translate.

## Requisitos

- Node.js 14.x o superior
- Serverless Framework instalado (`npm install -g serverless`)

## Instalación

1. Clona este repositorio: `git clone https://github.com/ernestogut/serverless-node-ts-test.git`
2. Ingresa al directorio del proyecto: `cd serverless-node-ts-test`
3. Instala las dependencias: `npm install`

## Configuración

Asegúrate de configurar tus credenciales de AWS para que Serverless Framework pueda desplegar tu aplicación.

1. Descargar AWS CLI (https://aws.amazon.com/cli/)
2. Abrir una terminal y ejecutar el comando: `aws configure`
3. Ingresar las credenciales de AWS (Access Key ID, Secret Access Key, Default region name)

## Postman

Abre Postman, dale click al MenuBar/File/Import y arrastra el archivo: `softtek-test.postman_collection.json` a la ventana que aparece en la pantalla de la aplicación.

## Uso

### Ruta POST

- **Endpoint:** `/create`
- **Descripción:** Crea un nuevo usuario en la base de datos.
- **Método:** POST
- **Cuerpo de la solicitud:**
  ```json
  {
    "first_name": "Ernesto",
    "email": "ernestogutttt@gmail.com",
    "last_name": "Gutierrez",
    "dob": "1998-03-25",
    "password": "123456"
  }
  ```
- **Respuesta exitosa:** Código de estado 200 OK y cuerpo JSON con el mensaje y los datos del empleado creado.

### Ruta GET (Users)

- **Endpoint:** /users
- **Descripción:** Obtiene la lista de usuarios.
- **Método:** GET
- **Respuesta exitosa:** Código de estado 200 OK y cuerpo JSON con la lista de usuarios.

### Ruta GET (Integración SWAPI)

- **Endpoint:** /get-swapi-people
- **Descripción:** Obtiene la lista de personas de Star Wars de la API SWAPI.
- **Método:** GET
- **Respuesta exitosa:** Código de estado 200 OK y cuerpo JSON con la lista de personajes.

## Despliegue

Para desplegar tu aplicación en AWS Lambda, utiliza el comando:

```
sls deploy
```
