import Link from 'next/link';
import firstpic from '../public/images/latestwork1.jpeg'
import secondpic from '../public/images/latestwork2.jpg'
import thirdpic from '../public/images/latestwork3.jpg'
import fourthpic from '../public/images/latestwork4.jpeg'
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const LatestWork = () => (
<div className={utilStyles.lastestWorkStyle}>
    <h3>OUR LATEST WORK</h3>
    <div className={utilStyles.projectsScrollStyle}>
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={firstpic}
                    alt="project"
                    width={488}
                    height={416}
                />
            </Link>
            <p>Robotically Fabricated Structure 2.0</p>
        </div>
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={secondpic}
                    alt="project"
                    width={300}
                    height={254}
                />
            </Link>
            <p>Robotically Fabricated Structure <br></br>(RFS)</p>
        </div>        
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={thirdpic}
                    alt="project"
                    width={300}
                    height={391}
                />
            </Link>
            <p>Muti-Robotic Timber Assembly</p>
        </div>
        <div className={utilStyles.projectCardStyle}>
            <Link href="/">
                <Image className={utilStyles.projectImageStyle}
                    src={fourthpic}
                    alt="project"
                    width={360}
                    height={287}
                />
            </Link>
            <p>DFAB House</p> 
        </div>          
    </div>
</div>
);

export default LatestWork;