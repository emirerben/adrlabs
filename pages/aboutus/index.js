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
import CustomCursor from "../../components/Cursor";


export default function About(){
    return(
        <>
        <CustomCursor />
        <LayoutAbout>
            {/*trial */}
            {/*This is the yellow section with the title*/}
            <div className={utilStyles.yellowTitle}>
                <h1>ARCHITECTURE<br></br>COMPUTATIONAL DESIGN<br></br>ROBOTIC CONSTRUCTION</h1>
                <h3>ABOUT US</h3>
            </div>
        </LayoutAbout>
        
        
        <div className={utilStyles.firstWhiteBlock}>
            {/*This is the white section with the text and image*/}
                <Image className={utilStyles.Aboutus_first_imageStyle}
                src={"/images/aboutus1.jpeg"}
                alt="Logo"
                width={720}
                height={472}
                />
                <p>Adel Design Research (ADR) is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction. ADR was launched in January 2021 by Dr. Arash Adel who specializes in the intersection of computational design and architectural technology. He strives to advance robotic assembly and manufacturing of nonstandard timber buildings. We are located at the University of Michigan within Taubman Collage’s Fabrication Laboratory (FabLab).</p>
        </div>
        <div className={utilStyles.teamBlock}>
            <div className={utilStyles.headerbreakerBlack_top}></div>
            <h3>OUR TEAM</h3>
            {/*The following container represents the picture for a team member*/}
            <div className={utilStyles.teamPictureContainer}>
                {/*The following represents the image for a team member*/}
                <div className={utilStyles.teamImageSquare}>
                    {/*The href is the file which should lead to once clicked*/}
                    <Link href='/aboutus/arashadel'><Image className={utilStyles.teamImage}
                    src={"/images/Arash.jpg"}
                    width={360}
                    height={360}

                    />
                    </Link>
                    {/*The following represents the block that appears once the users hovers on the image*/}
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
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/salmamozaffari'><Image className={utilStyles.teamImage}
                        src={"/images/Salma.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Salma Mozaffari</h3>
                        <p>Postdoctoral Researcher</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/danielruan'><Image className={utilStyles.teamImage}
                        src={"/images/Daniel.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Daniel Ruan</h3>
                        <p>Ph.D. Student / Research Assistant</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/alirezafazel'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Alireza.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Alireza Fazel</h3>
                        <p>Ph.D. Student / Research Assistant</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/yunyanli'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Yunyan.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Yunyan Li</h3>
                        <p>Research Assistant</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/abdallahkamhawi'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Abdallah.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Abdallah Kamhawi</h3>
                        <p>Research Assistant</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/mohsenvatandoost'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Mohsen.jpg"}
                        width={360}
                        height={360}
                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Mohsen Vatandoost</h3>
                        <p>Research Assistant</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/xiujinliu'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Xiujin.jpg"}
                        width={360}
                        height={360}
                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Xiujin Liu</h3>
                        <p>Student Assistant</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/tharaneshvaradharajan'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Tharanesh.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Tharanesh Varadharajan</h3>
                        <p>DMT Fellow</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
                <div className={utilStyles.teamImageSquare}>
                    <Link href='/aboutus/rahakamravafar'>
                        <Image className={utilStyles.teamImage}
                        src={"/images/Raha.jpg"}
                        width={360}
                        height={360}

                        />
                    </Link>
                    <div className={utilStyles.teamInfoBlock}>
                        <h3>Raha Kamravafar</h3>
                        <p>DMT Fellow</p>
                        <Image className={utilStyles.upperArrow}
                            src={upperArrow}
                            width={30}
                            height={30}
                            />
                    </div>
                </div>
            </div>
        </div>
        <SmallAwards></SmallAwards>
        <div className={utilStyles.secondWhiteBlock}>
                <h3>INTERDISCIPLINARY COLLABORATIONS</h3>
                <div>
                    <div  style={{display: 'flex', gap:'20%', alignItems: 'center', flexWrap: 'wrap', paddingBlockEnd: 40}}>
                        <Image className={utilStyles.Aboutus_second_imageStyle}
                        src={"/images/aboutus2.jpeg"}
                        alt="Logo"
                        width={540}
                        height={326}
                        />
                        <p>ADR has a strong dedication to interdisciplinary research and connecting architecture, engineering and fabrication through new and evolving technologies. We seek to connect with collaborators across a variety of academic disciplines. </p>
                    </div>
                    <div className={utilStyles.textArrow}>
                        <p>CONNECT</p>
                        <Image className={utilStyles.smallUpperArrow}
                            src={mainarrow}
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
        </div>
        <div className={utilStyles.secondWhiteBlock}>
                <h3>TEACHING</h3>
                <div>
                    <div  style={{display: 'flex', gap:'20%', alignItems: 'center', flexWrap: 'wrap', paddingBlockEnd: 40}}>
                        <Image className={utilStyles.Aboutus_second_imageStyle}
                        src={"/images/aboutus3.jpg"}
                        alt="Logo"
                        width={540}
                        height={326}
                        />
                        <p>ADR’s robotic construction research and other core topics are integrated into the courses of the Ph.D. in Architecture and the Digital and Material Technology Master of Science programs at the University of Michigan. </p>
                    </div>
                    <div className={utilStyles.textArrow}>
                        <p><Link href="/teachings">LEARN MORE</Link></p>
                        <Image className={utilStyles.smallUpperArrow}
                            src={mainarrow}
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
        </div>
        <Footer></Footer>
        </>
        
    );
}

