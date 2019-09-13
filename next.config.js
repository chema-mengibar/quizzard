/* eslint-disable @typescript-eslint/no-var-requires */
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

function getEnv() {
  return process.env.NODE_ENV === "development"
    ? { CURRENT_DATA_SOURCE: "MOCKS" }
    : { CURRENT_DATA_SOURCE: "MODULES" };
}

module.exports = function nextConfig({ webpack = config => config } = {}) {
  return {
    env: getEnv(),
    distDir: "dist",
    crossOrigin: "anonymous",
    poweredByHeader: false,
    cssLoaderOptions: {
      importLoaders: 1
    },
    webpack: config => {
      config.plugins
        .push
        // new CopyWebpackPlugin([
        //   {
        //     from: path.resolve(__dirname, './static'),
        //     to: path.resolve(__dirname, './.storybook/static'),
        //   },
        // ])
        ();

      config.module.rules.push({
        test: /\.css$/i,
        use: [{ loader: "to-string-loader" }, { loader: "css-loader" }]
      });

      return webpack(config);
    }
  };
};
