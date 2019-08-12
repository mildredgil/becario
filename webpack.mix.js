const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.react('resources/assets/js/views/loginEstudiante.jsx', 'public/js/views')
    .react('resources/assets/js/views/loginAdmin.jsx', 'public/js/views')
    .react('resources/assets/js/views/navbarLoggedEstudiante.jsx', 'public/js/views')
    .react('resources/assets/js/views/navbarLoggedColaborador.jsx', 'public/js/views')
    .react('resources/assets/js/views/navbarLoggedAdministrator.jsx', 'public/js/views')
    .react('resources/assets/js/views/homeEstudiante.jsx', 'public/js/views')
    .react('resources/assets/js/views/homeColaboradores.jsx', 'public/js/views')
    .react('resources/assets/js/views/homeAdministrator.jsx', 'public/js/views')
    .react('resources/assets/js/views/footer.jsx', 'public/js/views')
    .react('resources/assets/js/views/evaluacionEstudiante.jsx', 'public/js/views')
    .react('resources/assets/js/views/loginColaborador.jsx', 'public/js/views')
    .react('resources/assets/js/views/configuraciones.jsx', 'public/js/views')
    .react('resources/assets/js/views/verificacion.jsx', 'public/js/views');