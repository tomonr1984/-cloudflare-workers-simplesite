import { Hono } from "hono";
import Nano from 'nano-jsx'
import { render } from "./renderer";
import { Notfound } from "./pages/Notfound";
import root from "./router/root";
import basicauth from "./router/basicauth"

const app = new Hono()
app.notFound(c => {
  const html = render(<Notfound />)
  return c.html(html)
})

app.route('/', root)
app.route('basicauth', basicauth)

export default app