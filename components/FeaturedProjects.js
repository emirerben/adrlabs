import Link from 'next/link';
import firstpic from '../public/images/latestwork1.jpeg'
import secondpic from '../public/images/latestwork2.jpg'
import thirdpic from '../public/images/latestwork3.jpg'
import fourthpic from '../public/images/latestwork4.jpeg'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const LatestWork = () => (
<div className={utilStyles.latestWorkStyle}>
    <h3 style={{fontWeight: 400}}>FEATURED PROJECTS</h3>
    <div className={utilStyles.projectsScrollStyle}>
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={firstpic}
                    alt="project"
                    width={400}
                    height={280}
                />
            </Link>
            <div className={utilStyles.titleArrowLatestWork}>
                <p>Robotically Fabricated Structure 2.0</p>
                <Image className={utilStyles.smallUpperArrow}
                    src={"/images/ADR-GraphicElements_vcopy.png"}
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={secondpic}
                    alt="project"
                    width={400}
                    height={280}
                />
            </Link>
            <div className={utilStyles.titleArrowLatestWork}>
                <p>Robotically Fabricated Structure <br></br>(RFS)</p>
                <Image className={utilStyles.smallUpperArrow}
                    src={"/images/ADR-GraphicElements_vcopy.png"}
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>        
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={thirdpic}
                    alt="project"
                    width={400}
                    height={280}
                />
            </Link>
            <div className={utilStyles.titleArrowLatestWork}>
                <p>Muti-Robotic Timber Assembly</p>
                <Image className={utilStyles.smallUpperArrow}
                    src={"/images/ADR-GraphicElements_vcopy.png"}
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
        {/* <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={fourthpic}
                    alt="project"
                    width={360}
                    height={287}
                />
            </Link>
            <div className={utilStyles.titleArrowLatestWork}>
                <p>DFAB House</p>
                <Image className={utilStyles.smallUpperArrow}
                    src={"/images/ADR-GraphicElements_vcopy.png"}
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>           */}
    </div>
</div>
);

export default LatestWork;