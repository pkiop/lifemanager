import Koa from 'koa';
import Router from 'koa-router';
import apiRouter from 'router/api/api';

const router = new Router();

router.use('/api', apiRouter.routes());
router.get('/test', (ctx: Koa.Context, next: Function) => {
  ctx.body = { a: 1, b: 2, c: [1, 2, 3] };
});

export default router;
