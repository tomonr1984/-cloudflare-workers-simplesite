import Nano, { Link } from 'nano-jsx'
import { LayoutDefault } from '../../components/layouts/LayoutDefault'
import { Post } from '../../types'

type Props = {
  posts: Post[]
}

export const listItem = (post: Post) => (
  <li>
    <Link href={`/blog/${post.id}`}>{post.title}</Link>
  </li>
)

export const Top = (props: Props) => {
  return (
    <LayoutDefault>
      <section class="section">
        <h1 class="title">Blog記事一覧</h1>
        <div class="content">
          <ul>
            {props.posts.map(post => listItem(post))}
          </ul>
        </div>
      </section>
    </LayoutDefault>
  )
}