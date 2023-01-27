import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'
import Header from "../components/Header";

const UnderConstruction = () => (
    <>
    <Header></Header>
    <p style={{textAlign: 'center', padding: 70, marginTop: 300}}>Under Construction...</p>
    {/* <div className={utilStyles.backHome}>
                    <Image className={utilStyles.smallLeftArrow}
                        src={mainarrow}
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <p><Link href="/teachings">Back</Link></p>
    </div> */}
    </>
    
);

export default UnderConstruction;