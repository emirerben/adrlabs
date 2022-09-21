import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import mypic from '../public/images/AdR_HomePage_008-bw2.png'



export default function Home() {
  return(
    <Layout>
        <h3 className={utilStyles.adr_description}>ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.</h3>
        <Image className={utilStyles.ImageHome_style}
          src={mypic}
          alt="Picture of the author"
          width={1200}
          height={577}
        />
      
    </Layout>
  )
}

