# Sección 6 - Routing para Autenticación y Peticiones HTTP

## Objetivo de la sección

Crear las primeras rutas para el módulo de autenticación, comprender el funcionamiento de los métodos HTTP GET y POST, y aprender a probar las rutas del servidor utilizando herramientas especializadas.

---

# Routing para Autenticación

Durante esta sección se comenzó a desarrollar el módulo de autenticación del proyecto DevTree.

Se crearon las primeras rutas encargadas de manejar las solicitudes relacionadas con los usuarios.

Estas rutas servirán como base para implementar funcionalidades como el registro y autenticación de usuarios en las siguientes secciones.

---

# Métodos HTTP

Durante esta sección se trabajó con dos de los métodos HTTP más utilizados en el desarrollo de APIs.

## GET

El método **GET** se utiliza para solicitar información al servidor.

Este método permite obtener datos sin modificar la información almacenada.

---

## POST

El método **POST** se utiliza para enviar información al servidor.

Generalmente se utiliza cuando se desea crear un nuevo registro o enviar datos para ser procesados por la aplicación.

---

# Herramientas para probar la API

Para probar las rutas creadas durante el desarrollo se utilizaron herramientas especializadas que permiten realizar peticiones HTTP sin necesidad de crear una interfaz gráfica.

## Postman

Se descargó e instaló Postman para enviar peticiones al servidor.

Con esta herramienta fue posible cambiar entre distintos métodos HTTP, enviar información y visualizar las respuestas obtenidas.

---

## Thunder Client

También se utilizó Thunder Client, una extensión de Visual Studio Code.

Esta herramienta permite realizar las mismas pruebas que Postman directamente desde el editor de código.

---

# Envío de datos al servidor

Se aprendió a enviar información mediante una petición **POST** utilizando el formato JSON.

Como ejemplo se envió la siguiente información:

```json
{
    "name": "Ignacia",
    "email": "m.ignacia.ts@gmail.com"
}
```

Estos datos fueron enviados al servidor para simular el registro de un usuario.

---

# Lectura de datos enviados

Para que el servidor pudiera recibir la información enviada desde Postman o Thunder Client fue necesario habilitar la lectura del cuerpo de las peticiones.

Gracias a esta configuración, el servidor puede acceder a los datos enviados por el cliente y utilizarlos dentro de la aplicación.

---

# Formato JSON

La información enviada al servidor se trabajó utilizando el formato JSON.

Este formato organiza los datos mediante pares de clave y valor, siendo uno de los estándares más utilizados para la comunicación entre aplicaciones.

---

# Ventajas de utilizar herramientas de prueba

Trabajar con Postman y Thunder Client permite:

- Probar las rutas antes de desarrollar una interfaz gráfica.
- Verificar que el servidor responde correctamente.
- Enviar distintos tipos de peticiones HTTP.
- Simular el envío de información desde un cliente.

---

# Problemas encontrados

## El servidor no recibía la información enviada

Al comenzar las pruebas, el servidor no podía leer los datos enviados desde Postman.

### Solución

Se configuró Express para permitir la lectura del cuerpo de las peticiones, haciendo posible acceder a la información enviada en formato JSON.

---

# Conceptos nuevos

- Métodos HTTP.
- GET.
- POST.
- Postman.
- Thunder Client.
- Body de una petición.
- JSON.
- Routing para autenticación.

---

# Herramientas importantes

## Postman

Aplicación utilizada para probar peticiones HTTP enviadas al servidor.

---

## Thunder Client

Extensión de Visual Studio Code utilizada para probar APIs directamente desde el editor.

---

# Cambios realizados

- Creación de las primeras rutas para autenticación.
- Implementación de los métodos HTTP GET y POST.
- Instalación y configuración de Postman.
- Uso de Thunder Client para probar las rutas.
- Envío de información al servidor utilizando JSON.
- Configuración del servidor para leer el cuerpo de las peticiones.

---

# Lo más importante que aprendí

- La diferencia entre los métodos HTTP GET y POST.
- Cómo probar una API utilizando Postman y Thunder Client.
- Cómo enviar información al servidor mediante una petición POST.
- Cómo utilizar JSON para intercambiar información entre el cliente y el servidor.
- La importancia de probar las rutas antes de desarrollar una interfaz gráfica.

---

# Resumen de la sección

En esta sección comencé a desarrollar las rutas para el módulo de autenticación del proyecto DevTree. Aprendí el funcionamiento de los métodos HTTP GET y POST y utilicé Postman y Thunder Client para probar las rutas del servidor.

Además, configuré la aplicación para recibir información enviada mediante el cuerpo de una petición en formato JSON, comprendiendo cómo se comunican el cliente y el servidor durante el intercambio de datos.