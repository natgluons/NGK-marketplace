// module.exports = {
//     devServer: {
//         disableHostCheck: true
//     }
// }

module.exports = {
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: 'all',
      hot: true,  // Enable hot reload
      watchFiles: {
        paths: ['src/**/*.*'],  // Watch all files in src
        options: {
          usePolling: true  // Important for Docker
        }
      }
    },
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'natasha gading dog home',
        favicon: 'src/assets/favicon.ico'  // Updated to .ico
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'    // Changed from './' to '/' for production
      : '/'    // Development path remains the same
  }