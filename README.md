# School Schedule CRUD Project

Este es un proyecto básico de CRUD para gestionar horarios escolares utilizando Motoko para el backend y HTML/CSS y JavaScript puro para el frontend. No se utiliza React en este proyecto.

## Requisitos

- [SDK de DFINITY](https://sdk.dfinity.org/)
- [Node.js](https://nodejs.org/)

## Configuración del Entorno de Desarrollo

1. **Instalar el SDK de DFINITY**:
   ```sh
   sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

## Estructura del Proyecto 
school_schedule/
├── src/
│   ├── school_schedule/
│   │   ├── main.mo
│   │   ├── assets/
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   └── script.js
├── dfx.json
└── README.md

## Descripción de Archivos

main.mo: Contiene la lógica del backend escrita en Motoko.
index.html: Archivo HTML para la interfaz de usuario.
styles.css: Archivo CSS para los estilos de la interfaz de usuario.
script.js: Archivo JavaScript para la lógica del frontend.

## Funcionalidades

Crear Horarios: Añadir nuevos horarios escolares.
Leer Horarios: Ver la lista de horarios existentes.
Actualizar Horarios: (Funcionalidad no implementada en este ejemplo, pero puede añadirse).
Borrar Horarios: Eliminar horarios existentes.