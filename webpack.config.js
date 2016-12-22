module.exports = {
    entry: {
        app: './app.js',
        tests: './app.spec.js'
    },
    output: {
        path: 'dist/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: {
        "cheerio": 'window',    //docs
        "react/addons": true,    //docs
        "react/lib/ExecutionEnvironment": true,    //docs
        "react/lib/ReactContext": true,    //docs
        "react": 'React',
        "react-dom": 'ReactDOM',
        "react-dom/server": true,
        "react-dom/lib/ReactTestUtils": true
    },
};
