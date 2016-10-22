module.exports = {
    entry: './index',
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    output: {
        path: 'bin',
        filename: 'index.bundle.js'
    },
    devtool: 'sourcemaps'
};
