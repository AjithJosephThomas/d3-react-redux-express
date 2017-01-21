var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var path = require('path');
module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?path=/dist/__webpack_hmr&timeout=20000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
     path: path.join(__dirname, 'dist'),
    filename: 'app.js',
	publicPath:'/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
	   { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
	  path: path.join(__dirname, 'dist')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],

  postcss: () => [
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ],
};
