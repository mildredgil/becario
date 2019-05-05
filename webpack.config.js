const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/js/views'
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'pwa',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'public/css/**/*.css',
        'public/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        'public/js/**/*.{js}',
        'public/materialize/**/*.{css,eot,svg,ttf,woff,woff2,js,html}',
        'public/materialize-src/**/*.{css,eot,svg,ttf,woff,woff2,js,html}',
        'public/*.{css,eot,svg,ttf,woff,woff2,js,html}',
        //'public/**/*.{css,eot,svg,ttf,woff,woff2,js,html}'
      ],
      minify: true,
      stripPrefix: 'public/',
      handleFetch: true,
      navigateFallback: '/',
      staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
      runtimeCaching: [
          {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
              handler: 'cacheFirst'
          },
          {
              urlPattern: /^https:\/\/www\.thecocktaildb\.com\/images\/media\/drink\/(\w+)\.jpg/,
              handler: 'cacheFirst'
          }
      ]
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js(\?.*)?$/i
    })
  ],
  resolve: {
    alias: {
      'cldr$': 'cldrjs',
      'cldr': 'cldrjs/dist/cldr'
    } 
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["babel-preset-env", "babel-preset-flow", "babel-preset-react", "babel-preset-stage-2"],
            "plugins": ["transform-class-properties", "babel-polyfill"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};