import Link from 'next/link';
import mypic from '../public/images/ADR-Logo-01.png'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';

const Header = () => (
<div className={utilStyles.headerStyle}>
    <div className={utilStyles.headerbreakerBlack_top}></div>
    <Link href="/">
        <Image className={utilStyles.imageStyle}
            src={mypic}
            alt="Logo"
            width={77.38}
            height={29.61}
        />
    </Link>
    <div className={utilStyles.headerbreakerBlack_middle}></div>
    <div className={utilStyles.linksStyle}>
        <div className={utilStyles.upperlinksStyle}>
            <ul>
                <li>RESEARCH</li>
                <li>PROJECTS</li>
                <li>TEACHING</li>
                <li><Link href="/publications">PUBLICATIONS</Link></li>
                <li><Link href="/news">NEWS</Link></li>
            </ul> 
        </div>
        
        <div className={utilStyles.lowerlinksStyle}>
            <ul>
                <li><Link href="/aboutus">ABOUT</Link></li>
                <li>CONTACT</li>
            </ul> 
        </div>
    </div>
    <div className={utilStyles.headerbreakerBlack_bottom}></div>
</div>
);

export default Header;