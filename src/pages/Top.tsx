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

      <div class="section columns m-2">
        <div class="card column">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div>
        </div>

        <div class="card column ml-2 mr-2">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div>
        </div>

        <div class="card column">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div>
        </div>
      </div>
    </LayoutDefault>
  )
}