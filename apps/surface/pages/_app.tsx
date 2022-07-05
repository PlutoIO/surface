import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Pluto.</title>
      </Head>
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default CustomApp;
