import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import allRouter from '@Router/index';
import cors from '@koa/cors';

const app = new Koa();
app.use(cors());
app.use(bodyParser());
const router = new Router();

router.use(allRouter.routes());

app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx: Koa.Context) => {
  ctx.body = "<Button onclick=(function() {alert('하이')})>하이</Button>";
});

app.listen(3000);
