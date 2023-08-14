module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/contexts': './src/contexts',
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/routes': './src/routes',
          '~/services': './src/services',
          '~/hooks': './src/hooks',
          '~/shared': './src/shared',
        },
      },
    ],
  ],
};
