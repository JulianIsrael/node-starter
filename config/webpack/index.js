const path = require('path')
// const webpack = require('webpack')

const mode = 'development'

const resolver = root => path.resolve(__dirname, '..', '..', root)

const resolve = {
  extensions: ['.js', '.jsx'],
  alias: {
    '@': resolver('src'),
  },
}

const entry = './src/index.js'

const output = {
  path: resolver('dist'),
  filename: 'index.js',
}

const babel_rule = {
  test: /\.(js)$/,
  use: 'babel-loader',
  exclude: /node_modules/,
}

const file_rule = {
  test: /\.(png|jpg|gif|csv)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        context: resolver('src'),
      },
    },
  ],
}

const rules = [babel_rule, file_rule]

module.exports = {
  mode,
  entry,
  output,
  resolve,
  module: {
    rules,
  },
}
