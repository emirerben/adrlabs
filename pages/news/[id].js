import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';



export default function News({ id }) {

    return (<>
        <Head>

        </Head>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.topContainerNews}>
            <p>{id}</p>
        </div>
       


        
       <Footer></Footer>

    </>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://adrlabs.vercel.app/news.json`);
    const data = await res.json();
    const newsarticle = Object.keys(data)

    const paths = data.map(news => {
        return {
            params: { id: news.id.toString()}
        }
    })
    return{
        paths: paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const {id} = context.params;
    const res = await fetch(`http://adrlabs.vercel.app/news.json/`);

    const data = await res.json();
    const rows = data[id]

    return{
        props: { id }
    }


}



