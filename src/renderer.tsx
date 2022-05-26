import Nano from 'nano-jsx'
import { Helmet } from 'nano-jsx'

export const render = (component: any) => {
  const app = Nano.renderSSR(component)
  const { body, head, footer, attributes } = Helmet.SSR(app)
  const html = `
    <!DOCTYPE html>
    <html ${attributes.html.toString()}>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.0/css/all.css">
        ${head.join('\n')}
      </head>
      <body ${attributes.body.toString()}>
        ${body}
        ${footer.join('\n')}
      </body>
    </html>`

  return html
}