import Nano, { Fragment } from 'nano-jsx'

export const Header = () => {
  return (
    <Fragment>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/blog">
              blog
            </a>
            <a class="navbar-item" href="/about">
              about
            </a>
          </div>
        </div>

      </nav>
    </Fragment>
  )
}