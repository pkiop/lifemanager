import Koa from 'koa';
import Router from 'koa-router';
import authRouter from './router/auth';

const app = new Koa();
const router = new Router();

router.use('/auth', authRouter.routes());
app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx:Koa.Context)=> {
  ctx.body = 'Hello Wo123!!!!';
});

app.listen(3000);