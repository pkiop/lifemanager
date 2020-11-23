import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import allRouter from 'router/index';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = new Koa();
app.use(cors());
app.use(bodyParser());
const router = new Router();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI!)
  .then((res) => {
    console.log('success connected to mongo');
  })
  .catch((err) => {
    console.log(err);
  });

router.use(allRouter.routes());

app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx: Koa.Context) => {
  ctx.body = "<Button onclick=(function() {alert('하이')})>하이</Button>";
});

app.listen(3000);
