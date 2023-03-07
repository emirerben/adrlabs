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
        <CustomCursor />
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.topContainerNews}>
            <h3 style={{fontSize:39, fontWeight:400, width:550, marginTop: 100}}>Adel Announced as Juror for ACSA 2022 Timber Competition</h3>
            <h2 style={{fontSize:30, fontWeight:300}}>10/31/22</h2>
            <div className={utilStyles.imageBlock}>
                <div className={utilStyles.breakerBlack}></div>
                <Image className={utilStyles.newsImage}
                    src={"/images/news5.jpg"}
                    alt={'newsimage'}
                    width={840}
                    height={472}
                />
                <div className={utilStyles.breakerBlack}></div>
            </div>
            
            <div className={utilStyles.newsBody}>
            <p>Our director, Dr. Arash Adel, has been selected as one of five jurors for the 2022 Timber Competition hosted by the ACSA.<br></br><br></br>
                The competition, titled TIMBER IN THE CITY 4: Urban Habitats Competition, is the fourth competition of the series, and according to the ACSA website, “focuses this year on the interrelationship between housing, urban transit infrastructure, equitable living, and climate change. The program is intended to engage students, working individually or in teams, to imagine the transformation of our existing cities through sustainable buildings from renewable resources, offering expedient affordable construction, innovating with new and traditional wooden materials, and designing healthy living and working environments.”<br></br><br></br>
                Dr. Adel will be contributing his extensive knowledge of timber construction to the jury panel, having worked on numerous projects coupling novel computational design methods with robotic assembly techniques for manufacturing nonstandard timber structures and buildings. These projects include the widely-published DFAB HOUSE located in Dubendorf, Switzerland, and more recently, the Robotically Fabricated Structure (RFS) timber pavilion sited at the Matthaei Botanical Gardens in Ann Arbor, Michigan, USA.<br></br><br></br>
                
                ACSA 2022 Timber Competition Link：<a href='https://www.acsa-arch.org/competitions/2022-timber-competition/'>https://www.acsa-arch.org/competitions/2022-timber-competition/</a></p>
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



