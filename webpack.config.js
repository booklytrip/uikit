var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var DST_DIR = path.resolve(__dirname, 'dist');

var config = {
    // Don't attempt to continue if there are any errors.
    bail: true,
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: 'source-map',
    entry: SRC_DIR + '/index.js',
    output: {
        path: DST_DIR,
        filename: 'index.js',
        library: 'UIKit',
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            'semantic-ui-css/semantic.css': 'empty',
        },
        extensions: ['.js', '.jsx'],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        'radium': {
            root: 'radium',
            commonjs2: 'radium',
            commonjs: 'radium',
            amd: 'radium',
        },
    },
    module: {
        rules: [
            {
                // First, run the linter.
                // It's important to do this before Babel processes the JS.
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                include: SRC_DIR,
                query: {
                    configFile: './.eslintrc',
                },
            },
            {
                test: /\.(js|jsx)$/,
                use: [ 'babel-loader' ],
                include: SRC_DIR,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        // Load modules globaly
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        // This helps ensure the builds are consistent if source hasn't changed:
        new webpack.optimize.OccurrenceOrderPlugin(),
        // Minify the code
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // React doesn't support IE8
                warnings: false,
            },
            mangle: {
                screw_ie8: true,
            },
            output: {
                comments: false,
                screw_ie8: true,
            },
        }),
    ],
};

module.exports = config;
