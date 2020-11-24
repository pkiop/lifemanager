import Koa from 'koa';
import Router from 'koa-router';
import timeRecodeController from 'controller/api/timeRecode';

const router = new Router();
router.get('/', timeRecodeController.get);
router.post('/', timeRecodeController.post);
router.put('/:id', timeRecodeController.put);
router.delete('/:id', timeRecodeController.del);

export default router;
