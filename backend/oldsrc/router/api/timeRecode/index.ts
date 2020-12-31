import Router from 'koa-router';
import timeRecodeController from 'controller/api/timeRecode';
import { authorization } from 'middleware/auth';

const router = new Router();
router.use('/', authorization);
router.get('/', timeRecodeController.get);
router.post('/', timeRecodeController.post);
router.put('/:id', timeRecodeController.put);
router.delete('/:id', timeRecodeController.del);

export default router;
