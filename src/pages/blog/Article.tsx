import Nano, { Link } from 'nano-jsx'
import { LayoutDefault } from '../../components/layouts/LayoutDefault'
import { Post } from '../../types'

type Props = {
  post: Post
}

export const Article = (props: Props) => {
  return (
    <LayoutDefault>
    <section class="section">
      <h1 class="title">{props.post.title}</h1>
      <div class="content">
        {props.post.body}
      </div>
        <div class="content">
          <Link href="/blog">記事一覧へ</Link>
        </div>
    </section>
    </LayoutDefault>
  )
}