# DevTree - Primeros pasos

# ¿Qué es DevTree?

DevTree es el primer proyecto Full Stack del curso.

Durante su desarrollo se aprenderán las tecnologías necesarias para construir una aplicación completa, desde el backend hasta el frontend.

## Descripción del proyecto

Conocer el proyecto DevTree y preparar el entorno de desarrollo creando un servidor básico con Node.js y Express.

## Tecnologías del proyecto

### Backend

- Node.js
- Express
- TypeScript

### Base de datos

- MongoDB

### Frontend

- React
- Vite

---

# Configuración inicial

## Creación del proyecto Node.js

Se creó un nuevo proyecto utilizando Node.js.
También se utilizó npm (Node Package Manager) para administrar las dependencias del proyecto.

## package.json

Al iniciar el proyecto se creó el archivo:

`package.json`

Este archivo contiene la información principal del proyecto.

Entre otras cosas almacena:

- Nombre del proyecto.
- Versión.
- Dependencias.
- Scripts.
- Configuración general.

Es uno de los archivos más importantes en cualquier proyecto Node.js.

## Servidor con Express

Express es un framework que facilita la creación de servidores web utilizando Node.js.

Durante esta sección se creó un servidor básico.

Conceptos aprendidos:

- Crear un servidor.
- Levantar una aplicación.
- Escuchar peticiones HTTP.
- Configurar un puerto.

---
## process.env.PORT

Durante el curso se definió el puerto del servidor utilizando:

```javascript
const port = process.env.PORT || 4000;
```

### ¿Qué significa?

- `process.env.PORT` busca si existe una variable de entorno llamada `PORT`.
- Si existe, el servidor utilizará ese valor.
- Si no existe, utilizará el puerto **4000** gracias al operador `||`.

Esto permite que la aplicación funcione tanto en el computador del desarrollador como en servidores donde el puerto es asignado automáticamente.

Posteriormente el servidor se inicia utilizando esa variable:

---

# Modo Watch

Se configuró el modo **Watch**.

Su función es reiniciar automáticamente el servidor cada vez que se guarda un cambio en el código.

Esto evita detener y ejecutar nuevamente el proyecto manualmente.

Herramientas utilizadas:

- Node.js Watch Mode
- Nodemon

---
# Archivos importantes

## index.js

Es el punto de entrada de la aplicación.

Desde este archivo se crea el servidor y comienza la ejecución del proyecto.

---

## package.json

Contiene toda la configuración principal del proyecto.

Permite administrar dependencias y scripts.

---

## .gitignore

Permite indicar qué archivos y carpetas Git no debe subir al repositorio.

Ejemplos:

- node_modules
- archivos temporales
- variables de entorno (.env)

---

# Comandos utilizados

Inicializar un proyecto:

```bash
npm init
```

Instalar Express:

```bash
npm install express
```

Ejecutar el proyecto:

```bash
npm run dev
```

Ejecutar con modo Watch:

```bash
node --watch index.js
```

---

# Problemas encontrados

## Error ENOENT

Al ejecutar:

```bash
npm run dev
```

apareció el error:

```
Could not read package.json
```

### Causa

El comando se ejecutó fuera de la carpeta del proyecto.

### Solución

Entrar a la carpeta correcta antes de ejecutar npm.

---

## Puerto 4000 ocupado

El servidor no iniciaba porque el puerto 4000 estaba siendo utilizado por otro proceso.

Como solución temporal se utilizó el puerto **5000**.

Posteriormente se liberó el puerto siguiendo los pasos del curso y se volvió a utilizar el puerto **4000**.

### Aprendizaje

No todos los errores provienen del código. En ocasiones el problema puede estar relacionado con el entorno de desarrollo.

---

# Conceptos nuevos

- Node.js
- npm
- Express
- Servidor
- Puerto
- HTTP
- package.json
- .gitignore
- Watch Mode
- ES Modules (ESM)
- import / export

---

# Lo más importante que aprendí

- Cómo crear un proyecto Node.js.
- Cómo instalar Express.
- Cómo crear un servidor básico.
- Qué función cumple `app.listen()`.
- Qué es un puerto y cómo acceder al servidor desde el navegador.
- Cómo utilizar el modo Watch para reiniciar automáticamente el servidor.
- Cómo habilitar ES Modules en Node.js.
- Para qué sirven los archivos `index.js`, `package.json` y `.gitignore`.
- Cómo resolver problemas relacionados con la ejecución del proyecto y los puertos.

---

# Resumen de la sección

En esta sección preparé el entorno de desarrollo del proyecto DevTree. Aprendí a crear un proyecto con Node.js, instalar Express, levantar un servidor básico y configurar el modo Watch para facilitar el desarrollo. También conocí la sintaxis moderna de JavaScript mediante ES Modules y comprendí la función de archivos fundamentales como `index.js`, `package.json` y `.gitignore`. Además, resolví problemas relacionados con la ejecución del proyecto y el uso del puerto 4000, entendiendo que algunos errores pueden deberse al entorno y no necesariamente al código.