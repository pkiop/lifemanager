import Router from '../oldsrc/koa-router';
import authRouter from '../oldsrc/router/api/auth';
import timeRecodeRouter from '../oldsrc/router/api/timeRecode';
import userRouter from '../oldsrc/router/api/user';

const router = new Router();

router.use('/auth', authRouter.routes());
router.use('/timeRecode', timeRecodeRouter.routes());
router.use('/user', userRouter.routes());

export default router;
