import Nano, { Fragment, Helmet } from 'nano-jsx'
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Ogp } from '../Ogp';

type Props = {
  children?: any;
};


export const LayoutDefault = (props: Props) => {
  return (
    <div>
      <Helmet>
        <html lang="en" amp />
        <title>Nano JSX SSR</title>
        <meta name="description" content="Server Side Rendered Nano JSX Application" />
        <Ogp />
      </Helmet>

      <Helmet footer>
        <script src="/scripts.js"></script>
      </Helmet>

      <Header />
      {props.children}
      <Footer />
    </div>
  )
}