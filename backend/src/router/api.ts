import Koa from 'koa';
import Router from 'koa-router';
import authRouter from '@Router/api/auth';
import timeRecode from '@Router/api/timeRecode';

const router = new Router();

router.use('/auth', authRouter.routes());
router.use('/timeRecode', timeRecode.routes());

export default router;
