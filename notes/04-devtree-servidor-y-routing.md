# Separando servidor y creando Routing

## Objetivo de la sección

Mejorar la organización del proyecto DevTree separando la configuración del servidor y las rutas de la aplicación en archivos independientes.

---

# Separación de responsabilidades

Antes de realizar estos cambios, el archivo principal del proyecto contenía toda la lógica de la aplicación:

- Configuración de Express.
- Creación del servidor.
- Definición de rutas.
- Inicio de la aplicación.

Para mejorar la estructura del proyecto se separaron estas responsabilidades en diferentes archivos.

---

# Creación del archivo server.ts

Se creó el archivo:

```text
server.ts
```

Este archivo será responsable de configurar la aplicación utilizando Express.

Dentro de este archivo se realiza:

- Creación de la aplicación Express.
- Configuración del servidor.
- Integración de las rutas.
- Exportación de la aplicación.

La finalidad es mantener separado el código de configuración del código encargado de iniciar el servidor.

---

# Modificación del archivo index.ts

El archivo:

```text
index.ts
```

deja de contener toda la configuración del servidor.

Ahora su principal responsabilidad es iniciar la aplicación.

Sus funciones principales son:

- Importar el servidor.
- Definir el puerto utilizado.
- Ejecutar el método `listen()`.

---

# Creación del archivo de Routing

Se creó un nuevo archivo:

```text
router.ts
```

Este archivo permite separar las rutas de la aplicación del servidor principal.

Anteriormente las rutas estaban escritas directamente dentro del archivo del servidor.

Ahora se utiliza un Router de Express para organizar los diferentes endpoints.

---

# Express Router

Express permite crear un sistema de rutas utilizando:

```typescript
Router()
```

Esto permite agrupar las rutas de la aplicación y luego utilizarlas dentro del servidor.

Ejemplo:

```typescript
router.get('/', (req, res) => {
    res.send('Página principal')
})
```

---

# Nueva estructura del proyecto

Cada archivo tiene una responsabilidad específica:

## index.ts

Encargado de iniciar la aplicación.

## server.ts

Encargado de configurar Express.

## router.ts

Encargado de manejar las rutas.

---

# Ventajas de esta organización

Separar el servidor y las rutas permite:

- Tener un código más ordenado.
- Facilitar la lectura del proyecto.
- Evitar archivos demasiado grandes.
- Agregar nuevas funcionalidades de manera más sencilla.
- Preparar la aplicación para crecer.

---

# Problemas encontrados

## Problemas con importaciones y exportaciones

Al separar los archivos fue necesario revisar la comunicación entre módulos mediante importaciones y exportaciones.

### Solución

Se verificaron los archivos involucrados para asegurar que cada módulo estuviera correctamente conectado.

---

# Conceptos nuevos

- Separación de responsabilidades.
- Express Router.
- Organización de archivos.
- Importaciones y exportaciones entre módulos.
- Estructura de proyectos Express.

---

# Cambios realizados

- Separación de la configuración del servidor.
- Creación del archivo `server.ts`.
- Modificación de `index.ts`.
- Creación del archivo `router.ts`.
- Implementación de Express Router.
- Organización del código en diferentes módulos.

---

# Lo más importante que aprendí

- La importancia de separar responsabilidades dentro de un proyecto.
- Cómo organizar un servidor Express utilizando diferentes archivos.
- Cómo utilizar Router para manejar las rutas de una aplicación.
- Cómo dividir el código para facilitar su mantenimiento y crecimiento.

---

# Resumen de la sección

En esta sección mejoré la estructura del proyecto DevTree separando la configuración del servidor y las rutas de la aplicación. Creé el archivo `server.ts` para manejar la configuración de Express, mantuve `index.ts` como punto de entrada del servidor y agregué `router.ts` para organizar los endpoints.

Esta separación permite tener un proyecto más ordenado, fácil de mantener y preparado para continuar agregando nuevas funcionalidades.