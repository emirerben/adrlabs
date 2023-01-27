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
            <h1>TEACHING</h1>
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
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 825 – Virtual Engagement</h1>
                            <p>This seminar covers topics related to digital design practices that cover a range of topics that include generative design, algorithmic design, scripting, parametric modeling, BIM, simulation, and analysis. </p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 825 – Doctoral Area Seminar - BT System Engagement</h1>
                            <p>This technique-based course covers topics related to technology integration within high performance material system. Specific areas of study will include smart materials, integration with sensing and actuation technologies, interactive systems and environmental response.</p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 801 – Doctoral Colloquium</h1>
                            <p>This course introduces students to research protocols in doctoral study. Faculty and advanced doctoral students present work in progress, with an emphasis on professionalization, ethics, and the conduct of research.</p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div className={utilStyles.blockLineContainer}>
                            <div className={utilStyles.headerbreakerRelative}></div>
                        </div>
                        

                        <h3>Master level</h3>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 703 – Virtual Engagement</h1>
                            <p>This seminar covers topics related to digital design practices that cover a range of topics that include generative design, algorithmic design, scripting, parametric modeling, BIM, simulation, and analysis. </p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 702 – Robotic Engagement</h1>
                            <p>This course covers topics related to hardware, fabrication, and materials as related to advancements in digital fabrication. Beyond teaching the mechanics of specific machinery, the course will develop a framework for understanding exemplary projects in the field with an understanding of different design methodologies and their relations to project development and fabrication.</p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 739 – MS Capstone</h1>
                            <p>This course is the culmination of the academic course of study. Participants are expected to apply new skills and knowledge towards advancing the discipline through their projects. Intensive and research-based, participants will be required to document their research and project-based work in partial fulfillment of their degree.</p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 708 – Systems Engagement</h1>
                            <p>This technique-based course covers topics related to technology integration within high performance material system. Specific areas of study will include smart materials, integration with sensing and actuation technologies, interactive systems and environmental response. </p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 709 – Computational Design</h1>
                            <p>This course discusses integrative computational design methods coupled with robotic manufacturing techniques in architecture. These methods enable both designing highly differentiated structures and controlling nonstandard robotic manufacturing routines to assemble them. </p>
                            <p>Professor: Dr. Arash Adel</p>
                        </div>

                        <div className={utilStyles.blockLineContainer}>
                            <div className={utilStyles.headerbreakerRelative}></div>
                        </div>
                        <h3>Undergraduate level</h3>
                     
                        <div style={{marginTop:100, marginLeft:400}} className={utilStyles.PublicationsTitlePart}>
                            <h1>ARCH 324 – Structures II</h1>
                            <p>This course covers the basic principles of elastic behavior for different materials such as wood, steel, concrete, and composite materials and compares the properties and applications of materials generally. It investigates cross sectional stress and strain behavior in flexure and in shear, and torsion as well as the stability of beams and columns. </p>
                            <p>Professor: Dr. Peter von Bülow, Dr. Salma Mozaffari</p>
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
