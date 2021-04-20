let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
    entry: {
        app: './assets/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './assets/js/'),
        }
    },
    module: {
        rules: [
            {
                test: '/\.js$',
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};



module.exports = (env, options) => {
    let isProduction = options.mode === 'production';

    // conf.devtool = isProduction ? 'source-map' : 'eval-sourcemap';
    conf.devtool = isProduction ? false : 'eval-sourcemap';

    // console.log(options);
    return conf;
};
