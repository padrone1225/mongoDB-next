import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Layout from 'src/components/Layouts/Layout';
// import Head from 'next/head';
// import Favicon from '../components/Meta/Favicon';
// import Sidebar from '../components/Sidebar/Sidebar';
// import Header from 'src/components/Headers/Header';
// import Footer from 'src/components/Footers/Footer';
import '../styles/index.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
