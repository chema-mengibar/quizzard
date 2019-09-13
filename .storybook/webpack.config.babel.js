import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import reactDevUtilsTypescriptFormatter from 'react-dev-utils/typescriptFormatter';

export default ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-react-app'],
      },
    }
  );

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: reactDevUtilsTypescriptFormatter,
    })
  );

  return config;
};
