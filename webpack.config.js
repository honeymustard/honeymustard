const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: 'dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'mustard.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['src']
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        extensions: ['.js', '.jsx']
    }
}
