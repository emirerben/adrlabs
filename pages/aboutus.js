import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutAboutUs from "../components/Header";
import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import mainpic from '../public/images/AdR_HomePage_008-bw2.png'
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../public/images/ADR-Logo-01.png'
import LayoutAbout from "../components/LayoutAbout";
import SmallResearchTopics from "../components/SmallResearchTopics";
import mypic from '../public/images/AdR_About_Page_004.png'
import Arash from '../public/images/Arash-Headshot.png'
import upperArrow from '../public/images/ADR-GraphicElementsNoBoundary_y.png'



export default function About(){
    return(
        <>
        <LayoutAbout>
            <div className={utilStyles.yellowTitle}>
                <h1>ARCHITECTURE<br></br>COMPUTATIONAL DESIGN<br></br>ROBOTIC CONSTRUCTION</h1>
                <h3>ABOUT US</h3>
            </div>
        </LayoutAbout>
        <div className={utilStyles.firstWhiteBlock}>
                <Image className={utilStyles.Aboutus_first_imageStyle}
                src={mypic}
                alt="Logo"
                width={720}
                height={472}
                />
                <p>Adel Design Research (ADR) is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction. ADR was launched in January 2021 by Dr. Arash Adel who specializes in the intersection of computational design and architectural technology. He strives to advance robotic assembly and manufacturing of nonstandard timber buildings. We are located at the University of Michigan within Taubman Collage’s Fabrication Laboratory (FabLab).</p>
        </div>
        <div className={utilStyles.teamBlock}>
            <div className={utilStyles.headerbreakerBlack_top}></div>
            <h3>OUR TEAM</h3>
            <div className={utilStyles.teamPictureContainer}>
                <div className={utilStyles.teamImageSquare}>
                    <Image className={utilStyles.teamImage}
                    src={Arash}
                    width={360}
                    height={360}

                    />
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Arash Adel</h3>
                        <p>Director</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
            <div className={utilStyles.teamPictureContainer}>
                <div className={utilStyles.teamImageSquare}>
                    <Image className={utilStyles.teamImage}
                    src={Arash}
                    width={360}
                    height={360}

                    />
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Arash Adel</h3>
                        <p>Director</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
            <div className={utilStyles.teamPictureContainer}>
                <div className={utilStyles.teamImageSquare}>
                    <Image className={utilStyles.teamImage}
                    src={Arash}
                    width={360}
                    height={360}

                    />
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Arash Adel</h3>
                        <p>Director</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
            <div className={utilStyles.teamPictureContainer}>
                <div className={utilStyles.teamImageSquare}>
                    <Image className={utilStyles.teamImage}
                    src={Arash}
                    width={360}
                    height={360}

                    />
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Arash Adel</h3>
                        <p>Director</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
            <div className={utilStyles.teamPictureContainer}>
                <div className={utilStyles.teamImageSquare}>
                    <Image className={utilStyles.teamImage}
                    src={Arash}
                    width={360}
                    height={360}

                    />
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Arash Adel</h3>
                        <p>Director</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
            <div className={utilStyles.teamPictureContainer}>
                <div className={utilStyles.teamImageSquare}>
                    <Image className={utilStyles.teamImage}
                    src={Arash}
                    width={360}
                    height={360}

                    />
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Arash Adel</h3>
                        <p>Director</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
        </div>
        <SmallResearchTopics></SmallResearchTopics>
        <div className={utilStyles.secondWhiteBlock}>
                <Image className={utilStyles.Aboutus_second_imageStyle}
                src={mypic}
                alt="Logo"
                width={540}
                height={326}
                />
                <h3>INTERDISCIPLINARY COLLABORATIONS</h3>
                <p>ADR has a strong dedication to interdisciplinary research and connecting architecture, engineering and fabrication through new and evolving technologies. We seek to connect with collaborators across a variety of academic disciplines. </p>
        </div>
        <div className={utilStyles.secondWhiteBlock}>
                <Image className={utilStyles.Aboutus_second_imageStyle}
                src={mypic}
                alt="Logo"
                width={540}
                height={326}
                />
                <h3>EDUCATION</h3>
                <p>ADR’s robotic construction research and other core topics are integrated into the courses of the Digital and Material Technology Master of Science students at the University of Michigan. The program included a computational Design and Systems Engagement course taught by Dr. Arash Adel.</p>
        </div>
        <Footer></Footer>
        </>
        
    );
}