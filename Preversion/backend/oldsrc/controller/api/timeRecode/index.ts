import Koa from '../oldsrc/koa';
import {
  addOneTimeRecode,
  getAllTimeRecode,
} from '../oldsrc/service/timeRecode';

export const get = async (ctx: Koa.Context) => {
  const res = await getAllTimeRecode();
  ctx.body = { data: res };
};

export const post = async (ctx: Koa.Context) => {
  try {
    await addOneTimeRecode(ctx.request.body);
  } catch (e) {
    ctx.status = 500;
  }
  ctx.status = 201;
  ctx.body = { message: 'success' };
};

export const put = (ctx: Koa.Context) => {
  ctx.body = [{ test: ctx.request.body }];
};

export const del = (ctx: Koa.Context) => {
  ctx.body = [{ test: ctx.request }];
};

export default {
  get,
  post,
  put,
  del,
};
