import { Hono } from "hono";
import Nano from 'nano-jsx'
import { render } from "../renderer";
import { Top } from "../pages/Top";
import { About } from "../pages/About";

const root = new Hono()

root.get('/', c => {
  const html = render(<Top />)
  return c.html(html)
})

root.get('/about', c => {
  const html = render(<About />)
  return c.html(html)
})

export default root