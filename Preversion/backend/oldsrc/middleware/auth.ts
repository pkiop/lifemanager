import Koa from '../oldsrc/koa';
import jwt from '../oldsrc/jsonwebtoken';
import { jwtConfig } from '../oldsrc/config/index';
import { authentificationError } from '../oldsrc/libs/error';
import { UserModel } from '../oldsrc/model/user';

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
    const user = await UserModel.findOne({ _id: decodedData.id });
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
