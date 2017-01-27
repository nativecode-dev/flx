module.exports = {
    destination: {
        components: 'public/components',
        public: 'public'
    },
    sources: {
        html: ['src/**/*.html'],
        tsx: ['src/**/*.tsx']
    },
    webpack: require('./webpack.config'),
    wiredep: {
        directory: 'public/components'
    }
}