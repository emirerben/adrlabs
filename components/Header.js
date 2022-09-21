import Link from 'next/link';
import mypic from '../public/images/ADR-Logo-01.png'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const Header = () => (
<div className={utilStyles.headerStyle}>
    <Link href="/">
        <Image className={utilStyles.imageStyle}
            src={mypic}
            alt="Logo"
            width={77.38}
            height={29.61}
        />
    </Link>
</div>
);

export default Header;