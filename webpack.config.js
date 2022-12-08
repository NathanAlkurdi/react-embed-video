/* eslint-disable @typescript-eslint/no-var-requires */
const { name } = require('./package.json')
const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin')

module.exports = [
    {
        mode: process.env.NODE_ENV || 'development',
        context: path.resolve('./src'),
        devtool: 'source-map',
        entry: './index.ts',
        output: {
            clean: true,
            filename: 'index.js',
            library: {
                name: name,
                type: 'umd'
            },
            path: path.resolve(__dirname, 'dist'),
        },
        externals: {
            'react': 'react',
            'react-dom': 'reactDOM',
        },
        module : {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'babel.config.js')
                        }
                    }
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: ['ts-loader']
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
            new MiniCssExtractPlugin(),
            new TypescriptDeclarationPlugin({
                removeComments: false
            })
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '...']
        }
    }
]