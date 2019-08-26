module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3000
  },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" }]
  }
};
