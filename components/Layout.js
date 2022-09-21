import Head from 'next/head';
import Image from 'next/future/image'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Home from '../pages';
import Header from "./Header";
import NavBar from "./NavBar";
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
    <NavBar />
  </div>
);

export default Layout;
