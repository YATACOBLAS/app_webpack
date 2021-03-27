# js-portfolio

💛 Babel Loader para JavaScript
<h4>Apuntes</h4>
Babel te permite hacer que tu código JavaScript sea compatible con todos los navegadores
Debes agregar a tu proyecto las siguientes dependencias
NPM

npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
Yarn

la -D para que se deapendencia de desarrollo


yarn add -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
babel-loader nos permite usar babel con webpack
@babel/core es babel en general
@babel/preset-env trae y te permite usar las ultimas características de JavaScript
@babel/plugin-transform-runtime te permite trabajar con todo el tema de asincronismo como ser async y await
Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
Para comenzar a utilizar webpack debemos agregar la siguiente configuración en webpack.config.js
{
...,
module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.js$/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/
      }
    ]
  }
}
RESUMEN: Babel te ayuda a transpilar el código JavaScript, a un resultado el cual todos los navegadores lo puedan entender y ejecutar. Trae “extensiones” o plugins las cuales nos permiten tener características más allá del JavaScript común

Es un plugin para inyectar javascript, css, favicons, y nos facilita la tarea de enlazar los bundles a nuestro template HTML.

Instalación
npm

npm i html-webpack-plugin -D

Para sass

npm i -D node-sass sass-loader

<h4>Apuntes</h4>
Para dar soporte a CSS en webpack debes instalar los siguientes paquetes
Con npm

npm i mini-css-extract-plugin css-loader -D

<h4>Apuntes</h4>
Si tienes la necesidad de mover un archivo o directorio a tu proyecto final podemos usar un plugin llamado “copy-webpack-plugin”
Para instalarlo debemos ejecutar el comando
Para npm

npm i copy-webpack-plugin -D