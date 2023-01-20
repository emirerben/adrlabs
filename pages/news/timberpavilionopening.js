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
            <h3 style={{fontSize:39, fontWeight:300, width:550, marginTop: 100}}>Timber Pavilion Opening at the Matthaei Botanical Gardens</h3>
            <h2 style={{fontSize:30, fontWeight:300}}>10/20/21</h2>
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
            Join us for the public opening of the Robotically Fabricated Structure (RFS) at the Matthaei Botanical Gardens. Brief remarks by Dean Jonathan Massey and project lead Arash Adel will be followed by a ribbon cutting to open this state-of-the-art timber structure. <br></br><br></br>
            RFS is a robotically fabricated timber pavilion that explores new responsible and precise ways of creating our built environment. Contributing to outlooks for sustainable and low-carbon construction, RFS was built and sited on the Matthaei Botanical Gardens in Ann Arbor through robot and human collaboration using standard off-the-shelf lumber that was regionally sourced. The structure was designed and fabricated by ADR Laboratory and students in Taubman College’s master’s program in digital and material technologies, employing Taubman College's state-of-the-art robotic fabrication facilities. This outdoor structure offers new public gathering points while maintaining an open-air condition marked by pandemic times. <br></br><br></br>
            Completing RFS elevated the ongoing research in robotic timber construction to the scale and complexities of full and complete building systems beyond the laboratory. Join us to learn more and to be among the first to visit the pavilion.<br></br><br></br>

            RSVP Link：<br></br>
            <a href='https://umich.formstack.com/forms/Timber'>https://umich.formstack.com/forms/Timber</a>.</p>
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



