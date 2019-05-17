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

React: es un ambiente para Javascript y requiere de ciertas colecciones de Maps y Sets que en ciertos buscadores o en dispositivos viejos puede que no se proporcionen de manera nativa.

Composer: Es un manager de Dependencias para PHP. No tiene pre requisitos de sistema o hardware.

Laravel: es un framework que requiere de PHP mayor a la versión 5.4 y menor a la versión 7.0

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

Por qué utilizamos todo esto?

Laravel

La razón de haber escogido precisamente estas fue que dentro de uno de los dos equipos que integramos este proyecto una de nuestras compañeras (Mildred Gil) ya tenía experiencia profesional con las herramientas y nos pareció lo más realizable.

Fuera de ella, los demás teníamos poca o nada experiencia con estas tecnologías. La decisión más sencilla fue tomar GitHub como nuestro control de cambios, para poder coordinar un mejor trabajo en equipo donde todos pudiéramos estar trabajando un mismo workframe.

Una vez decidido eso, cada uno de los integrantes de este equipo de amms, que fue el equipo de desarrolladores instalamos Composer, Node.js, la mayoria ya teniamos XAMPP para levantar un servidor de MySQL que habíamos instalado para la clase de Bases de datos junto con MySQLWorkbench. Además de que XAMPP ya tiene instalado PHP.

Una vez todo arriba, utilizamos un editor de texto como Visual Studio Code para el desarrollo de todos los archivos donde estábamos creando todo lo necesario.

Tenemos archivos en php para los scripts de generación de tablas en laravel y otros archivos de configuración. Una vez creados en Laravel, hicimos migración de las tablas a MySQL Workbench, desde donde trabajamos con todos los inserts, y exportamos el código de estos scripts de inserts para volver a colocar en la carpeta compartida en GitHub.

Finalmente React lo utilizamos para pasar los scripts en CSS de extensión .jsx a archivos .js que pudiésemos después levantar en el browser para hacer todas las pantallas. 




