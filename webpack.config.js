const path = require('path');

module.exports = {
  entry: __dirname + "/src/index.jsx",
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          },
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  }
};


// ,
//   devServer: {
//     port:3000,
//     contentBase: path.resolve(__dirname, "/public"),
//     hot: true
//   }


// if (module.hot) {
//   module.hot.accept()
// }