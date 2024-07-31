module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    'postcss-custom-media': {},
    'postcss-nested': {},
    'postcss-functions': {
      functions: {
        toVw: (val, vwViewport = 1920) => {
          const vwContext = vwViewport * 0.01;
          const result = (val / vwContext).toFixed(5); // Округление до 5 знаков после запятой
          return `${result}vw`;
        },
      },
    },
    'postcss-pxtorem': {
      rootValue: 24,
      unitPrecision: 5,
      propWhiteList: ['*'],
      selectorBlackList: [/^html$/],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /(node_modules)/i
    },
  },
};
