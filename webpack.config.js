module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './client/app'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  }
}
