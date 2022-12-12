import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import adrlogo from '../../public/images/ADR-Logo-01.png'
import upperArrow from '../../public/images/ADR-GraphicElementsNoBoundary_y.png'




export default function News({news}){
    return(
        <>
        {/*This is the section with the title*/}
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.TitleSection}>
            <h1>NEWS</h1>
            <div className={utilStyles.NewsContainer}>
                {/* {news.map(news => (
                    <div key={news.id} className={utilStyles.OneNews}>
                         <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>{news.date}</p>
                        <div className={utilStyles.NewsTitlePart}>
                            <h3>{news.title}</h3>
                            <Link href={'/news/' + news.id}>
                                <p>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                    </div>
                ))} */}
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>10/31/22</p>
                        <div className={utilStyles.NewsTitlePart}>
                            <h3>Robotically Fabricated Structure (RFS) Receives Global Future Design Award</h3>
                            <Link href={'/news/globaldesignaward'}>
                                <p>READ MORE</p>
                            </Link>
                        </div>
                    </div>   
                </div>
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>10/05/22</p>
                        <div className={utilStyles.NewsTitlePart}>
                            <h3>Robotically Fabricated Structure (RFS) Awarded the Honorable Mention for the Loop Design Awards 2022</h3>
                            <Link href={'/news/loopdesignawards'}>
                                <p>READ MORE</p>
                            </Link>
                        </div>
                    </div>   
                </div>
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>08/29/22</p>
                        <div className={utilStyles.NewsTitlePart}>
                            <h3>Robotically Fabricated Structure (RFS) Nominated for the LOOP Design Awards 2022 People's Choice</h3>
                            <Link href={'/news/peopleschoice'}>
                                <p>READ MORE</p>
                            </Link>
                        </div>
                    </div>   
                </div>
                <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p>8/11/22</p>
                        <div className={utilStyles.NewsTitlePart}>
                            <h3>Robotically Fabricated Structure (RFS) Longlisted for Dezeen Awards 2022</h3>
                            <Link href={'/news/dezeenawards'}>
                                <p>READ MORE</p>
                            </Link>
                        </div>
                    </div>   
                </div>
            </div>
        </div>

        <Footer></Footer>
        </>
        
    );
}

// export const getStaticProps = async () => {
//     const res = await fetch(`http://adrlabs.vercel.app/news.json`);
//     const data = await res.json();

//     return{
//         props: {news: data}
//     }
// }