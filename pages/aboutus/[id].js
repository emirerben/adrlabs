import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/future/image';
import Link from 'next/link';
import CustomCursor from '../../components/Cursor';




export default function Team({ team }) {

    const router = useRouter()
    const basePath = '/public/images'
    const { id } = router.query
    return (<>
        <CustomCursor />
        <Head>
            <title>{team.id}</title>
        </Head>
        
        <Header></Header>
        <div className={utilStyles.headerWhiteBackground}></div>
        
        <div className={utilStyles.teamContent}>
                <div className={utilStyles.roleNameHeader}>
                    <p>{team.role}</p>
                    <h1>{team.name}</h1>
                    <div className={utilStyles.yellowHighlightName}></div>
                </div>
                <div className={utilStyles.imageAndPersonalInfo}>
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
                            <a target="_blank" rel="noopener noreferrer" href={team.linkedin}>LinkedIn</a><br></br>
                            {team.googlescholar != '' ? <><a target="_blank" rel="noopener noreferrer" href={team.googlescholar}>Google Scholar</a><br></br></> : <p style={{marginTop:0}}>Google Scholar</p>}
                            {team.researchgate != '' ?
                            <><a target="_blank" rel="noopener noreferrer" href={team.researchgate}>Research Gate</a></> : <p style={{marginTop:0}}>Research Gate</p>
                            }
                            {/* the following is if we want to remove the text if no link exists */}
                            {/* {team.googlescholar != '' &&
                            <><a href={team.googlescholar}>Google Scholar</a><br></br></>
                            }
                            {team.researchgate != '' &&
                            <><a href={team.researchgate}>Research Gate</a></>
                            } */}
                        </div>
                        <div className={utilStyles.textContent}>
                            <p>{team.main}</p>
                            

                            <div className={utilStyles.lightSub}>{team.sub}</div>
                        </div>
                    </div>
            </div>
        </div>
       <Footer></Footer>

    </>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://adrlabs.vercel.app/${params.id}.json`);
    const data = await req.json();

    return {
        props: { team: data },
    }
}