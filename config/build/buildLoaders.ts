import webpack from "webpack";

export function buildLoaders():webpack.RuleSetRule[] {

   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }

   const fileLoader = {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
         'file-loader',
      ],
      options: {
         outputPath: 'images'
      }
   }

   return [
      tsLoader,
      fileLoader,
   ]
}