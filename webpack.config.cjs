const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'production',
    devtool: 'inline-source-map',
    externals: [nodeExternals()],
    entry: {
        main: './index.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.cjs',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [__dirname],
                exclude: [
                    path.resolve(__dirname, './node_modules'),
                    path.resolve(__dirname, './dist'),
                ]
            },
        ],
    },
    experiments: {
        topLevelAwait: true
    }
};
