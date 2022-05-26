import { Hono } from "hono";
import Nano from 'nano-jsx'
import { render } from "./renderer";
import { Notfound } from "./pages/Notfound";
import root from "./router/root";
import basicauth from "./router/basicauth"
import { Article } from "./pages/blog/Article";
import { blogPosts } from "./constants/blogPosts";
import { LayoutDefault } from "./components/layouts/LayoutDefault";
import { Post } from "./types";
import blog from "./router/blog";

const app = new Hono()
app.notFound(c => {
  const html = render(<Notfound />)
  return c.html(html)
})

app.route('/', root)
app.route('/basicauth', basicauth)
app.route('/blog', blog)

export default app