import { Hono } from "hono";
import Nano from 'nano-jsx'
import { render } from "./renderer";
import { Notfound } from "./pages/Notfound";
import root from "./router/root";

const app = new Hono()
app.notFound(c => {
  const html = render(<Notfound />)
  return c.html(html)
})

app.route('/', root)

export default app