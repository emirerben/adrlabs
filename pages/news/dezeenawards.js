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
            <h3 style={{fontSize:39, fontWeight:400, width:550, marginTop: 100}}>Robotically Fabricated Structure (RFS) Longlisted for Dezeen Awards 2022</h3>
            <h2 style={{fontSize:30, fontWeight:300}}>08/11/22</h2>
            <div className={utilStyles.imageBlock}>
                <div className={utilStyles.breakerBlack}></div>
                <Image className={utilStyles.newsImage}
                    src={"/images/news4.jpeg"}
                    alt={'newsimage'}
                    width={840}
                    height={472}
                />
                <div className={utilStyles.breakerBlack}></div>
            </div>
            
            <div className={utilStyles.newsBody}>
            <p>
            Our project, Robotically Fabricated Structure (RFS), is one of twenty-nine projects longlisted for the Architecture Small Building category in this year’s Dezeen Awards. <br></br><br></br>
Dezeen Awards is an annual awards program organized by the influential architecture and design website Dezeen. These awards serve to highlight international design excellence with projects that benefit users and the environment in addition to being beautiful and innovative, with over 5,400 entries submitted to Dezeen Awards 2022 from 90 countries.<br></br><br></br>
Article Link：<a href='https://www.dezeen.com/awards/2022/longlists/robotically-fabricated-structure/'>https://www.dezeen.com/awards/2022/longlists/robotically-fabricated-structure/ </a>

            </p>
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



