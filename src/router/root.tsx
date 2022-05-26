import { Hono } from "hono";
import Nano, { Fragment, Link } from 'nano-jsx'
import { render } from "../renderer";
import { Top } from "../pages/Top";
import { About } from "../pages/About";
import { ContactUs } from "../pages/ContactUs";
import { readRequestBody } from "../util";

const root = new Hono()

root.get('/', c => {
  const html = render(<Top />)
  return c.html(html)
})

root.get('/about', c => {
  const html = render(<About />)
  return c.html(html)
})

root.get('/contactus', c => {
  const html = render(<ContactUs />)
  return c.html(html)
})

root.get('/contactus/success', c => c.text('メール送信に成功しました'))

root.post('/contactus', async c => {
  const body = await readRequestBody(c.req)
  // KVに保存したりmailを投げたりする
  console.log(body)
  return c.redirect('/contactus/success')
})
export default root