const path = require('path');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css$/, use: ['raw-loader']},
            { test: /\.html$/, use: 'html-loader' }
        ],
      },
      output: {
        path: path.resolve(__dirname, 'npm-deployment'),
      },
    
  };