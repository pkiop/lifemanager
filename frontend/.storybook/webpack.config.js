const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

  config.resolve.modules.push(path.resolve('./src'));
  config.resolve.modules.push(path.resolve('./node_modules'));
  config.resolve.alias = {
    '@Components': path.resolve(__dirname, '../' , 'src/components'),
    '@Atoms': path.resolve(__dirname, '../','src/components/UI/atoms'),
    '@Molecules': path.resolve(__dirname, '../','src/components/UI/molecules'),
    '@Organisms': path.resolve(__dirname, '../','src/components/organisms'),
    '@Templates': path.resolve(__dirname, '../','src/components/templates'),
    '@Pages': path.resolve(__dirname, '../','src/components/pages'),
    '@Images': path.resolve(__dirname, '../','src/images'),
    '@Styles': path.resolve(__dirname, '../','src/styles'),
    '@Utils': path.resolve(__dirname, '../','src/utils'),
    '@Hooks': path.resolve(__dirname, '../','Hooks'),
    '@Stores': path.resolve(__dirname, '../','src/stores'),
  },
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
