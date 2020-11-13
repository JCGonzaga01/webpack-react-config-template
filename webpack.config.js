// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     filename: "./app.bundle.js",
//   },
// };

/** "http-server"
 * scripts: "http-server": "http-server build/",
 * This library is used to constantly served the files in "build" folder
 * to an http server into our browser.
 * This will automaticay load all changes from the specified folder,
 * in our example the "build" folder.
 *
 * The problem with this is that, webpack and http-server is in
 * different process. we must update the build folder via webpack
 * then http-server will read it.
 *
 * You can use this if you just want to serve your project to the browser.
 * but alternative way to continuos serving any changes in the project
 * to the browser is the "webpack-dev-server"
 */

/** "Webpack-dev-server"
 * By running this in your project together with your created webpack.config file
 * it will automatically serve any changes to the project in to the browser.
 *
 * e.g.
 * scripts:
 * before = "dev": "webpack -d --watch"
 * after = "dev": "webpack-dev-server"
 *
 */

var webpack = require("webpack");
var path = require("path");
var TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var BUILD_DIR = path.join(__dirname, "build");
var APP_DIR = path.join(__dirname, "src");

const VENDOR_LIBS = ["react", "react-dom", "react-router-dom"];

var config = {
  entry: APP_DIR + "/index.js",
  /** This will probably unnecessary since Webpack ^4x
   * already has optimization property and splitchunks
   */
  // entry: {
  //   bundle: APP_DIR + "/index.js",
  //   vendor: VENDOR_LIBS,
  // },
  output: {
    // Apply this for lazy loading support
    path: path.resolve(__dirname, "build"),
    // path: BUILD_DIR,

    /** "Chunkhash" is used to make sure to reload file whenever we have changes
     * This is part of what we called 'Cached Busting'
     * Browser is dependent to file name.
     * If the filename is already cached, even we do changes, browser will not update the data.
     * But if we add chunkhash, which is the checksum of the bundled file,
     * browser will always update the data if there changes since filename now is
     * different from the previous cached filename.
     *
     * We updated the "chunkhash" to "hash" because we enabled the hot reloading
     * of our dev server. Hot reloading is to avoid unnecessary full reload.
     * Chunkhash to recalculateion of changes, but since hot reload
     * is enabled, it might fail in calculation of checksum that's
     * why we will use "hash" to name our bundled files
     *
     * "hash" is only good for development mode
     * if going to build for production, change it to "chuckhash"
     */
    filename: "[name].[hash].js",
    // Apply this for lazy loading support
    publicPath: "/",
  },
  // This options will help how modules will be resolved
  resolve: {
    // This omits the file extension when importing files
    // e.g.
    // FROM import component from './path/component.tsx'
    // TO import component from './path/component;
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
    // Assignment of absolute path
    // FROM import files from '../path/files'
    // TO import files from 'files'
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    // This is to add tsconfig as part of module resolve.
    // uncomment if will use TS
    // plugins: [
    //   new TsconfigPathsPlugin({
    //     configFile: path.resolve(__dirname, "./tsconfig.json"),
    //     extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    //     logLevel: "INFO",
    //     baseUrl: APP_DIR,
    //   }),
    // ],
  },
  devServer: {
    /** Though webpack-dev-server runs in memory to load the project in to the browser
     * But just in case we have static files that is also needed to load to the browser,
     * this contentBase property is what webpack-dev-server will look into to load
     * those static files to the browser
     * e.g.
     * Assets folder
     *
     * if you want to configure multiple contentBase,
     * just change string value to string[].
     */
    contentBase: BUILD_DIR,
    /** This is to make sure whenever webpack-dev-server sends file to the browser,
     * it will always compress those files with gzip to load them quicker
     * over the network.
     */
    compress: true,
    port: 3000,
    disableHostCheck: false,
    /** This is usefule if we will use this project to be called
     * from the other application,
     * headers will be part of "response header" and is usefull
     * if the other application requires specific headers and value for
     * better authentication
     */
    headers: {
      "X-Custom-header": "custom",
    },
    /** This will automatically open the file to the default browser once served.  */
    open: true,
    /** This is useful to avoid full reloading of the served project in the browser.
     * This is useful if we want to retain the state values or when we just changed some css property.
     *
     * e.g.
     * Change some css property, and the site will not do full reloading.
     */
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // You can either specify which folder to read/test or which folder to exclude from reading/testing
        // include: APP_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        // options: {
        //   babelrc: false,
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        //   // plugins: ["@babel/plugin-syntax-dynamic-import"],
        // },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.scss$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    // This will automatically delete all files inside the 'output.path' directory
    // Deletion will happen every after call of this webpack.config
    new CleanWebpackPlugin(),
    // This will automate the deployment of any changes from your project to build/index.html
    new HtmlWebpackPlugin({
      template: APP_DIR + "/index.html",
    }),
    // Depracated in Webpack ^4x
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ["vendor"],
    // }),

    /** For Hot Module Reloading */
    new webpack.HotModuleReplacementPlugin(),
    /** This config to make your project ready for Production Build
     * But you can also tweak the property to config it for
     * either in development mode or production mode
     * you can set things on what will be the behavior
     * per environment
     */
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    // runtimeChunk: "single", // enable "runtime" chunk
    splitChunks: {
      cacheGroups: {
        /** This will load all dependencies,
         * This is sometimes called 'Cached Busting'
         * Whenever there are changes to any node_module files/libs,
         * Webpack will recalculate the bundle size and updated the bundled file.
         * And if the bundled file updated, the checksum as well will recalculated and updated
         * Checksum is used for the "chunkhash" of the output file name.
         *
         * Note:
         * It will be better to create multiple chunks to cached libs,
         * if you think some libs will not be updated regularly,
         * you can create separate cachedGroups for it so it will be cached to the browser
         * and it will only be updated if there are changes.
         * This is useful to minimize the bundle size
         *
         * e.g.
         *  This will only bundled the specified lib
         * react: {
         *  test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
         *  name: "react",
         *  chunks: "all",
         * },
         */
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};

module.exports = config;
