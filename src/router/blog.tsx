import { Hono } from "hono";
import Nano from "nano-jsx"
import { blogPosts } from "../constants/blogPosts";
import { Article } from "../pages/blog/Article";
import { Top } from "../pages/blog/Top";

import { render } from "../renderer";

const getPosts = () => blogPosts

const getPost = (id: number) => {
  return blogPosts.find(post => post.id == id)
}

const blog = new Hono();
blog.get('/', c => {
  const html = render(<Top posts={getPosts()} />)
  return c.html(html)
})
blog.get('/:id', c => {
  const id = c.req.param('id')
  const post = getPost(Number(id))
  if (!post) return c.notFound()
  const html = render(<Article post={post} />)
  return c.html(html)
})

export default blog