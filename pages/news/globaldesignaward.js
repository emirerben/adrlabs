import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';
import CustomCursor from '../../components/Cursor';


export default function News({ news }) {
    const router = useRouter()
    const basePath = '/public/images'
    const { id } = router.query
    return (<>
        <Head>

        </Head>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <CustomCursor />
        <div className={utilStyles.topContainerNews}>
            <h3 style={{fontSize:39, fontWeight:400, width:550, marginTop: 100}}>Robotically Fabricated Structure (RFS) Receives Global Future Design Award</h3>
            <h2 style={{fontSize:30, fontWeight:300}}>10/31/22</h2>
            <div className={utilStyles.imageBlock}>
                <div className={utilStyles.breakerBlack}></div>
                <Image className={utilStyles.newsImage}
                    src={"/images/news1.jpeg"}
                    alt={'newsimage'}
                    width={840}
                    height={472}
                />
                <div className={utilStyles.breakerBlack}></div>
            </div>
            
            <div className={utilStyles.newsBody}>
            <p>We are excited to announce that ADR Laboratory has received new global recognition for our project Robotically Fabricated Structure (RFS), now a Gold Winner for the 2022 Global Future Design Awards. RFS was designed and fabricated through state-of-the-art human-robot collaborative construction, forming a novel approach to reconsidering issues of material use, labor, and the environment to create intelligent and resourceful architecture with striking expressive qualities.<br></br><br></br>
                The Global Future Design Awards is an annual awards program organized by Architecture Press Release, a leading body of architecture press in Global. This award recognizes outstanding ideas that redefine design in architecture through the implementation of novel technologies, materials, programs, aesthetics, and spatial organization.<br></br><br></br>
                Visit the dedicated page for RFS on the Awards website <a href='http://www.architecturepressrelease.com/gold-winner-robotically-fabricated-structure-rfs-adr-laboratory/'>here</a></p>
            </div>
        </div>
        
       

        
       <Footer></Footer>

    </>
    )
}

// export async function getServerSideProps({ params }) {
//     // const res = await fetch(`http://adrlabs.vercel.app/${params.id}.json`);
//     // const data = await res.json(JSON.stringify(res))

//     var res = await axios.get(
//         `http://adrlabs.vercel.app/${params.id}.json`,
//         {
//           headers: {
//             Accept: 'application/json, text/plain, */*',
//             'User-Agent': '*',
//           },
//         }
//       );

//     return {
//         props: { news: data },
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`http://adrlabs.vercel.app/news.json`);
//     const data = await res.json();

//     const paths = data.map(news => {
//         return {
//             params: { id: news.id.toString()}
//         }
//     })
//     return{
//         paths: paths,
//         fallback: false
//     }
// }


// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`http://adrlabs.vercel.app/news/${id}.json`);

//     const data = await res.json();

//     return{
//         props: { news: data }
//     }


// }



