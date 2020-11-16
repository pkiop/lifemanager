import Koa from 'koa';

const OAuth = async (ctx: Koa.Context, next:Function) => {
  ctx.body = "안뇽하세요";
}

export default { OAuth }