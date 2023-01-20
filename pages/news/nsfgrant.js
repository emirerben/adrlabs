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
            <h3 style={{fontSize:39, fontWeight:300, width:550, marginTop: 100}}>$1.58M NSF Grant to Explore Human–Robot Collaborative Construction</h3>
            <h2 style={{fontSize:30, fontWeight:300}}>08/31/21</h2>
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
            <p>
            We are honored to announce that The National Science Foundation (NSF) has awarded a <a href='https://nsf.gov/awardsearch/showAward?AWD_ID=2128623&HistoricalAwards=false'>$1.58 million grant</a> to an interdisciplinary research team, which includes ADR Founder,<a href='https://adeldesignresearch.org/arash-adel'>Arash Adel</a>, to explore robotic partnerships in construction work through the project, “Collaborative Research: Partnering Workers with Interactive Robot Assistants to Usher Transformation in Future Construction Work.” <br></br><br></br>

            Article Link：<br></br>
            <a href='https://taubmancollege.umich.edu/news/2021/08/31/faculty-secure-2m-nsf-grant-humanrobot-collaborative-construction'>https://taubmancollege.umich.edu/news/2021/08/31/faculty-secure-2m-nsf-grant-humanrobot-collaborative-construction</a>.</p>
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



