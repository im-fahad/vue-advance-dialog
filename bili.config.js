module.exports = {
    input: 'src/index.js',
    banner: true,
    output: {
        extractCSS: false,
    },
    plugins: {
        vue: {
            css: true
        }
    }
};