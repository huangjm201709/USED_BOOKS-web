const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'developement';
const config = {
  lintOnSave:false,
  // entry: ["babel-polyfill", path.join(__dirname, 'src/main.js')],
  // output: {
  //   path: path.join(__dirname, 'dist'),
  //   filename: 'bundle.js',
  // },
  devServer: {
    port: 8080,
    proxy: {
      '/manageURL': {
        target: "http://localhost:9090",
        changeOrigin: true,
        pathRewrite: {
          '^/manageURL': ''
        }
      }
    },
    hot: true,
  },
  // module: {
  //   rules: [
  //     // {
  //     //   test: /\.js$/,
  //     //   exclude: [/node_modules/, path.join(__dirname, 'src/assets/js')],
  //     //   use: {
  //     //     loader: "babel-loader",
  //     //   }
  //     // },
  //     {
  //       test: /\.(css|less)$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         {
  //           loader: 'less-loader',
  //           options: {
  //             "modifyVars": {},
  //             javascriptEnabled: true
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  //       loader: 'url-loader',
  //       options: {
  //         limit: 100,
  //         name: 'images/[name].[ext]'
  //       },
  //     },
  //   ]
  // },
  // plugins: [
  //   // new webpack.DefinePlugin({

  //   // })
  //   // new webpack.HotModuleReplacementPlugin(),
  // ],
  // resolve: {
  //   alias: {
  //     '@': resolve('src'),
  //   }
  // },

}
// if (isDev) {
// config.devtool = '#eval-source-map';
// config.devServer = {
//   open: true,
//   port: 8081,
//   proxy: {
//     '/manageURL': {
//       target: "http://localhost:9090",
//       changeOrigin: true,
//       pathRewrite: {
//         '^/manageURL': ''
//       }
//     }
//   },
//   hot: true,
//   performance: {
//     hints: "errors"
//   }
// }
// }
module.exports = config;