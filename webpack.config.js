module.exports = {
    entry: './src/client/index.jsx',
    output: {
        filename: 'bundle.js',
        path: 'public/js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};