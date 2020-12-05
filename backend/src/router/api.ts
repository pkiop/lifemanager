import Router from 'koa-router';
import authRouter from 'router/api/auth';
import timeRecode from 'router/api/timeRecode';

const router = new Router();

router.use('/auth', authRouter.routes());
router.use('/timeRecode', timeRecode.routes());

export default router;
