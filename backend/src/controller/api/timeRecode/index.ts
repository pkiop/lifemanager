import Koa from 'koa';

export const get = (ctx: Koa.Context, next: Function) => {
  ctx.body = [{ test: 'get' }];
};

export const post = (ctx: Koa.Context, next: Function) => {
  console.log('what is ctx.request in post : ', ctx.request);
  ctx.body = [{ test: ctx.request }];
};

export const put = (ctx: Koa.Context, next: Function) => {
  console.log('what is ctx.request in put : ', ctx.request);
  ctx.body = [{ test: ctx.request }];
};

export const del = (ctx: Koa.Context, next: Function) => {
  console.log('what is ctx.request in delete: ', ctx.request);
  ctx.body = [{ test: ctx.request }];
};

export default {
  get,
  post,
  put,
  del,
};
