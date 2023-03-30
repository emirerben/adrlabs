import Link from 'next/link';
import mypic from '../public/images/05.jpeg'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'



const SmallAboutUs = () => (
    <>
<div className={utilStyles.SmallAboutUsStyle}>
    <p>ADR was launched in January 2021 by Dr. Arash Adel who specializes in the intersection of computational design and architectural technology.</p>
    <Image className={utilStyles.SmallAboutUs_imageStyle}
        src={mypic}
        alt="Logo"
        width={540}
        height={334}
    />
</div>
<div className={utilStyles.arrowAboutUs}>
        <a>LEARN MORE</a>
        <Image className={utilStyles.smallUpperArrow}
            src={mainarrow}
            alt="Logo"
            width={40}
            height={40}
        />
    </div>
    </>
);

export default SmallAboutUs;