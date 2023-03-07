import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import mainpic from '../public/images/011.jpeg'
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../public/images/ADR-Logo-01.png'
import React from 'react';
import openingVideo from '../public/images/RFS_10sec.mp4';
import { useState } from 'react';
import CustomCursor from '../components/Cursor'




export default function Home() {
  const [show, setShow] = useState(1);

  function handleClick() {
    setShow(0);
  }

  return show ?(<div className={utilStyles.landingVideo} onClick={handleClick}>
    <video src={require('../public/images/RFS_10sec.mp4')} autoPlay loop muted/>
    <div className={utilStyles.textLandingPage}>
      <Image className={utilStyles.adrWhiteLogo}
          src={"/images/ADRWhite.png"}
          alt="Big logo"
          width={298}
          height={114}
        />
      <p>ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.</p>
    </div>
    <div className={utilStyles.videoCover}>
      
      
    </div>
    
</div>) : (
    <Layout>  
      <CustomCursor />
        <h3 className={utilStyles.adr_description}>ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.</h3>
        <Image className={utilStyles.arrowHome_style}
          src={mainarrow}
          alt="arrow upside"
          width={132.28}
          height={132.77}
        />
        <div className={utilStyles.logoContainer}>
          <Image className={utilStyles.logoHome_style}
            src={adrlogo}
            alt="Big logo"
            width={600}
            height={229.61}
          />
        </div>
        <Image className={utilStyles.ImageHome_style}
          src={mainpic}
          alt="ADR pic"
          width={1200}
          height={577}
        />
        
      
    </Layout>
    )
  ;
}

