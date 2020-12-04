import Koa from 'koa';
import env from 'dotenv';
import qs from 'qs';
import axios from 'axios';

env.config();

const getOAuthUrl = (ctx: Koa.Context) => {
  ctx.body = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=user:email`;
};

const getAccessTokenFromGitHub = async (code: string) => {
  const host = 'https://github.com/login/oauth/access_token?';
  return axios.post(
    host,
    {
      code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
};

const getToken = async (ctx: Koa.Context) => {
  try {
    const res = await getAccessTokenFromGitHub(ctx.request.query.code);
    const token = qs.parse(res.data).access_token;
    ctx.body = token;
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

export default { getOAuthUrl, getToken, getUsername };
