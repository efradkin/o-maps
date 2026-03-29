import { Configuration } from "@rspack/cli";
import { HtmlRspackPlugin } from "@rspack/core";
import path from "path";

const config: Configuration = {
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    tsConfig: {
      configFile: path.resolve(__dirname, "tsconfig.json"),
    },
    extensions: ["...", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: "src/index.html",
    }),
  ],
  experiments: {
    css: true,
  },
  devServer: {
    open: true,
    static: ["."],
  },
};

export default config;
