import Link from 'next/link';
import mypic from '../public/images/ADR-Logo-01.png'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
const Header = () => (
    <div className={utilStyles.newheaderStyle}>
        <div className={utilStyles.headerResponsive}></div>
        <div style={{paddingRight:40, height: 45, display: 'flex', justifyContent: 'space-between', flexWrap:'nowrap', alignItems:'center'}}>
            <Link href="/">
                <Image style={{marginLeft:40, float: 'left'}}
                    src={mypic}
                    alt="Logo"
                    width={77.38}
                    height={29.61}
                />
            </Link>
            <div style={{display: 'flex', gap:35, marginTop:5}}>
                <Link href="/research">RESEARCH</Link>
                <Link href="/projects">PROJECTS</Link>
                <Link href="/teachings">TEACHING</Link>
                <Link href="/publications">PUBLICATIONS</Link>
                <Link href="/news">NEWS</Link>
            </div>
        </div>
        <div className={utilStyles.headerResponsive}></div>
        <div style={{paddingRight:40, height: 45, display: 'flex', justifyContent: 'space-between', flexWrap:'nowrap', alignItems:'center', flexDirection:'row-reverse'}}>
            <div style={{display: 'flex', gap:35, marginTop:5}}>
                <Link href="/aboutus">ABOUT</Link>
                <Link href="/contactus">CONTACT</Link>
            </div>
        </div>
        <div className={utilStyles.headerResponsive}></div>
        
    </div>
/* <div className={utilStyles.headerStyle}>
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
                <li><Link href="/research">RESEARCH</Link></li>
                <li><Link href="/projects">PROJECTS</Link></li>
                <li><Link href="/teachings">TEACHING</Link></li>
                <li><Link href="/publications">PUBLICATIONS</Link></li>
                <li><Link href="/news">NEWS</Link></li>
            </ul> 
        </div>
        
        <div className={utilStyles.lowerlinksStyle}>
            <ul>
                <li><Link href="/aboutus">ABOUT</Link></li>
                <li><Link href="/contactus">CONTACT</Link></li>
            </ul> 
        </div>
    </div>
    <div className={utilStyles.headerbreakerBlack_bottom}></div>
</div> */
);

export default Header;