import Nano, { Fragment } from 'nano-jsx'

export const Ogp = () => {
  return (
    <Fragment>
      <meta property="og:title" content="OGP titile" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://examples.com" />
      <meta property="og:image" content="https://bulma.io/images/bulma-logo.png" />
      <meta property="og:site_name" content="OGP site name" />
      <meta property="og:description" content="OGP description" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image"></meta>
    </Fragment>
  )
}