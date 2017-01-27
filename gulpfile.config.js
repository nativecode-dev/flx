const path = require('path')

const COMPONENTS = 'public/components'

module.exports = {
    debug: {
        html: {
            title: 'html'
        },
        js: {
            title: 'js'
        },
        tsx: {
            title: 'tsx'
        }
    },
    destination: {
        components: COMPONENTS,
        public: 'public',
        server: 'server'
    },
    sources: {
        html: ['src/client/**/*.html'],
        js: ['src/server/**/*.js'],
        tsx: ['src/client/**/*.tsx']
    },
    webpack: {
        devtool: 'source-map',
        entry: path.join(__dirname, 'src/client/index.tsx'),
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        module: {
            loaders: [{
                test: /\.ts(x)?$/,
                loader: 'awesome-typescript-loader?silent=true'
            }],
            preLoaders: [{
                test: /\.js$/,
                loader: 'source-map-loader'
            }]
        },
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, COMPONENTS)
        },
        resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
        },
        stats: {
            cached: true,
            chunks: false
        }
    },
    webserver: {
        directoryListing: {
            enable: false,
            path: 'public'
        },
        livereload: true,
        open: true
    },
    wiredep: {
        bowerJson: require('./bower.json'),
        cwd: 'public',
        directory: COMPONENTS,
        ignorePath: /..\/..\/public\//
    }
}