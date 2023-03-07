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
            <h3 style={{fontSize:39, fontWeight:400, width:550, marginTop: 100}}>Keynote Lecture International Manufacturing Forum Series 2021</h3>
            <h2 style={{fontSize:30, fontWeight:300}}>03/31/21</h2>
            <div className={utilStyles.imageBlock}>
                <div className={utilStyles.breakerBlack}></div>
                <Image className={utilStyles.newsImage}
                    src={"/images/news10.jpeg"}
                    alt={'newsimage'}
                    width={840}
                    height={472}
                />
                <div className={utilStyles.breakerBlack}></div>
            </div>
            
            <div className={utilStyles.newsBody}>
            <p>
            Our Director, Prof. Arash Adel, has been invited to speak at The International Manufacturing Forum Series 2021. On April 1, 2021, at 8:45am EST (1:45pm WET), he will be giving a keynote lecture titled Robotically Assembled [Timber] Architecture. <br></br><br></br>

            Article Link：<br></br>
            <a href='https://imfs.ipleiria.pt/april/'>https://imfs.ipleiria.pt/april/</a><br></br>
            <a href='https://imfs.ipleiria.pt/register/'>https://imfs.ipleiria.pt/register/</a></p>
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



