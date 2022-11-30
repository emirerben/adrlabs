import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';



export default function News({ news }) {

    const router = useRouter()
    const basePath = '/public'
    const { id } = router.query
    return (<>
        <Head>
            <title>{team.id}</title>
        </Head>
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        
        <div className={utilStyles.teamContent}>
            <div className={utilStyles.roleNameHeader}>
                <p>{team.role}</p>
                <h1>{team.name}</h1>
                <div className={utilStyles.yellowHighlightName}></div>
            </div>
            <Image className={utilStyles.personalImage}
                src={"/images/" + team.img}
                alt={team.name}
                width={420}
                height={420}
            />
            
            <div className={utilStyles.containerUserInfo}>
                <div className={utilStyles.breakerTeam}></div>
                <div className={utilStyles.containerLinks}>
                    <p>{team.email}</p>
                    <a href={team.linkedin}>LinkedIn</a><br></br>
                    {team.googlescholar != '' &&
                    <><a href={team.googlescholar}>Google Scholar</a><br></br></>
                    }
                    {team.researchgate != '' &&
                    <><a href={team.researchgate}>Research Gate</a></>
                    }
                </div>
                <div className={utilStyles.textContent}>
                    <p>{team.main}</p>
                    

                    <div className={utilStyles.lightSub}>{team.sub}</div>
                </div>
            </div>
        </div>
       <Footer></Footer>

    </>
    )
}


export const getStaticProps = async () => {
    const res = await fetch(`http://adrlabs.vercel.app/news.json`);
    const data = await res.json();

    return{
        props: {news: data}
    }
}
