//// eslint-disable-next-line @typescript-eslint/no-var-requires
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    pwa: {
        name: "Robin Lindner"
    },
    configureWebpack: {
        plugins: [
            //new UglifyJsPlugin(),
            new MinifyPlugin()
        ]
    }
}