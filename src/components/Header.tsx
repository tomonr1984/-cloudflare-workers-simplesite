import Nano, { Fragment } from 'nano-jsx'

export const Header = () => {
  return (
    <Fragment>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
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
            <a class="navbar-item" href="/contactus">
              contact us
            </a>
          </div>
        </div>
      </nav>

    </Fragment>
  )
}