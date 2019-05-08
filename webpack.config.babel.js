import path from "path";
import nodeExternals from "webpack-node-externals";
import WebpackCleanupPlugin from "webpack-cleanup-plugin";
import NodemonPlugin from "nodemon-webpack-plugin";

const defaultOpts = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                {
                  legacy: true
                }
              ],
              [
                "@babel/plugin-proposal-class-properties",
                {
                  loose: true
                }
              ],
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
};

export default [
  {
    target: "node",
    entry: {
      server: ["./server/index.js"]
    },
    externals: [nodeExternals()],
    plugins: [new NodemonPlugin()],
    ...defaultOpts
  },
  {
    target: "web",
    entry: {
      driver: ["./server/driver/index.js"]
    },
    ...defaultOpts
  }
];
