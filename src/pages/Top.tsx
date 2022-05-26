import Nano from 'nano-jsx'
import { LayoutDefault } from '../components/layouts/LayoutDefault'

export const Top = () => {
  return (
    <LayoutDefault>
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            Hero title
          </p>
          <p class="subtitle">
            Hero subtitle
          </p>
        </div>
      </section>
    </LayoutDefault>
  )
}