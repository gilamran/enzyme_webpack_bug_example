module.exports = {
    entry: {
        test: './app.js'
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
        "cheerio": 'window',
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
    },
};
