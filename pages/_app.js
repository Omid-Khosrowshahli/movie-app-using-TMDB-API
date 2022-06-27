import ModalContextProvider from '../src/contexts/ModalContext';
import Layout from '../src/layouts/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  );
};

export default MyApp;
