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
                src={"/images/RFS/1.jpeg"}
                alt="project"
                width={1400}
                height={800}
            />
            <h1 style={{fontSize: '2rem'}}>Robotically Fabricated Structure (RFS) 2.0</h1>
            
        </div>
        {/* A project description block */}
        <div className={utilStyles.projectDescription}>
            <div className={utilStyles.headerResponsive}></div>
            <h1 style={{fontWeight: 400}}>ADR Laboratory Exhibits a Sustainable Housing Solution Enabled Through Computation and Robotics</h1>
            <div className={utilStyles.projectDescriptionContent}>

                <div style={{fontSize:'1rem'}}>
                <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Project Name</p>
                        <p style={{fontWeight: 300, marginTop: 0}}> Robotically Fabricated Structure 2.0</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Gross Built Area</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>? sqft</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Completion Year</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>202?</p>
                    </div>
                </div>
                <h3>A new prototype at Taubman College’s On Air faculty exhibition at the Liberty Research Annex Gallery brings innovational research into housing applications.</h3>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div>

        {/* image gallery block */}
        <div style={{ marginTop:50, paddingLeft: 40, paddingRight:40}} className={utilStyles.lastestWorkStyle}>
            <div className={utilStyles.projectsScrollStyle}>
            <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/2.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/3.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/4.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/5.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/6.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/7.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/8.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS2/9.jpg"}
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
                {/* <h3>A title goes here</h3> */}
                <p>Robotically Fabricated Structure (RFS) 2.0 is an extension of the ongoing research conducted by ADR Laboratory on robotic timber construction and human-robot collaborative construction processes. RFS 1.0 was a timber pavilion, sited on the Matthaei Botanical Gardens in Ann Arbor, serving as an open-air event, gathering, and exhibition space and offering opportunities for holding music, dance, and other performances as well as temporary exhibitions and open-air classrooms. RFS 2.0 builds upon that project and advances the research by developing a robotically fabricated construction system that could work as multi-story structures to facilitate sustainable housing solutions.<br></br><br></br>
RFS employs prefabricated, bespoke timber sub-assemblies manufactured from standardized, regionally sourced, short 2x4 dimensional lumber. Using custom algorithms developed for this research, the robots process this standard material and assemble the elements into intricate, layered modules. The coupling of custom algorithms and robotic fabrication allows for realizing bespoke building components with minimized construction waste. Efficiency in the designed robotic construction system includes mass-customized prefabricated modules and assembly routines otherwise difficult through conventional means and methods. After fabrication, modules were transferred to this site, where human workers moved each assembly into place, attaching each to form the structure. This type of fabrication system is a novel approach to reconsidering issues of material use, labor, and the environment, to create intelligent and resourceful architecture with striking expressive qualities. Completing RFS 2.0 elevated the ongoing research in robotic timber construction to the scale and complexities of full and complete building systems beyond the laboratory. By building at full-scale, RFS is able to actively contribute to larger advancement in the territories of carbon neutrality and sustainable building practices. </p>
            </div>
            <div className={utilStyles.headerResponsive}></div>

        </div>
        <div style={{paddingLeft: 40, paddingRight: 40}} className={utilStyles.projectDescriptionContent}>
            <h3 style={{fontSize:'1.6em', fontWeight:400}}>Project Credits</h3>
                <div style={{marginTop:30,fontSize:'1rem'}}>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Principal Investigator and Project Lead</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Dr. Arash Adel (Assistant Professor of Architecture)<br></br>ADR Laboratory</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Research, Design, and Fabrication Assistants</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Daniel Ruan, Abdallah Kamhawi, Ali Fahmy, Tharanesh Varadharajan, Xiujin Liu</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Diagrams</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Yunyan Li</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Supported by</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Taubman College of Architecture and Urban Planning, University of Michigan</p>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    );

}