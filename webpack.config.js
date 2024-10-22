const path = require('path');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css$/, use: ['raw-loader']},
            { test: /\.scss$/, use: ['raw-loader', 'sass-loader']},
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.svg$/, use: 'svg-inline-loader' },
        ],
      },
      output: {
        path: path.resolve(__dirname, 'npm-deployment'),
      },
    
  };