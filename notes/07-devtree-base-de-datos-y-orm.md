# Sección 7 - DevTree: Agregando una base de datos y ORM

## Objetivo de la sección

Incorporar una base de datos MongoDB al proyecto DevTree utilizando MongoDB Atlas y Mongoose, aprendiendo cómo conectar la aplicación con la base de datos, proteger las credenciales mediante variables de entorno y mejorar la visualización de mensajes en la terminal utilizando colores.

---

# Base de datos y ORM

Una base de datos permite almacenar y administrar la información que utiliza una aplicación.
En esta sección se incorporó una base de datos MongoDB al proyecto DevTree.
También se conoció el concepto de ORM y sus ventajas para trabajar con bases de datos desde el código.

## ¿Qué es un ORM?

ORM significa **Object-Relational Mapping**.

Es una herramienta que permite trabajar con los datos de una base de datos utilizando objetos y estructuras del lenguaje de programación, evitando tener que escribir directamente todas las consultas a la base de datos.

### Ventajas de utilizar un ORM

- Facilita la interacción entre el código y la base de datos.
- Permite trabajar con los datos de una forma más organizada.
- Reduce la necesidad de escribir consultas directamente.
- Facilita el mantenimiento del código.
- Ayuda a estructurar y validar la información.

---

# MongoDB Atlas

Se creó una cuenta en **MongoDB Atlas**, plataforma que permite utilizar MongoDB en la nube.
Desde MongoDB Atlas se creó una primera instancia o **cluster de MongoDB**, que será utilizada por el proyecto DevTree para almacenar información.

## Cluster

Un cluster es la instancia donde se encuentra disponible la base de datos de MongoDB.
Desde MongoDB Atlas se puede administrar la instancia, las bases de datos y las conexiones necesarias para utilizar MongoDB desde una aplicación.

---

# Mongoose

**Mongoose** es una herramienta utilizada para trabajar con MongoDB desde Node.js.

Permite definir estructuras para los datos y facilita la interacción entre nuestra aplicación y MongoDB.
Mongoose funciona como una capa de modelado que permite trabajar con los documentos de MongoDB de una manera más organizada desde el código.

---

# Conexión de MongoDB con DevTree

Se conectó la aplicación DevTree con la base de datos creada en MongoDB Atlas.
Para realizar la conexión se utilizó la URL proporcionada por MongoDB Atlas.
La aplicación necesita esta URL para saber a qué base de datos debe conectarse.
La conexión permite que posteriormente DevTree pueda guardar, consultar y administrar información utilizando MongoDB.

---

# Variables de entorno

---

Para evitar colocar información sensible directamente dentro del código, se utilizaron **variables de entorno**.
Se creó un archivo:

'''text
.env

Dentro de este archivo se puede almacenar datos que no deberían verse dentro del codigo, como la URL de conxión a MongoDB.
Esto permite proteger datos como:

- Username.
- Password.
- URL de conxeión.

---

# Lo más importante que aprendí

- Una aplicación puede utilizar una base de datos para almacenar información de forma persistente.
- MongoDB es una base de datos que puede utilizarse desde Node.js.
- MongoDB Atlas permite crear y administrar instancias de MongoDB en la nube.
- Mongoose facilita el trabajo con MongoDB desde Node.js.
- Un ORM permite trabajar con los datos de una base de datos desde el código de una forma más organizada.
- Las variables de entorno permiten mantener información sensible fuera del código.
- Las credenciales y URLs privadas no deben subirse a GitHub.
- .gitignore permite evitar que archivos sensibles como .env sean incluidos en los commits.
- La librería colors permite mejorar la lectura de los mensajes mostrados en la terminal.

---


# Resumen de la sección

En esta sección se incorporó una base de datos MongoDB al proyecto DevTree utilizando MongoDB Atlas y Mongoose. Se aprendió qué es un ORM y sus ventajas, se creó un cluster y se conectó la aplicación con MongoDB. También se aprendió a utilizar variables de entorno mediante un archivo .env para proteger la URL y las credenciales de la base de datos, evitando subirlas a GitHub mediante .gitignore. Finalmente, se agregó la librería colors para mejorar la visualización de los mensajes y errores en la terminal.