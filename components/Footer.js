import Link from 'next/link';
import adr_logo from '../public/images/ADR-Logo_wordmark-01.png'
import taubman_logo from '../public/images/taubman.png'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const Footer = () => (
<div className={utilStyles.footerStyle}>
    <div className={utilStyles.headerbreakerBlack_top}></div>
    <div className={utilStyles.headerbreakerBlack_middle}></div>
    <div className={utilStyles.linksStyle}>
        <div className={utilStyles.upperlinksStyle}>
            <ul>
                <li>RESEARCH</li>
                <li>PROJECTS</li>
                <li>TEACHINGS</li>
                <li>PUBLICATIONS</li>
                <li>NEWS</li>
            </ul> 
        </div>
        
        <div className={utilStyles.lowerlinksStyle}>
            <ul>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul> 
        </div>
    </div>
    <div className={utilStyles.headerbreakerBlack_bottom}></div>
    <div className={utilStyles.footerlogo_style}>
        <Link href="/">
            <Image className={utilStyles.adrlogo_footer}
                src={adr_logo}
                alt="Logo"
            />
        </Link>
        <Link href="/">
            <Image className={utilStyles.taubman_footer}
                src={taubman_logo}
                alt="Taubman"
                width={230.21}
            />
        </Link>
    </div>
    <p className={utilStyles.footer_text}>Adel Design Research (ADR)<br></br>
    A. Alfred Taubman College of Architecture and Urban Planning<br></br>
    2000 Bonisteel Boulevard<br></br>
    Ann Arbor, MI 48109-2069<br></br><br></br>

    +1 (734) 763 8228</p>
</div>
);

export default Footer;