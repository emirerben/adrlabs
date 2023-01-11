import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LayoutAboutUs from "../../components/Header";
import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import mainpic from '../../public/images/AdR_HomePage_008-bw2.png'
import mainarrow from '../../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../../public/images/ADR-Logo-01.png'
import LayoutAbout from "../../components/LayoutAbout";
import SmallAwards from "../../components/SmallAwards";
import mypic from '../../public/images/AdR_About_Page_004.png'
import Arash from '../../public/images/Arash.jpg'
import upperArrow from '../../public/images/ADR-GraphicElementsNoBoundary_y.png'



export default function Teachings(){
    return(
        <>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>

        <div className={utilStyles.TitleSection}>
            <h1>TEACHINGS</h1>
            <div className={utilStyles.NewsContainer}>
                {/* {news.map(news => (
                    <div key={news.id} className={utilStyles.OneNews}>
                         <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>{news.date}</p>
                        <div className={utilStyles.PublicationsTitlePart}>
                            <h1>{news.title}</h1>
                            <Link href={'/news/' + news.id}>
                                <p>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                    </div>
                ))} */}
                {/* 2021 */}
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.TeachingBlock}>
                        <h3>Doctoral level</h3>
                     
                        <div style={{marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 825 – Robotic Fabrication</h1>
                            <p>Robotic Fabrication discusses the application of industrial robotic arms in architecture and construction. In particular, this course focuses on the coupling of custom computational design methods with nonstandard robotic fabrication and assembly routines. </p>
                            <p>Tutor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 825 – Virtual Engagement</h1>
                            <p>This seminar covers topics related to digital design practices that cover a range of topics that include generative design, algorithmic design, scripting, parametric modeling, BIM, simulation, and analysis. </p>
                            <p>Tutor: Dr. Arash Adel</p>
                        </div>
                        
                        
                        
                    </div>
                    {/* <div className={utilStyles.headerbreakerBlack_top_short}></div> */}
                    
                </div>
            </div>
        </div>

        <Footer></Footer>
        </>
        
    );
}
