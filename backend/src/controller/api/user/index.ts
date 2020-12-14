import Koa from 'koa';

export const getUserByAccessToken = (ctx: Koa.Context) => {
  ctx.header = { 'Access-Control-Allow-Origin': '*' };
  ctx.body = ctx.request.body.user;
};

export default {
  getUserByAccessToken,
};
