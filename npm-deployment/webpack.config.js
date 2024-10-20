module.exports = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            // { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.css$/, use: ['raw-loader']},
            { test: /\.html$/, use: 'html-loader' }
        ],
      },
    
  };