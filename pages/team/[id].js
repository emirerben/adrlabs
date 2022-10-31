import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Image from 'next/future/image'



export default function Team({ team }) {

    const router = useRouter()
    const basePath = '/public/images'
    const { id } = router.query
    return (<>
        <Head>
            <title>{team.id}</title>
        </Head>
        <Header></Header>
        <div className={utilStyles.teamContent}>
            <div className={utilStyles.roleNameHeader}>
                <p>{team.role}</p>
                <h1>{team.name}</h1>
            </div>
            <Image className={utilStyles.Aboutus_second_imageStyle}
                src={`${basePath}/${team.img}`}
                alt="Arash Adel"
                width={540}
                height={326}
            />
        </div>

    </>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { team: data },
    }
}