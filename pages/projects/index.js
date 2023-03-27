import UnderConstruction from "../../components/UnderConstruction";
import CustomCursor from "../../components/Cursor";
import utilStyles from '../../styles/utils.module.css';
import Header from "../../components/Header";
import Link from "next/link";
import firstpic from '../../public/images/latestwork1.jpeg'
import secondpic from '../../public/images/latestwork2.jpg'
import thirdpic from '../../public/images/latestwork3.jpg'
import fourthpic from '../../public/images/latestwork4.jpeg'
import Image from "next/image";

export default function Projects(){
    return(
        <>
        <CustomCursor />
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div className={utilStyles.TitleSection}>
            <h1>PROJECTS</h1>
            <p style={{letterSpacing:-1, fontSize: 30, width: 600, fontWeight: 300, }}>ADR is an interdisciplinary laboratory for advanced research in Architecture, Computational Design, and Robotic Construction.</p>
        </div>
        <div style={{ marginTop:100, paddingLeft: 40, paddingRight:40}} className={utilStyles.lastestWorkStyle}>
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
                        <p>Robotically Fabricated Structure (RFS)</p>
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
        </>
    );

}