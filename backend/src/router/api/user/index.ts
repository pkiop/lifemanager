import Router from 'koa-router';
import userController from 'controller/api/user';

const router = new Router();
router.get('/', userController.getUserByAccessToken);

export default router;
