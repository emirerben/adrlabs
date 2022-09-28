import Link from 'next/link';
import firstpic from '../public/images/AdR_HomePage_006-Black-Core.png'
import secondpic from '../public/images/AdR_HomePage_007-BW.png'
import thirdpic from '../public/images/parallel-paths-BW.png'
import fourthpic from '../public/images/AdR_HomePage_009-BW.png'
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
            <p>PROJECT NAME</p>
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
            <p>PROJECT NAME</p>
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
            <p>PROJECT NAME</p>
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
            <p>PROJECT NAME</p> 
        </div>          
    </div>
</div>
);

export default LatestWork;