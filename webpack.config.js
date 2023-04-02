const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup: './src/popup/index.tsx',
        contents: './src/contents/contents.tsx',
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name]/main.js',
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/manifest.json', to: 'manifest.json' },
                { from: './src/popup/index.html', to: 'popup/index.html' },
            ]
        })
    ],
    resolve: {
        extensions: ['js', 'json', 'ts', 'tsx']
    },
    module: {
        rules: [
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
        ]
    },
    mode: 'development',
    devtool: "source-map"
};
