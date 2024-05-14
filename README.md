# Grupo_3--Marketplace_VPS

Nuestro proyecto consiste en diseñar un sitio web dedicado a la venta de VPS (Virtual Private Server).

El sitio web contara con un sistema de inicio de sesion para usuarios y administradores, un sistema de registro de usuarios, tambien incluira un simulador de compra en el cual el usuario podra elegir un plan redireccionandolo a una pagina para configurar el servidor y por ultimo una pagina en el cual el usuario podra seleccionar la duracion del plan. Por parte del administrador contara con un menu para gestionar los planes y los usuarios. Por ultimo el usuario tendra la capacidad de modificar la informacion de su perfil y la posibilidad de escribir reseñas acerca de servicio.

Responsabilidad integrantes

Ignacio Uribe (planes): CRUD de sistema de planes, configuracion de servidor, simulacion de compras.
Nicolas Llancaqueo (administrador): Implementacion de seguridad/autenticacion para inicio de sesion, gestion/eliminacion de usuarios.

Tareas en conjunto (cliente): sistema de inicio de sesion, registro de usuario, creacion de testimonios/comentarios, modificacion del perfil.


# vega-hosting

# Como ejecutar el proyecto

## 1. Abrir una terminal en VSC

Ve a la pestana "Terminal" en la parte superior y selecciona “New Terminal” o simplemente presiona "Ctrl + shift + ñ" para abrir la terminal integrada.

## 2. Instalar dependencias del proyecto

Ejecuta el siguiente comando para instalar todas las dependencias listadas en package.json 

```
npm install
```

## 3. Iniciar json-server en la terminal

Ejecuta el siguiente comando para iniciar json-server

```
json-server --watch dataBase.json
```

## 4. Abrir otra terminal para live-server

Ahora nuevamene ve a la pestana "Terminal" en la parte superior y selecciona “New Terminal” o simplemente presiona "Ctrl + shift + ñ" para una nueva terminal integrada y ejecuta el siguiente comando para iniciar live-server

```
npm run serve
```