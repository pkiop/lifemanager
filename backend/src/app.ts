import Koa from 'koa';
import Router from 'koa-router';
import allRouter from '@Router/index';

const app = new Koa();
const router = new Router();

router.use(allRouter.routes());

app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx:Koa.Context)=> {
  ctx.body = 'Hel11 Wo123!!!!';
});

app.listen(3000);