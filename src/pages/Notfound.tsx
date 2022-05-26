import Nano from 'nano-jsx'
import { LayoutDefault } from '../components/layouts/LayoutDefault'

export const Notfound = () => {
  return (
    <LayoutDefault>
      <section class="section">
        <h1 class="title">404</h1>
        <h2 class="subtitle">存在しないページです</h2>
      </section>
    </LayoutDefault>
  )
}