import Head from 'next/head';
import Image from 'next/future/image'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Home from '../pages';
import Header from "./Header";
import Footer from "./Footer";
import Body from './Body';
import LatestWork from './FeaturedProjects';
import SmallAboutUs from './SmallAboutUs';
import SmallResearchTopics from './RecentPublications';
import SmallNews from './SmallNews';



const name = 'ADR';
export const siteTitle = 'ADR Labs';





const Layout = props => (

  <div className={utilStyles.layoutStyle}>
    <Head>
      <title>ADR Labs</title>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
    </Head>

    <div style={{marginTop:-100}}>
    <Header></Header>
    </div>
    <div className={utilStyles.headerWhiteBackground}></div>
    <div className={utilStyles.contentStyle}>
      {props.children}
    </div>
    <LatestWork />
    <SmallAboutUs />
    <SmallResearchTopics />
    <SmallNews />
    <Footer />
  </div>
);

export default Layout;
