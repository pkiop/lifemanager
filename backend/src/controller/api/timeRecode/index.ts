import Koa from 'koa';

export const get = (ctx: Koa.Context) => {
  ctx.body = [{ test: 'get' }];
};

export const post = (ctx: Koa.Context) => {
  ctx.body = [{ test: ctx.request.body }];
};

export const put = (ctx: Koa.Context) => {
  console.log('id : ', ctx.params);
  ctx.body = [{ test: ctx.request.body }];
};

export const del = (ctx: Koa.Context) => {
  console.log('id : ', ctx.request.query.id);
  ctx.body = [{ test: ctx.request }];
};

export default {
  get,
  post,
  put,
  del,
};
