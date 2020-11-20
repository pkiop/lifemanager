import Koa from 'koa';

export const authontification = (ctx: Koa.Context, next: Function) => {
  console.log('ctx.request : ', ctx.request);
  ctx.body = true;
};

export default {};
