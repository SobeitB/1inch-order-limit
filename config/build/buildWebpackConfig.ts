import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
   const {paths, mode, isDev} = options;

   return {
      mode: mode,
      entry: paths.entry,
      output: {
         filename: "[name].[contenthash].js",
         path: paths.build,
         clean: true
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(),
      },
      resolve: buildResolve(options),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined,
   }
}