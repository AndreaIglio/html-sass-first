let mix = require("laravel-mix");

mix
.js("assets/app.js", 'js')
.sass('assets/app.scss', 'css')
.setPublicPath('dist');
