'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            include:path.resolve(__dirname, './src'),
            loaders:'babel-loader'
        }]
    },
    plugins:[],
    devServer:{
        contentBase:'./public',
        host:'192.168.0.6',
        port:8090
    }
}