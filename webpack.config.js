/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = [
    {
        context: path.resolve('./src'),
        devtool: 'source-map',
        entry: './index.ts',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        module : {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'babel.config.js')
                        }
                    }
                },
                {
                    test: /\.(c|le)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { sourceMap: true } },
                    ]
                }
            ]
        },
        optimization: {
            minimizer: [
                '...',
                new CssMinimizerPlugin()
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '...']
        }
    }
]