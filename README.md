Documentación Técnica

En este documento explicaremos las tecnologías requeridas para el desarrollo e implementación del proyecto. 
Estas tecnologías fueron las siguientes:

React
Javascript
HTML
CSS
Laravel
MySQL Workbench
PHP
GitHub
Composer

React: es un ambiente para Javascript y requiere de ciertas colecciones de Maps y Sets que en ciertos buscadores o en dispositivos viejos puede que no se proporcionen de manera nativa. Al estar implementando Javascript, un lenguaje orientado a objetos, podemos argumentar que el desarrollo usa esta metodología. En React se puede observar los beneficios del diseño orientado a objetos a través de sus componentes reusables que encapsulan información y funcionalidades establecidas por el desarrollador.

Composer: Es un manager de Dependencias para PHP. No tiene pre requisitos de sistema o hardware.

Laravel: es un framework que requiere de PHP mayor a la versión 5.4 y menor a la versión 7.0. La forma en que este framework administra los datos recibidos de la base de datos es mediante la creación de clases (objetos)  que los encapsulan y que permiten su manipulación por medio de estructuras, además de que cada uno tiene métodos e interactúan entre ellos para el desarrollo de la aplicación y solicitudes de los usuarios.

GitHub: es un control de cambios que permite trabajar en distintos framework en equipo. Requiere mínimo un procesador Intel Core 2 Duo de 1.6 GHz o mejor. Por lo menos 1GB RAM para Windows/Mac OS X. Por lo menos 512MB RAM para Linux. Windows: Vista en adelante. OS X: Snow Leopard 10.6.3 en adelante. Ubuntu, Debian, Fedora, CentOS o SuSE Linux.

VisualStudioCode: Es un editor de texto con soporte a múltiples tipos de lenguajes, IDE’s, frameworks y plataformas varias. Requiere mínimo un procesador de 1.8 GHz o mejor, de preferencia dual core o mayor. 2GB de RAM, 4 recomendado. y 50Gigas de memoria libre en disco duro, 130 gigas recomendado.

Como Correr el Sistema:
Pre-requisitos:

instala: git bash o github
entrar a: https://github.com/mildredgil/becario 
en GitHub hacer “git clone” del siguiente repositorio: git@github.com:mildredgil/becario.git 
Instala:
composer
node.js
MysqlWorkbench
XAMPP
Visual Studio Code (o algún otro editor de texto de su preferencia)

En XAMPP encienda el servidor de SQL y abra MySQLWorkbench
Crear una nueva conexión por el nombre de “becario” (todos los demás campos se dejan como por default.
En MySQL correr un script: “CREATE DATABASE becario; “
En la terminal de Git Bash direcciona hasta la ruta del folder becario (ejemplo: cd Documents; cd GitHub; cd becario debería llegar a la ruta “documents/Github/becario”
Una vez aquí correr el siguiente comando:
------------------------
composer install
------------------------
 Abra Visual Studio o el editor de texto abra el folder de becario.
 Crea un nuevo archivo de nombre: ".env" y dentro copie lo siguiente:
APP_ENV=local
APP_DEBUG=true
APP_KEY=base64:WLuuL3ANblBvu2WUv8cUmCQ3V7UvNmEeUrVaQB0RFUU=

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=becario
DB_USERNAME=root
DB_PASSWORD=
 Regrese a la terminal donde está la ruta del folder becario y corra el siguiente comando:
-----------------------
php artisan migrate
-----------------------
 Revisar que en MySQL se hayan creado las tablas dando refresh a la base de datos.
Una vez generada la base podrá hacer los inserts simplemente corriendo los scripts de .sql que están en la misma carpeta del proyecto.
 Regrese a la terminal de Git Bash de nuevo hasta la ruta del folder becario y corra el siguiente comando:
-----------------------
php artisan key:generate
-----------------------
php artisan serve
-----------------------
Abra el Browser (Chrome recomendado) con el url siguiente: http://localhost:8000
Debería poder estar visualizando nuestro Sistema de Asignación de Becarios en el login para Alumnos/Colaboradores.
Para acceder a la liga de Administrador escriba sobre el url la extensión “http://localhost:8000/loginAdmin”
