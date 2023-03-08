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
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.TitleSection}>
            <h1>PUBLICATIONS</h1>
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
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>2021</p>
                        <Image className={utilStyles.publicationsImages}
                        
                        src={"/images/ParallelPaths.jpg"}
                        width={250}
                        height={250}
                        />
                        <div style={{marginTop:20}}className={utilStyles.PublicationsTitlePart}>
                            <p>K. Graser, A. Adel, M. Baur, A. Thoma and D. Sanz Pont</p>
                            <h1>Parallel Paths of Inquiry: Detailing for DFAB HOUSE</h1>
                            <p style={{marginBottom:10}}>Technology | Architecture + Design, vol. 5, no. 1, pp. 38-43, 2021</p>
                            <Link href={'https://www.tandfonline.com/doi/full/10.1080/24751448.2021.1863668'}>
                                READ MORE
                            </Link>
                            

                        </div>
                        
                    </div>
                    <div className={utilStyles.headerbreakerBlack_top_short}></div>
                    
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p className={utilStyles.whitetext}>2021</p>
                        <Image className={utilStyles.publicationsImages}
                            src={"/images/RoboticTimber.jpg"}
                            width={250}
                            height={250}
                            />
                        <div style={{marginBottom:40}} className={utilStyles.PublicationsTitlePart}>
                            <p>A. Adel, E. Augustynowicz and T. Wehrle</p>
                            <h1>Robotic Timber Construction: A Case Study Structure</h1>
                            <p style={{marginBottom:10}}>Realignments: Toward Critical Computation: Proceedings Catalog of the 41st Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA), 2021</p>
                            <Link href={'https://drive.google.com/file/d/1Q4hzXtLFFQp-vT_kAObbLKv1_cykyM-9/view'}>
                                READ MORE
                            </Link>
                        </div>
                    </div>   
                    <div className={utilStyles.headerbreakerBlack_top_short}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p className={utilStyles.whitetext}>2021</p>
                        <Image className={utilStyles.publicationsImages}
                            src={"/images/Cocoon_BW.jpg"}
                            width={250}
                            height={250}
                        />
                        <div className={utilStyles.PublicationsTitlePart}>
                            <p>M. Bruce, G. Clune, R. Xie, S. Mozaffari and A. Adel</p>
                            <h1>Cocoon: 3D Printed Clay Formwork for Concrete Casting</h1>
                            <p style={{marginBottom:10}}> Realignments: Toward Critical Computation: Proceedings Catalog of the 41st Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA), 2021</p>
                            <Link href={'https://www.researchgate.net/publication/364639955_Cocoon_3D_Printed_Clay_Formwork_for_Concrete_Casting'}>
                                READ MORE
                            </Link>
                        </div>
                    </div>   
                </div>
                {/* 2020 */}
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>2020</p>
                        <Image className={utilStyles.publicationsImages}
                            src={"/images/ComputationalDesign.jpg"}
                            width={250}
                            height={250}
                        />
                        <div style={{marginTop:20, marginBottom:40}} className={utilStyles.PublicationsTitlePart}>
                            <p>A. Adel</p>
                            <h1>Computational Design for Cooperative Robotic Assembly of Nonstandard Timber Frame Buildings</h1>
                            <p style={{marginBottom:10}}>Ph.D. Thesis, ETH, Zurich, 2020</p>
                            <div className={utilStyles.linksPublications}>
                                <Link href={'https://www.researchgate.net/publication/347781191_Computational_Design_for_Cooperative_Robotic_Assembly_of_Nonstandard_Timber_Frame_Buildings'}>
                                    ResearchGate
                                </Link>
                                <Link href={'https://drive.google.com/file/d/1oGpp2UhofxlNQ-S5PfUj4ykghAz3t7B0/view'}>
                                    PDF
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={utilStyles.headerbreakerBlack_top_short}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p className={utilStyles.whitetext}>2020</p>
                        <Image className={utilStyles.publicationsImages}
                            src={"/images/Engrained.png"}
                            width={250}
                            height={250}
                        />
                        <div className={utilStyles.PublicationsTitlePart}>
                            <p>R. Craney and A. Adel</p>
                            <h1>Engrained Performance: Performance-Driven Computational Design of a Robotically Assembled Shingle Facade System</h1>
                            <p style={{marginBottom:10}}>Distributed Proximities: Proceedings Catalog of the 40th Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA), 2020</p>
                            <div className={utilStyles.linksPublications}>
                                <Link href={'https://www.researchgate.net/publication/353890445_Engrained_Performance_Performance-Driven_Computational_Design_of_a_Robotically_Assembled_Shingle_Facade_System'}>
                                    ResearchGate
                                </Link>
                                <Link href={'https://drive.google.com/file/d/1xtgYzawF9iQamZR2UH5gPD_fD3l0Ku3f/view'}>
                                    PDF
                                </Link>
                            </div>
                            
                        </div>
                    </div>      
                </div>
                {/* 2018 */}
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>2018</p>
                        <Image className={utilStyles.publicationsImages}
                            src={"/images/RoboticFabrication.png"}
                            width={250}
                            height={250}
                        />
                        <div style={{marginTop:20}} className={utilStyles.PublicationsTitlePart}>
                            <p>A. Thoma, A. Adel, M. Helmreich, T. Wehrle, F. Gramazio and M. Kohler</p>
                            <h1>Robotic Fabrication in Architecture, Art and Design, Zurich, 2018</h1>
                            <p style={{marginBottom:10}}>Ph.D. Thesis, ETH, Zurich, 2020</p>
                            <div className={utilStyles.linksPublications}>
                                <Link href={'https://www.researchgate.net/publication/327234391_Robotic_Fabrication_of_Bespoke_Timber_Frame_Modules'}>
                                    ResearchGate
                                </Link>
                                <Link href={'https://drive.google.com/file/d/1RJWz0PeKv-V2OsXkf2fREFxP_aH25vj6/view'}>
                                    PDF
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    <div className={utilStyles.headerbreakerBlack_top_short}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p className={utilStyles.whitetext}>2018</p>
                        <Image className={utilStyles.publicationsImages}
                            src={"/images/DesignofRobotically.jpg"}
                            width={250}
                            height={250}
                        />
                        <div className={utilStyles.PublicationsTitlePart}>
                            <p>A. Adel, A. Thoma, M. Helmreich, F. Gramazio and M. Kohler</p>
                            <h1>Design of Robotically Fabricated Timber Frame Structures</h1>
                            <p style={{marginBottom:10}}>Recalibration: On Imprecision and Infidelity: Proceedings Catalog of the 38th Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA), Mexico City, 2018</p>
                            <div className={utilStyles.linksPublications}>
                                <Link href={'https://www.researchgate.net/publication/344115105_Design_of_Robotically_Fabricated_Timber_Frame_Structures'}>
                                    ResearchGate
                                </Link>
                                <Link href={'https://drive.google.com/file/d/12BQo0eU6QSscZ0wHCe2grtEOaeLde5A0/view'}>
                                    PDF
                                </Link>
                            </div>
                            
                        </div>
                    </div>      
                </div>
            </div>
        </div>

        <Footer></Footer>
        </>
        
    );
}
