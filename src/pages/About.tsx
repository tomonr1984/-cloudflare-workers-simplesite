import Nano, { Link } from 'nano-jsx'
import { LayoutDefault } from '../components/layouts/LayoutDefault'

export const About = () => {
  return (
    <LayoutDefault>
      <section clsas="section">
        <div class="container p-5">
          <h1 class="title">このサイトについて</h1>
          <p>Cloudflare CDNのエッジで動作するシンプルなサイトです</p>
        </div>

        <div class="container p-5">
          <h2 class="title is-5">技術</h2>
          <div class="content">
            <ul>
              <li><Link href="https://workers.cloudflare.com/">Cloudflare Workers</Link></li>
              <li><Link href="https://nanojsx.io/">nano JSX</Link></li>
              <li><Link href="https://bulma.io/">BULMA</Link></li>
            </ul>
          </div>
        </div>

        <div class="container p-5">
          <p>
          <Link href="/404">オリジナル404ページへのリンク</Link>
          </p>
          <p>
          <Link href="/basicauth">Basic認証つきページへのリンク</Link>
          </p>
        </div>
      </section>
    </LayoutDefault>
  )
}