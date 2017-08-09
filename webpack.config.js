module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: 'public/js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};