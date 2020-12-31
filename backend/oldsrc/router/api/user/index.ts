import Router from '../oldsrc/koa-router';
import userController from '../oldsrc/controller/api/user';
import { authorization } from '../oldsrc/middleware/auth';
import compose from '../oldsrc/koa-compose';

const router = new Router();
router.get(
  '/current',
  compose([authorization, userController.getUserByAccessToken]),
);

export default router;
