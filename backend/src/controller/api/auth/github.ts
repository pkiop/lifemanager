import Koa from 'koa';
import env from 'dotenv';
import qs from 'qs';
import axios from 'axios';

env.config();

const OAuth = (ctx: Koa.Context, next: Function) => {
  ctx.body = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=user:email`;
};

const OAuthCallback = async (ctx: Koa.Context) => {
  const host = 'https://github.com/login/oauth/access_token?';
  const queryString = qs.stringify({
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: ctx.request.query.code,
    redirect_uri: process.env.GITHUB_REDIRECT_URL,
    state: process.env.OAUTH_STATE,
  });
  try {
    const res = await axios.get(`${host}${queryString}`);
    const token = qs.parse(res.data).access_token;
    ctx.cookies.set('accessToken', token as string, { httpOnly: false });
    ctx.redirect(`${process.env.FRONT_SERVER_INDEXPAGE}`);
  } catch (err) {
    console.log(err);
  }
};

const getUsername = async (ctx: Koa.Context) => {
  const config = {
    headers: {
      Authorization: `${ctx.request.header.authorization}`,
      'User-Agent': 'Login-App',
    },
  };
  try {
    const resp = await axios.get(
      'https://api.github.com/user/public_emails',
      config,
    );
    ctx.body = resp.data[0].email;
  } catch (err) {
    console.log(err);
  }
};

export default { OAuth, OAuthCallback, getUsername };
