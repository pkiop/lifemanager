import Router from 'koa-router';
import githubAuth from 'controller/api/auth/github';

const router = new Router();
router.get('/github/username', githubAuth.getUsername);
router.get('/github/getToken', githubAuth.getToken);
router.get('/github', githubAuth.getOAuthUrl);

export default router;
