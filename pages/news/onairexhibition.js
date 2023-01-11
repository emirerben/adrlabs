import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';



export default function News({ news }) {
    const router = useRouter()
    const basePath = '/public/images'
    const { id } = router.query
    return (<>
        <Head>

        </Head>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.topContainerNews}>
            <h3 style={{fontSize:39, fontWeight:300, width:550, marginTop: 100}}>On Air Exhibition</h3>
            <h2 style={{fontSize:30, fontWeight:300, marginTop:200}}>03/30/22</h2>
            <div className={utilStyles.imageBlock}>
                <div className={utilStyles.breakerBlack}></div>
                <Image className={utilStyles.newsImage}
                    src={"/images/" + 'newspic.png'}
                    alt={'newsimage'}
                    width={840}
                    height={472}
                />
                <div className={utilStyles.breakerBlack}></div>
            </div>
            
            <div className={utilStyles.newsBody}>
            <p>Robotically Fabricated Structure (RFS) 2.0 is on display at the On Air exhibition in Ann Arbor, Michigan. RFS 2.0 is an extension of the ongoing research conducted by ADR Laboratory on robotic timber construction and human-robot collaborative construction processes. RFS 1.0 was a timber pavilion, sited on the Matthaei Botanical Gardens in Ann Arbor, serving as an open-air event, gathering, and exhibition space and offering opportunities for holding music, dance, and other performances as well as temporary exhibitions and open-air classrooms. RFS 2.0 builds upon that project and advances the research by developing a robotically fabricated construction system that could work as multi-story structures to facilitate sustainable housing solutions. <br></br><br></br>
                Article Link：<a href='https://taubmancollege.umich.edu/events/2022/03/25/on-air-faculty-work-2020-2022'>https://taubmancollege.umich.edu/events/2022/03/25/on-air-faculty-work-2020-2022</a></p>
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



