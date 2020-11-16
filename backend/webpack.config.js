const path = require('path');
module.exports = {
  name: 'ts-back-setting', mode: 'development', // "production" | "development" | "none" 
  devtool:'eval', // source-map hidden-source-map 
  resolve: { 
    modules: ['node_modules'], 
    extensions: ['.ts', 'json', '.jsx', '.js'], 
    alias: { 
      "@Controller": path.resolve(__dirname, 'src/controller'), 
      "@Router": path.resolve(__dirname, 'src/router'), 
      "@Api": path.resolve(__dirname, 'src/api'), 
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
    path:path.join(__dirname,'./dist'), 
    filename:'[name].js' 
  }, 
  target: 'node',

}

