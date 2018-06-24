const path = require('path');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.jsx',
  output: {
    publicPath: '/dist/',
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
            loader: 'style-loader',
            options: {
              hmr: !prod,
              singleton: prod
            }
          },
          {
            loader: 'css-loader',
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
  },
  devServer: {
    progress: false,
    inline: true,
    proxy: {
        '**': 'http://localhost:3000'
    }
  }
}
