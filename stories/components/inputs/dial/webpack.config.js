const path = require('path');

module.exports = {
    entry: './Dial.js',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css$/, use: ['raw-loader']},
            { test: /\.html$/, use: 'html-loader' }
        ],
      },
  
    
  };