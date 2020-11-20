import Koa from 'koa';
import Router from 'koa-router';
import githubAuth from '@Api/auth/github';

const router = new Router();

router.get('/auth/github/callback', githubAuth.OAuthCallback);
router.get('/auth/github/username', githubAuth.getUsername);
router.get('/auth/github', githubAuth.OAuth);

export default router;
