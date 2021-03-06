// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

var version = require('./package.json').version;

module.exports = {
    entry: './lib/embed-webpack.js',
    output: {
        filename : 'index.js',
        path: './dist',
        publicPath: 'https://unpkg.com/embed-jupyter-widgets@' + version + '/dist/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
            { test: /\.json$/, loader: "json-loader" },
            // jquery-ui loads some images
            { test: /\.(jpg|png|gif)$/, loader: "file" },
            // required to load font-awesome
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    postcss: function () {
        return [
            require('postcss-import'),
            require('postcss-cssnext')
        ];
    }
};
