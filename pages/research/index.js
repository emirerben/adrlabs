import UnderConstruction from "../../components/UnderConstruction";
import CustomCursor from "../../components/Cursor";
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
import SmallResearchTopics from "../../components/SmallAwards";
import SmallNews from "../../components/SmallNews";
export default function Research(){
    return(
        <>
        <CustomCursor />
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.TitleSection}>
            <h1>RESEARCH</h1>
            <p style={{fontSize: 30, width: 777, fontWeight: 300, height: 300}}>Ehendiaturi auda cor as et ducipie nduntibusda idio. Itatquatur aut ipitata poreper ionsequis est ut omnimus poribea sumenis molorrovid ellacii simaxim rae volo tempos maximil in non enim nectiorest.</p>
            <div className={utilStyles.NewsContainer}>
                {/* 2021 */}
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div  className={utilStyles.BlockWithoutBreaker}>

                        <Image className={utilStyles.researchImages}
                        
                        src={"/images/ParallelPaths.jpg"}
                        width={540}
                        height={228}
                        />
                        <div style={{height: 228, marginTop:35, marginLeft:180}}className={utilStyles.PublicationsTitlePart}>

                            <h1 style={{lineHeight:1.1, fontWeight:400, fontSize:30, width: 455}}>Cocoon: 3D Printed Clay Formwork for Concrete Casting</h1>
                            <p style={{letterSpacing:0, fontWeight:300, fontSize:16, marginBottom:10, width: 405}}>Realignments: Toward Critical Computation: Proceedings Catalog of the 41th Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA)</p>
                            <Link href={'https://www.tandfonline.com/doi/full/10.1080/24751448.2021.1863668'}>
                                READ MORE
                            </Link>
                            

                        </div>
                        
                    </div>
                    
                    <div className={utilStyles.headerbreakerBlack_top} style={{marginTop: -5}}></div>
                    
                    <div className={utilStyles.BlockWithoutBreaker}>

                    <Image className={utilStyles.researchImages}
                        
                        src={"/images/ParallelPaths.jpg"}
                        width={540}
                        height={228}
                        />
                        <div style={{height: 228, marginTop:35, marginLeft:180}}className={utilStyles.PublicationsTitlePart}>

                            <h1 style={{lineHeight:1.1, fontWeight:400, fontSize:30, width: 455}}>Cocoon: 3D Printed Clay Formwork for Concrete Casting</h1>
                            <p style={{letterSpacing:0, fontWeight:300, fontSize:16, marginBottom:10, width: 405}}>Realignments: Toward Critical Computation: Proceedings Catalog of the 41th Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA)</p>
                            <Link href={'https://www.tandfonline.com/doi/full/10.1080/24751448.2021.1863668'}>
                                READ MORE
                            </Link>
                            

                        </div>
                    </div>
                    <div className={utilStyles.headerbreakerBlack_top} style={{marginTop: -5}}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                    <Image className={utilStyles.researchImages}
                        
                        src={"/images/ParallelPaths.jpg"}
                        width={540}
                        height={228}
                        />
                        <div style={{height: 228, marginTop:35, marginLeft:180}}className={utilStyles.PublicationsTitlePart}>

                            <h1 style={{lineHeight:1.1, fontWeight:400, fontSize:30, width: 455}}>Cocoon: 3D Printed Clay Formwork for Concrete Casting</h1>
                            <p style={{letterSpacing:0, fontWeight:300, fontSize:16, marginBottom:10, width: 405}}>Realignments: Toward Critical Computation: Proceedings Catalog of the 41th Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA)</p>
                            <Link href={'https://www.tandfonline.com/doi/full/10.1080/24751448.2021.1863668'}>
                                READ MORE
                            </Link>
                        </div>
                    </div>   
                    <div className={utilStyles.headerbreakerBlack_top} style={{marginTop: -5}}></div>
                </div>
            </div>
        </div>
        <div style={{paddingLeft: 40, paddingTop: 90, display: 'flex', gap:200, paddingBottom: 90}}>
            <p style={{fontSize: 30}}>Research Topics</p>
            <p style={{width: 777, fontSize: 30}}>Ehendiaturi auda cor as et ducipie nduntibusda idio. Itatquatur aut ipitata poreper ionsequis est ut omnimus poribea sumenis molorrovid ellacii simaxim rae volo tempos maximil in non enim nectiorest.</p>
        </div>
        <SmallResearchTopics></SmallResearchTopics>
        <SmallNews></SmallNews>
        <Footer></Footer>
        </>
        
    );
}
