/**
 * Created by beeraman on 3/17/2017.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        app:[
            "./app.js"
        ],
        vendor:[
            'angular',
            'angular-ui-router'
        ]
    },
    output:{
        path:path.join(__dirname, 'build'),
        filename:"[name].bundle.js"
    },
    devServer:{
        inline:true,
        contentBase:'./build',
        port:4040
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ],
    watch:true
}
