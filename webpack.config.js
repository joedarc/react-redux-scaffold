module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
   ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    contentBase: './'
  }
};
