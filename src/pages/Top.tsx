import Nano from 'nano-jsx'
import { LayoutDefault } from '../components/layouts/LayoutDefault'

export const Top = () => {
  return (
    <LayoutDefault>
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            Awesome SSR website
          </p>
          <p class="subtitle">
            Running on the edge of a CDN
          </p>
        </div>
      </section>
    </LayoutDefault>
  )
}