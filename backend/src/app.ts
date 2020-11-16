const Koa = require('koa');
const app = new Koa();

app.use(async (ctx:any)=> {
  ctx.body = 'Hello World!';
});

app.listen(3000);