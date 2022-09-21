import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import mainpic from '../public/images/AdR_HomePage_008-bw2.png'
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../public/images/ADR-Logo-01.png'




export default function Home() {
  return(
    <Layout>
        <h3 className={utilStyles.adr_description}>ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.</h3>
        <Image className={utilStyles.arrowHome_style}
          src={mainarrow}
          alt="arrow upside"
          width={132.28}
          height={132.77}
        />
        <Image className={utilStyles.logoHome_style}
          src={adrlogo}
          alt="Big logo"
          width={600}
          height={229.61}
        />
        <Image className={utilStyles.ImageHome_style}
          src={mainpic}
          alt="ADR pic"
        />
        
      
    </Layout>
  )
}

