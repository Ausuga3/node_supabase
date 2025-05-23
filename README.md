# Mi Proyecto Node

Este es un proyecto de ejemplo creado con Node.js, Express, MongoDB y Supabase Storage. Permite subir imágenes desde un formulario web y almacenarlas en un bucket de Supabase. Además, incluye un modelo de usuario con Mongoose y configuración de base de datos.

## Estructura del Proyecto

```
mi-proyecto-node
├── .env                       # Variables de entorno (no subir a git)
├── package.json               # Configuración de npm y dependencias
├── public/                    # Archivos estáticos (formulario y recursos)
│   ├── formulario.html        # Formulario para subir imágenes
│   └── assets/
│       └── guia.txt           # Guía rápida de configuración Supabase
├── routes/                    # (Reservado para rutas adicionales)
├── src/
│   ├── index.js               # Punto de entrada de la aplicación Express
│   ├── upload.js              # Lógica para subir archivos a Supabase
│   ├── config/
│   │   └── connection.js      # Conexión a MongoDB con Mongoose
│   ├── models/
│   │   └── usuario.js         # Modelo de usuario con Mongoose
│   ├── utils/
│   │   └── helpers.js         # Funciones de utilidad
│   └── views/
│       └── pages/
│           └── landin.ejs     # Vista de ejemplo con EJS
├── uploads/                   # Archivos subidos temporalmente por Multer
└── README.md                  # Documentación del proyecto
```

## Instalación

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Copia el archivo `.env` y configura tus variables de entorno (ver ejemplo en el repo).
3. Instala las dependencias:

```
npm install
```

## Uso

Para iniciar la aplicación en modo desarrollo:

```
npm run dev
```

O en modo producción:

```
npm start
```

Luego abre [http://localhost:8080/formulario.html](http://localhost:8080/formulario.html) para acceder al formulario de subida de imágenes.

## Funcionalidades

- **Subida de imágenes**: El formulario en `public/formulario.html` permite subir imágenes, que se almacenan en Supabase Storage usando [`src/upload.js`](src/upload.js).
- **Modelo de usuario**: Definido en [`src/models/usuario.js`](src/models/usuario.js) y conectado a MongoDB Atlas mediante [`src/config/connection.js`](src/config/connection.js).
- **Variables de entorno**: Configura tus claves y credenciales en el archivo `.env`.
- **Vistas**: Ejemplo de vista EJS en [`src/views/pages/landin.ejs`](src/views/pages/landin.ejs).

## Dependencias principales

- [express](https://www.npmjs.com/package/express)
- [multer](https://www.npmjs.com/package/multer)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [nodemon](https://www.npmjs.com/package/nodemon) (desarrollo)

## Notas

- No olvides crear tu bucket en Supabase y configurar las políticas de acceso como se indica en [`public/assets/guia.txt`](public/assets/guia.txt).
- Los archivos subidos se almacenan temporalmente en la carpeta `uploads/` antes de enviarse a Supabase.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.