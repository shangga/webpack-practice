/**
 * Created by wenba20160163 on 17/6/1.
 */
module.exports = {
  entry: {
    app: './js/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/dist'
  }
}