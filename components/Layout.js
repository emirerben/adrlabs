import Head from 'next/head';
import Image from 'next/future/image'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Home from '../pages';
import Header from "./Header";
import Footer from "./Footer";
import Body from './Body';

const name = 'ADR';
export const siteTitle = 'ADR Labs';




const Layout = props => (
  <div className={utilStyles.layoutStyle}>
    <Head>
      <title>ADR Labs</title>
    </Head>
    <Header />
    <div className={utilStyles.contentStyle}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
