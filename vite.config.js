const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~chart.js': path.resolve(__dirname, 'node_modules/chart.js')
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}