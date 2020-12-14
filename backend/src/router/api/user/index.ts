import Router from 'koa-router';
import userController from 'controller/api/user';
import { authorization } from 'middleware/auth';
import compose from 'koa-compose';

const router = new Router();
router.get(
  '/current',
  compose([authorization, userController.getUserByAccessToken]),
);

export default router;
