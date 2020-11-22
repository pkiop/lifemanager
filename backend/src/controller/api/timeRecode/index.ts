import Koa from 'koa';

export const get = (ctx: Koa.Context) => {
  ctx.body = [{ test: 'get' }];
};

export const post = (ctx: Koa.Context) => {
  ctx.body = [{ test: ctx.request.body }];
};

export const put = (ctx: Koa.Context) => {
  console.log('what is ctx.request in put : ', ctx.request);
  ctx.body = [{ test: ctx.request }];
};

export const del = (ctx: Koa.Context) => {
  console.log('what is ctx.request in delete: ', ctx.request);
  ctx.body = [{ test: ctx.request }];
};

export default {
  get,
  post,
  put,
  del,
};
