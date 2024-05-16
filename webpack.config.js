const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    watch: true,
    devtool: 'inline-source-map',
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    // A server.
    devServer: {
      static: "./dist"
    },
    module: {
      rules: [
        // TypeScript.
        { 
            test: /\.tsx?$/, 
            loader: "ts-loader", 
            exclude: /node_modules/
        },
        // 'source-map-loader'.
        {
            test: /\.js$/,
            loader: "source-map-loader"
        },
        // Assets.
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ],
    },
    // Other options...
    plugins: [
        // Generate ./dist/index.html
        new HtmlWebpackPlugin({
          title: "Hieronymus"
        })
    ]
  };