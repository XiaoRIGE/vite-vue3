// export default {
//   proxy: {
//     '/api': {
//       target: 'http://jsonplaceholder.typicode.com',
//       changeOrigin: true,
//       rewrite: path => path.replace(/^\/api/, '')
//     }
//   }
// }
module.exports = {
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
