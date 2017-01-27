const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src/index.tsx'),
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
            test: /\.ts(x)?$/,
            loader: 'awesome-typescript-loader'
        }],
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/components')
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    }
}