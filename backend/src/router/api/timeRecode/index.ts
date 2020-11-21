import Koa from 'koa';
import Router from 'koa-router';
import timeRecodeController from '@Controller/api/timeRecode';

const router = new Router();
router.get('/', timeRecodeController.get);
router.post('/', timeRecodeController.post);
router.put('/', timeRecodeController.put);
router.delete('/', timeRecodeController.del);

export default router;
