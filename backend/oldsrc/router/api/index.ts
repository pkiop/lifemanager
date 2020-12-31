import Router from 'koa-router';
import authRouter from 'router/api/auth';
import timeRecodeRouter from 'router/api/timeRecode';
import userRouter from 'router/api/user';

const router = new Router();

router.use('/auth', authRouter.routes());
router.use('/timeRecode', timeRecodeRouter.routes());
router.use('/user', userRouter.routes());

export default router;
