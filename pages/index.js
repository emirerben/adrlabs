import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import mainpic from '../public/images/011.jpeg'
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../public/images/ADR-Logo-01.png'
import React, { useRef } from 'react';
import openingVideo from '../public/images/RFS_10sec.mp4';
import { useState } from 'react';
import CustomCursor from '../components/Cursor'
import Header from '../components/Header';
import LatestWork from '../components/FeaturedProjects';
import SmallAboutUs from '../components/SmallAboutUs';
import SmallNews from '../components/SmallNews';
import Footer from '../components/Footer';
import LatestPublications from '../components/RecentPublications';
import Typewriter from "typewriter-effect";
import { useEffect } from 'react';


export default function Home() {

  const images = [
    '/images/011.jpeg',
    '/images/aboutus1.jpeg',
    '/images/aboutus2.jpeg',
  ]
  const delay = 5000;
  const [index, setIndex] = useState(0);
  function Slideshow() {
    useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {};
    }, [images, index]);
  }

  Slideshow(); // Call the Slideshow component


  const [show, setShow] = useState(1);

  function handleClick() {
    setShow(0);
    localStorage.setItem('hasWatchedVideo', true);
  }
  // useEffect(() => {
  //   const hasWatchedVideo = localStorage.getItem('hasWatchedVideo');
  //   if (hasWatchedVideo) {
  //     setShow(0);
  //   }
  // }, []);

  return show ?(<div className={utilStyles.landingVideo} onClick={handleClick}>
    <video src={require('../public/images/RFS_LandingPage.mp4')} autoPlay loop muted/>
    <div className={utilStyles.textLandingPage}>
      <Image className={utilStyles.adrWhiteLogo}
          src={"/images/ADRWhite.png"}
          alt="Big logo"
          width={298}
          height={114}
      />
      <div className={utilStyles.titleLandingPage}>
      <Typewriter 
  
        onInit={(typewriter)=> {

        typewriter
        
        .typeString("ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.")
          
        .pauseFor(1000)
        // .deleteAll()
        .start();
        }}
        />
      </div>
    </div>
    <div className={utilStyles.videoCover}>
      
      
    </div>
    
</div>) : (
  <>
        <CustomCursor />  
        <div className={utilStyles.layoutStyle}>
        <Head>
        <title>ADR Labs</title>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
        </Head>

        <Header></Header>
        <div className={utilStyles.headerWhiteBackground}></div>
        <div className={utilStyles.contentStyle}>
          {/* <h3 className={utilStyles.adr_description}>ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.</h3> */}
          <div className={utilStyles.adr_description}>
            <Typewriter
            onInit={(typewriter)=> {

            typewriter
            
            .typeString("ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.")
              
            .pauseFor(1000)
            // .deleteAll()
            .start();
            }}
            />
          </div>
          
          <div className={utilStyles.logoContainer}>
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
          </div>
          <div className={utilStyles.slideshow}>
            <div className={utilStyles.slideshowSlider}
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}  
            >
            {images.map((index) => (
              <Image className={utilStyles.slide}
                src={index}
                alt="ADR pic"
                width={1200}
                height={577}
                />
            ))}
            </div>
          </div>
          {/* <Image className={utilStyles.ImageHome_style}
            src={mainpic}
            alt="ADR pic"
            width={1200}
            height={577}
                /> */}
        </div>
        <LatestWork />
        <SmallAboutUs />
        <LatestPublications />
        <SmallNews />
        <Footer />
        </div>
        
</>
    )
  ;
}

//commenting to check if committing works