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
import Footer from "../../components/Footer";

export default function Projects(){
    return(
        <>
        <CustomCursor />
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div style={{paddingTop: 180}} className={utilStyles.TitleSection}>
            <Image className={utilStyles.projectMainImageStyle}
                src={firstpic}
                alt="project"
            />
            <h1 style={{fontSize: '2rem'}}>Robotically Fabricated Structure (RFS)</h1>
            
        </div>
        {/* A project description block */}
        <div className={utilStyles.projectDescription}>
            <div className={utilStyles.headerResponsive}></div>
            <h1 style={{fontWeight: 400}}>A title goes here</h1>
            <div className={utilStyles.projectDescriptionContent}>
                <div style={{fontSize:'1rem'}}>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Researcher</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Arash Adel</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Related Projects</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Concrete Choreography</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Related Teachings</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Concrete Choreography</p>
                    </div>
                </div>
                <h3>Description text goes here and it further describes the project overview.</h3>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div>

        {/* image gallery block */}
        <div style={{ marginTop:50, paddingLeft: 40, paddingRight:40}} className={utilStyles.lastestWorkStyle}>
            <div className={utilStyles.projectsScrollStyle}>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={firstpic}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={secondpic}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={thirdpic}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
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

        {/* A project description block */}
        {/* <div style={{paddingTop:0}} className={utilStyles.projectDescription}>
            <div className={utilStyles.headerResponsive}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop:30, paddingBottom:100, flexWrap:'wrap'}}>
                <h1 style={{fontWeight: 400}}>A title goes here</h1>
                <p style={{fontSize:'1rem', width: '45%', fontWeight: 300}}>Description text goes here and it further describes the project overview.</p>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div> */}
        <div style={{paddingTop:0}} className={utilStyles.projectDescription}>

            <div className={utilStyles.headerResponsive}></div> 
            <div className={utilStyles.researchtopicsText}>
                <h3>A title goes here</h3>
                <p>Description text goes here and it further describes the project overview.</p>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div>
        <Footer></Footer>
        </>
    );

}