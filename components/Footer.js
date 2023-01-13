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
                <li style={{fontWeight: 800, fontSize: 16}} className={utilStyles.footerlogoleft_style}>© 2022 ADR</li> 
                <li><Link href="/research">RESEARCH</Link></li>
                <li><Link href="/projects">PROJECTS</Link></li>
                <li><Link href="/teachings">TEACHING</Link></li>
                <li><Link href="/publications">PUBLICATIONS</Link></li>
                <li><Link href="/news">NEWS</Link></li>
            </ul> 
        </div>
        
        <div className={utilStyles.lowerlinksStyle}>
            <ul>
                <li className={utilStyles.footerlogoleft_style}>
                <Link href="https://www.instagram.com/adr_laboratory/">
                    <Image className={utilStyles.adrsocial_footer}
                        src={"/images/instagram-icon.png"}
                        alt="ADR Instagram"
                        height={21}
                        width={21}
                    />
                </Link>
                <Link href="https://www.linkedin.com/company/adr-laboratory/about/">
                    <Image className={utilStyles.adrsociallinkedin_footer}
                        src={"/images/linkedin.png"}
                        alt="ADR LinkedIn"
                        height={18}
                        width={18}
                    />
                </Link>
                

{/*                 
                <Link href="/">
                    <Image className={utilStyles.adrsocial_footer}
                        src={"/images/facebook.png"}
                        alt="ADR Facebook"
                        height={21}
                        width={21}
                    />
                </Link>  
                <Link href="/">
                    <Image className={utilStyles.adrsocial_footer}
                        src={"/images/twitter-icon.png"}
                        alt="ADR Twitter"
                        height={21}
                        width={28}
                    />
                </Link>     */}
                </li> 
                <li><Link href="/aboutus">ABOUT</Link></li>
                <li><Link href="/contactus">CONTACT</Link></li>
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