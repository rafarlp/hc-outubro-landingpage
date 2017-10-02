var path = require('path');
var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  entry: {
    app: "./app/assets/scripts/app.js",
    vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
