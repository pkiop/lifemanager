import Router from '../oldsrc/koa-router';
import timeRecodeController from '../oldsrc/controller/api/timeRecode';
import { authorization } from '../oldsrc/middleware/auth';

const router = new Router();
router.use('/', authorization);
router.get('/', timeRecodeController.get);
router.post('/', timeRecodeController.post);
router.put('/:id', timeRecodeController.put);
router.delete('/:id', timeRecodeController.del);

export default router;
