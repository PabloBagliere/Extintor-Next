import 'styles/globals.css';
import { AppProps } from 'next/app';
import NavBar from 'component/NavBar';
import Links from 'Utils/links';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NavBar links={Links} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
