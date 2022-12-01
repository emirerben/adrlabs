import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
    const res = await fetch(`http://adrlabs.vercel.app/news`);
    const data = await res.json();

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
    const id = context.params.id;
    const res = await fetch(`http://adrlabs.vercel.app/news/` + id);
    console.log(id);
    const data = await res.json();

    return{
        props: { news: data }
    }


}

export default function News({ news }) {

    return (<>
        <Head>

        </Head>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <p>{news.id}</p>
        
       <Footer></Footer>

    </>
    )
}



