import Link from 'next/link';
import mypic from '../public/images/AdR_About_Page_004.png'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'



const SmallAboutUs = () => (
<div className={utilStyles.SmallAboutUsStyle}>
    <p>ADR was launched in January 2021 by Dr. Arash Adel who specializes in the intersection of computational design and architectural technology.</p>
    <Image className={utilStyles.SmallAboutUs_imageStyle}
        src={mypic}
        alt="Logo"
        width={540}
        height={334}
    />
    <div className={utilStyles.arrowAboutUs}>
        <p>LEARN MORE</p>
        <Image className={utilStyles.smallUpperArrow}
            src={mainarrow}
            alt="Logo"
            width={40}
            height={40}
        />
    </div>
</div>
);

export default SmallAboutUs;