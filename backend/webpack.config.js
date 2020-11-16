const path = require('path');
module.exports = {
  name: 'ts-back-setting', mode: 'development', // "production" | "development" | "none" 
  devtool:'eval', // source-map hidden-source-map 
  resolve: { 
    modules: ['node_modules'], 
    extensions: ['.ts', 'json', '.jsx', '.js'], 
    alias: { 
      "@gdlComponents": path.resolve(__dirname, 'src/gdlComponents'), 
    } ,
  }, 
  entry: { 
    index: ['./src/app.ts'] 
  }, 
  module: { 
    rules: [
      { 
        test: /\.ts$/, 
        use: ['ts-loader'], 
        exclude: ["/node_modules"] 
      }, 
      ] 
    }, 
  optimization:{}, 
  output:{ 
    path:path.join(__dirname,'./dist/src'), 
    filename:'[name].js' 
  }, 
  target: 'node',

}

