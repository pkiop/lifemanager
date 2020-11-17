import Koa from 'koa';
import fetch from 'node-fetch';
import env from 'dotenv';
env.config();

const OAuth = async (ctx: Koa.Context, next:Function) => {
  console.log("redirect!!!!/n\n\n\n\n\n\n\n");
  ctx.body = "안뇽하세요";
}

const authorize = async (ctx: Koa.Context, next:Function) => {
  const GitHubAuthorizeUrl = 'https://github.com/login/oauth/authorize';
  const url = `${GitHubAuthorizeUrl}?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=user:email`;
  console.log(url);
  const res = await fetch(url);
  console.log(res);
  console.log('body : ', await res.body);
  ctx.body = res;
}

export default { OAuth, authorize }