import Koa from 'koa';
import Router from 'koa-router';
import githubAuth from 'controller/api/auth/github';

const router = new Router();
router.get('/github/callback', githubAuth.OAuthCallback);
router.get('/github/username', githubAuth.getUsername);
router.get('/github', githubAuth.OAuth);

export default router;
