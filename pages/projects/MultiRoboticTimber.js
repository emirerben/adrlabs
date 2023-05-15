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
                src={"/images/MultiRoboticTimber/1.jpg"}
                alt="project"
                width={1400}
                height={800}
            />
            <h1 style={{fontSize: '2rem'}}>Multi-Robotic Timber Assembly</h1>
            
        </div>
        {/* A project description block */}
        <div className={utilStyles.projectDescription}>
            <div className={utilStyles.headerResponsive}></div>
            {/* <h1 style={{fontWeight: 400}}></h1> */}
            <div className={utilStyles.projectDescriptionContent}>

                <div style={{fontSize:'1rem'}}>
                <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Project Name</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>  Multi-Robotic Timber Assembly (A Case Study Structure)</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Gross Built Area</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>200 sqft</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Completion Year</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>2020</p>
                    </div>
                </div>
                <h3>The case study pavilion was fabricated in a collaborative workshop between the University of Michigan Taubman College’s Master of Science in Digital and Material Technologies program and ERNE AG Holzbau at ERNE AG Holzbau’s fabrication facility in Switzerland.
</h3>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div>

        {/* image gallery block */}
        <div style={{ marginTop:50, paddingLeft: 40, paddingRight:40}} className={utilStyles.lastestWorkStyle}>
            <div className={utilStyles.projectsScrollStyle}>
            <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/2.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/3.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/4.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/5.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/6.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/7.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/8.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/MultiRoboticTimber/9.jpg"}
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
                <h3>Project Description</h3>
                <p>This case study structure investigates an integrated process for the computational design and multi-robotic assembly of bespoke timber structures made of off-the-shelf standard timber elements. The experimental setup consists of two distinct robotic fabrication cells embedded in an industrial setting. Each of these fabrication setups imposes specific constraints that must be incorporated into the design. The pavilion acts as the case study for the research and demonstrates the feasibility of the proposed approach for designing and assembling different building components that fit within the constraints and capabilities of each setup. The KUKA work cell is used for the assembly of three bespoke columns, and the gantry setup is used for the assembly of a Zollinger roof structure. The case study pavilion was fabricated in a collaborative workshop between Taubman College’s MS Digital and Material Technologies program and ERNE AG Holzbau at ERNE AG Holzbau’s fabrication facility in Switzerland.</p>
            </div>
            <div className={utilStyles.headerResponsive}></div>

        </div>
        <div style={{paddingLeft: 40, paddingRight: 40}} className={utilStyles.projectDescriptionContent}>
            <h3 style={{fontSize:'1.6em', fontWeight:400}}>Project Credits</h3>
                <div style={{marginTop:30,fontSize:'1rem'}}>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Instructor and Project Lead</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Dr. Arash Adel (Assistant Professor of Architecture)<br></br>ADR Laboratory</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Students</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Ying Cai, Han-Yuan Chang, Ryan Craney, Carl Eppinger,Monik Gada, Chih Jou Lin, Feras Nour, Thea Thorrell, Christopher, Voltl, Aaron Weaver, Chia Ching Yen, ERNE AG Holzbau</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Project Lead</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Thomas Wehrle, Edyta Augustynowicz</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Team</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Oliver Ackermann, Sascha Schade, Thomas Reiner</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Special Thanks</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>ROB Technologies and Catie Newell</p>
                    </div>

                </div>
            </div>
        <Footer></Footer>
        </>
    );

}