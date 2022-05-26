import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";

const basicauth = new Hono();
basicauth.use(
  '/*',
  basicAuth({
    username: '',
    password: ''
  })
)
basicauth.get('/', c => c.text('This is a Basic Certified page.'))

export default basicauth