import Koa from 'koa';

const OAuth = (ctx: Koa.Context) => {
  ctx.body = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}`;
};

const OAuthCallback = (ctx: Koa.Context) => {
  console.log('ctx: ', ctx);
  console.log('ctx body : ', ctx.body);
  ctx.body = 'callback';
};

export default { OAuthCallback, OAuth };
