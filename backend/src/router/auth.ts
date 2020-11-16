import Koa from 'koa';
import Router from 'koa-router';
import githubController from '../controller/github';

const router = new Router();

router.get('/github/callback', githubController.OAuth);

export default router;
