import Koa from '../oldsrc/koa';

export const getUserByAccessToken = (ctx: Koa.Context) => {
  ctx.body = ctx.request.body.user;
};

export default {
  getUserByAccessToken,
};
