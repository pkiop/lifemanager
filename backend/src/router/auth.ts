import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx:Koa.Context, next:Function) => {
  ctx.body = '안녕하세요';
});

export default router;
