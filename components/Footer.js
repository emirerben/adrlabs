import Link from 'next/link';
import adr_logo from '../public/images/ADR-Logo_wordmark-01.png'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const Footer = () => (
<div className={utilStyles.footerStyle}>
    <Link href="/">
        <Image className={utilStyles.adrlogo_footer}
            src={adr_logo}
            alt="Logo"
        />
    </Link>
    <p className={utilStyles.footer_text}>Adel Design Research (ADR)<br></br>
A. Alfred Taubman College of Architecture and Urban Planning<br></br>
2000 Bonisteel Boulevard<br></br>
Ann Arbor, MI 48109-2069<br></br><br></br>

+1 (734) 763 8228</p>
</div>
);

export default Footer;