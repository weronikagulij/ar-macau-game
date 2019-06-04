const mode = "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const devServer = { contentBase: "./dist" };

const entry = {
  index: ["./src/js/index.js", "./src/scss/index.scss"]
};

const _module = {
  rules: [
    {
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "svg-url-loader",
          options: {}
        }
      ]
    },
    {
      test: /\.(gif|png|jpe?g)$/i,
      use: [
        "file-loader",
        {
          loader: "image-webpack-loader",
          options: {}
        }
      ]
    }
  ]
};

const output = {
  filename: "[name].bundle.js",
  path: __dirname + "/dist/"
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: "./[name].bundle.css"
  })
];

module.exports = {
  entry,
  mode,
  module: _module,
  output,
  plugins
};
