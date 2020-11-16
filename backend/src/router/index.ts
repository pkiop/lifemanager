import Koa from 'koa';
import Router from 'koa-router';
import apiRouter from '@Router/api';

const router = new Router();

router.use('/api', apiRouter.routes());

export default router;
