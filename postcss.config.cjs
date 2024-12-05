const path = require("path");
const aliasMapping = {
  "@styles": (filename) => path.resolve(__dirname, "src/core/app/styles", filename),
  "@app": (filename) => path.resolve(__dirname, "src/core/app", filename),
};

module.exports = {
  plugins: {
    'postcss-import': {
      root: path.resolve(__dirname, "src"),
      path: [path.resolve(__dirname, "node_modules"), "core"],
      resolve(id, basedir) {
        const [aliasName, filename] = id.split("/");

        if (aliasMapping[aliasName]) {
          const resolvedPath = aliasMapping[aliasName](filename);
          return resolvedPath;
        }
        if (id.match(/^normalize\.css$/)) {
          return require.resolve("normalize.css");
        }
        const defaultPath = path.resolve(basedir, id);
        return defaultPath;
      },
    },
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
