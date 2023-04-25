import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';
import CustomCursor from '../../components/Cursor';
import path from 'path';
import fsPromises from 'fs/promises';

export async function getStaticProps({params}) {
    const filePath = path.join(process.cwd(), '/json/news.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const newsData = objectData["news"];
    var onenews = newsData.filter(obj => obj.id.toString() === params.id);
    onenews = onenews[0]
    return {
      props: { onenews }
    }
}

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), '/json/news.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const newsData = objectData["news"];
    const paths =  newsData.map(news => {
        return {
            params: {id: news.id.toString()}
        }
    })
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

  
export default function News({ onenews }) {
    const router = useRouter()
    const basePath = '/public/images'
    // const { id } = router.query
    return (<>
        <CustomCursor />
        <Head>

        </Head>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.topContainerNews}>
            <div className={utilStyles.titleAndDateNews}>
                <h1 style={{marginTop: 0}}>{onenews.title}</h1>
                <p style={{marginTop: 0}}>{onenews.date}</p>
            </div>
            <Image className={utilStyles.researchImages}
                src={"/images/"+onenews.image}
                width={450}
                height={300}
                />
            <div className={utilStyles.newsBody}>
                <div
                    dangerouslySetInnerHTML={{__html: onenews.content}}
                />
                <a style={{width: 'fit-content'}} target="_blank" rel="noopener noreferrer" href={onenews.link}> READ MORE</a>
                {/* <Message data={onenews.content} /> */}
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



