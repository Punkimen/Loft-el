module.exports = {
    plugins: {
        'postcss-import': {},
        autoprefixer: {},
        'postcss-custom-media': {},
        'postcss-nested': {},
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
