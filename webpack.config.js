const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
module.exports={
     // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry:'./src/index.js',
      // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output:{
        // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path:path.resolve(__dirname , 'dist'),
          // filename le pone el nombre al archivo final
        filename:'main.js',
    },
    resolve:{
          // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
        extensions:[".js"]
    },
    module: {
        // REGLAS PARA TRABAJAR CON WEBPACK
        rules : [
            {
                test: /\.m?js$/, // LEE LOS ARCHIVOS CON EXTENSION .JS,
                exclude: /node_modules/, // IGNORA LOS MODULOS DE LA CARPETA
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/i,
                use:{
                    loader:'css-loader'
            }
          }
     ]  
    
    },
    // SECCION DE PLUGINS
    plugins: [
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCssExtracPlugin(),
    ]
}
