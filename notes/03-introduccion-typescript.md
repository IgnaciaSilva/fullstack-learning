# Introducción a TypeScript

## Objetivo de la sección

Incorporar TypeScript al proyecto DevTree y preparar el entorno para desarrollar utilizando tipado estático.

---

# ¿Qué es TypeScript?

TypeScript es un lenguaje desarrollado por Microsoft que extiende JavaScript.

Su principal característica es permitir agregar tipos al código, ayudando a detectar errores antes de ejecutar la aplicación.

TypeScript se compila a JavaScript, ya que los navegadores y Node.js ejecutan JavaScript.

## ¿Por qué usamos TypeScript?

Porque permite detectar errores durante el desarrollo, mejora el autocompletado del editor y hace que el código sea más fácil de mantener en proyectos grandes.

---

# Configuración del proyecto

Durante esta sección se configuró TypeScript dentro del proyecto DevTree.

## Se creó el archivo

`tsconfig.json`

Este archivo contiene la configuración del compilador de TypeScript.

Desde aquí se define cómo se compilará el proyecto.

---

## Se creó la carpeta

`src/`

A partir de esta sección el código fuente del proyecto se almacenará dentro de esta carpeta.

---

## index.ts

El archivo:

```text
index.js
```

fue reemplazado por:

```text
index.ts
```

Esto indica que el proyecto comenzará a desarrollarse utilizando TypeScript.

---

# package.json

Se realizaron algunos cambios importantes:

- Se actualizó la versión de TypeScript.
- Se eliminaron configuraciones que ya no eran necesarias.
- Se eliminó "type": "module", ya que la configuración del proyecto cambia al incorporar TypeScript.
- Se modificaron los scripts para trabajar con TypeScript.

---

# Cambio realizado en el servidor

El mensaje inicial cambió de:

```text
Hola Mundo en Express
```

a:

```text
Hola Mundo en Express / TypeScript
```

Con esto fue posible comprobar que el servidor seguía funcionando correctamente después de migrar a TypeScript.

---

# Problemas encontrados

## Error de compatibilidad con TypeScript

Durante la instalación apareció un problema de compatibilidad.

### Solución

Se instaló una versión anterior de TypeScript compatible con las dependencias del proyecto.

---

# Conceptos nuevos

- TypeScript
- Tipado estático
- Compilación
- tsconfig.json
- src
- index.ts

---

# Archivos importantes

## tsconfig.json

Configura el comportamiento del compilador de TypeScript.

---

## src/

Contiene el código fuente del proyecto.

---

## index.ts

Es el nuevo punto de entrada de la aplicación utilizando TypeScript.

---

# Cambios realizados

- Instalación de TypeScript.
- Configuración inicial del proyecto.
- Creación del archivo `tsconfig.json`.
- Creación de la carpeta `src`.
- Migración de `index.js` a `index.ts`.
- Actualización del `package.json`.
- Verificación del correcto funcionamiento del servidor.

---

# Lo más importante que aprendí

- Qué es TypeScript.
- Por qué se utiliza junto con Node.js.
- Para qué sirve el archivo `tsconfig.json`.
- La importancia de la carpeta `src`.
- Cómo comenzar la migración de JavaScript a TypeScript.
- Cómo resolver un problema de compatibilidad durante la instalación.

---

# Resumen de la sección

En esta sección preparé el proyecto DevTree para trabajar con TypeScript. Instalé y configuré el compilador, creé el archivo `tsconfig.json`, organicé el código dentro de la carpeta `src` y migré el archivo principal de `index.js` a `index.ts`. También resolví un problema de compatibilidad instalando una versión adecuada de TypeScript y comprobé que el servidor seguía funcionando correctamente.