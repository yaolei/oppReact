const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const prefixer = require('postcss-prefix-selector');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mt",
    projectName: "showReact",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [{
        test: `/\.css$/`,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [
                prefixer({
                  prefix: '.testDiv'
                }),
                autoprefixer({
                  browsers: ['last 4 versions']
                })
              ]
            }
          }
        ]
      }]
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
