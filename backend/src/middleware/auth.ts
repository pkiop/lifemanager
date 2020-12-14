import Koa from 'koa';
import jwt from 'jsonwebtoken';
import { jwtConfig } from 'config/index';
import { authentificationError } from 'libs/error';
import { UserModel } from 'model/user';

export const authorization = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  try {
    const key = 'access_token';
    const accessToken = ctx.cookies.get(key);
    if (!accessToken) {
      throw authentificationError;
    }
    const decodedData = jwt.verify(accessToken, jwtConfig.jwtSecret) as any;
    const user = await UserModel.findOne({ id: decodedData.id });
    if (!user) {
      throw authentificationError;
    }
    ctx.request.body.user = user;
  } catch (e) {
    throw authentificationError;
  }

  await next();
};

export default {};
