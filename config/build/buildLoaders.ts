import webpack from "webpack";

export function buildLoaders():webpack.RuleSetRule[] {

   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }


   return [
      tsLoader,
   ]
}