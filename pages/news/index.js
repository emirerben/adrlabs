import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import adrlogo from '../../public/images/ADR-Logo-01.png'
import upperArrow from '../../public/images/ADR-GraphicElementsNoBoundary_y.png'
// import fsPromises from 'fs/promises';
import path from 'path'
import { useState } from 'react';
import CustomCursor from "../../components/Cursor";

// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), '/json/news.json');
//     const jsonData = await fsPromises.readFile(filePath);
//     const objectData = JSON.parse(jsonData);
  
//     return {
//       props: objectData
//     }
//   }


export default function News(props){
    // const news = props.news;
    return(
        <>
        {/*This is the section with the title*/}
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <CustomCursor />
        <div className={utilStyles.TitleSection}>
            <h1>NEWS</h1>
            <div className={utilStyles.NewsContainer}>
            <div className={utilStyles.headerbreakerBlack_top}></div>        
            <div className={utilStyles.OneNews}>
                    <div className={utilStyles.headerbreakerBlack_top}></div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{position:'absolute'}}>2022</p>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>10/31/22</p>
                        <Image className={utilStyles.publicationsImages}
                        
                        src={"/images/news1.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>Robotically Fabricated Structure (RFS) Receives Global Future Design Award</h1>
                            <a href={'/news/globaldesignaward'}>READ MORE</a>
                        </div>
                        
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>10/05/22</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news2.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>RFS Awarded the Honorable Mention for the Loop Design Awards 2022</h1>
                            <a  href={'/news/loopdesignawards'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>08/29/22</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news3.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>RFS Nominated for the LOOP Design Awards 2022 People's Choice</h1>
                            <a  href={'/news/peopleschoice'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>08/11/22</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news4.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>Robotically Fabricated Structure (RFS) Longlisted for Dezeen Awards 2022</h1>
                            <a href={'/news/dezeenawards'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>08/10/22</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news5.jpg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>Adel Announced as Juror for ACSA 2022 Timber Competition</h1>
                            <a  href={'/news/acsa'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>03/30/22</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news6.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>On Air Exhibition</h1>
                            <a  href={'/news/onairexhibition'}>READ MORE</a>
                        </div>
                    </div>
                    </div>
                    <div className={utilStyles.headerbreakerBlack_top}></div>        
                    <div className={utilStyles.OneNews}>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{position:'absolute'}}>2021</p>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>11/03/21</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news7.jpg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>Research Paper Presentation at the ACADIA Conference</h1>
                            <a  href={'/news/acadiaconference'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>10/20/21</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news8.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>Timber Pavilion Opening at the Matthaei Botanical Gardens</h1>
                            <a  href={'/news/timberpavilionopening'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>08/31/21</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news9.jpg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>$1.58M NSF Grant to Explore Human–Robot Collaborative Construction</h1>
                            <a href={'/news/nsfgrant'}>READ MORE</a>
                        </div>
                    </div>
                    <div className={utilStyles.BlockWithoutBreaker}>
                        <p style={{fontSize:20, marginTop:40, paddingLeft: 200}}>03/31/21</p>
                        <Image className={utilStyles.publicationsImages}
                        src={"/images/news10.jpeg"}
                        width={189}
                        height={187}
                        />
                        <div style={{marginTop:20}}className={utilStyles.newsTitlePart}>
                            <h1>Keynote Lecture International Manufacturing Forum Series 2021</h1>
                            <a href={'/news/internationalmanufacturing'}>READ MORE</a>
                        </div>
                    </div>
                    </div>

                
        {/* {news.map(news =>
        <div key={news.id} className={utilStyles.OneNews}>
            <p>{news.date}</p>
            <div className={utilStyles.NewsTitlePart}>
                <h3>{news.title}</h3>
                <Link href={'/news/' + news.id}>
                    <p>READ MORE</p>
                </Link>
            </div>
        </div>
        )} */}
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

// {news.map(news =>
//     <div key={news.id} className={utilStyles.OneNews}>
//         <p>{news.date}</p>
//         <div className={utilStyles.NewsTitlePart}>
//             <h3>{news.title}</h3>
//             <Link href={'/news/' + news.id}>
//                 <p>READ MORE</p>
//             </Link>
//         </div>
//     </div>
//     )}

