import utilStyles from '../styles/utils.module.css';
import Header from './Header';
import Head from 'next/head';
import Image from 'next/future/image'
import styles from './layout.module.css';
import Link from 'next/link';
import SmallResearchTopics from './SmallResearchTopics';



const LayoutAbout = props => (
    <div className={utilStyles.AboutStyle}>
        <Head>
            <title>ADR Labs</title>
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
        </Head>
        <div className={utilStyles.headerYellowBackground}></div>

        <Header></Header>
        <div className={utilStyles.yellowblockStyle}>
            {props.children}    
        </div>
        <SmallResearchTopics></SmallResearchTopics>
        
    </div>
    
);
export default LayoutAbout;