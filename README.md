# Angular Basic Auth Management

Este proyecto es una solución básica de autenticación y gestión de usuarios con control de acceso basado en roles (RBAC), desarrollada con **Angular 19** en el frontend y **Node.js/Express** en el backend. Utiliza **MySQL** como base de datos y sigue buenas prácticas de arquitectura y seguridad.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Repositorio](#estructura-del-repositorio)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
  - [Variables de Entorno](#variables-de-entorno)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Flujo de Autenticación](#flujo-de-autenticación)
- [Endpoints de la API](#endpoints-de-la-api)
- [Esquema de la Base de Datos](#esquema-de-la-base-de-datos)
- [Extensión y Personalización](#extensión-y-personalización)
- [Licencia](#licencia)
- [Autor](#autor)

---

## Descripción

**Angular Basic Auth Management** es un sistema de autenticación y gestión de usuarios que permite:

- Registro y login de usuarios
- Validación de tokens JWT
- Gestión de roles (admin, user, guest)
- Protección de rutas privadas en Angular
- Interfaz moderna y responsiva con TailwindCSS + DaisyUI

Ideal como base para proyectos que requieran autenticación segura y control de acceso.

---

## Características

- **Autenticación JWT**: Registro, login y validación de sesión.
- **Control de Acceso por Roles**: Admin, User y Guest.
- **Gestión de Usuarios y Roles**: CRUD completo para administradores.
- **Protección de Rutas**: Rutas públicas, privadas y de autenticación.
- **Interfaz Moderna**: UI responsiva con DaisyUI y TailwindCSS.
- **Notificaciones**: Toasts amigables con ngx-sonner.
- **Código Modular**: Separación clara entre frontend y backend.

---

## Tecnologías Utilizadas

### Backend

- Node.js + Express.js
- TypeScript
- TypeORM
- MySQL
- JWT (jsonwebtoken)
- bcrypt

### Frontend

- Angular 19
- TypeScript
- RxJS
- TailwindCSS + DaisyUI
- ngx-sonner

---

## Estructura del Repositorio

```
angular-basic-auth-management/
├── README.md
├── backend/                 # API Node.js/Express
│   ├── src/
│   │   ├── modules/         # Módulos: auth, users, roles
│   │   ├── utils/           # Utilidades y scripts HTTP
│   │   └── ...              
│   ├── package.json
│   └── tsconfig.json
└── frontend/                # Aplicación Angular 19
    ├── src/
    │   ├── app/
    │   │   ├── auth/        # Componentes de autenticación
    │   │   ├── front/       # Componentes públicos
    │   │   ├── private/     # Componentes protegidos
    │   │   └── shared/      # Componentes/utilidades compartidas
    │   └── environments/    # Configuración de entornos
    ├── package.json
    └── tsconfig.json
```

---

## Requisitos Previos

- Node.js (v16+)
- MySQL Server
- Angular CLI (v19+)
- npm

---

## Instalación y Puesta en Marcha

### 1. Clonar el repositorio

```bash
git clone https://github.com/jebcdev/angular-basic-auth-management.git
cd angular-basic-auth-management
```

---

### 2. Variables de Entorno

#### Backend

Crea un archivo `.env` en la carpeta `backend/` con el siguiente contenido:

```
PORT=4000
API_PREFIX=/api/v1

# Configuración de la base de datos
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_password
DB_NAME=angular-basic-auth-management

# JWT
JWT_SECRET=una_clave_secreta_segura
JWT_EXPIRES_IN=3600
```

---

### 3. Backend

```bash
cd backend
npm install
```

- Crea la base de datos en MySQL:

```sql
CREATE DATABASE `angular-basic-auth-management`;
```

- Inicia el servidor backend:

```bash
npm run dev
```

- (Opcional) Semilla inicial de roles y usuarios:

```bash
# En otra terminal
curl -X POST http://localhost:4000/api/v1/seed/rolesusers
```

Esto creará los roles y usuarios iniciales:

- **Admin**: admin@admin.com / 12345678
- **User**: user@user.com / 12345678
- **Guest**: guest@guest.com / 12345678

---

### 4. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Abre tu navegador en [http://localhost:4200](http://localhost:4200)

---

## Flujo de Autenticación

1. El usuario se registra o inicia sesión desde el frontend.
2. El backend valida las credenciales y retorna un token JWT.
3. El frontend almacena el token en `localStorage`.
4. El token se incluye automáticamente en las peticiones protegidas.
5. Las rutas privadas verifican la validez del token antes de permitir el acceso.

---

## Endpoints de la API

### Autenticación

- `POST /api/v1/auth/register` - Registrar usuario
- `POST /api/v1/auth/login` - Login de usuario
- `POST /api/v1/auth/profile` - Obtener perfil (requiere token)
- `POST /api/v1/auth/check-token` - Validar token

### Usuarios (solo admin)

- `GET /api/v1/users` - Listar usuarios
- `GET /api/v1/users/:id` - Obtener usuario por ID
- `POST /api/v1/users` - Crear usuario
- `PATCH /api/v1/users/:id` - Actualizar usuario
- `DELETE /api/v1/users/:id` - Eliminar usuario

### Roles (solo admin)

- `GET /api/v1/roles` - Listar roles
- `GET /api/v1/roles/:id` - Obtener rol por ID
- `POST /api/v1/roles` - Crear rol
- `PATCH /api/v1/roles/:id` - Actualizar rol
- `DELETE /api/v1/roles/:id` - Eliminar rol

---

## Esquema de la Base de Datos

### Tabla Roles

- `id` - PK
- `name` - Nombre del rol (admin, user, guest)
- `description` - Descripción

### Tabla Usuarios

- `id` - PK
- `name` - Nombre
- `surname` - Apellido
- `email` - Email (único)
- `password` - Contraseña (hasheada)
- `role_id` - FK a roles
- `created_at` - Fecha de creación
- `updated_at` - Última actualización

---

## Extensión y Personalización

- **Agregar nuevos roles**: Usa los endpoints de roles.
- **Agregar nuevas funcionalidades**: Crea nuevos módulos en backend y componentes en frontend.
- **Cambiar estilos**: Modifica los archivos de Tailwind/DaisyUI en el frontend.

---

## Licencia

MIT

---

## Autor

Jebcdev  
[https://github.com/jebcdev](https://github.com/jebcdev)

---

¿Dudas o sugerencias? ¡Abre un issue o contacta al autor!