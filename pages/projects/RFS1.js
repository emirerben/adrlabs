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
import { useEffect, useState } from "react";



export default function Projects(){
//     const [imageFilenames, setImageFilenames] = useState([]);

//     useEffect(() => {
//         async function fetchImages() {
//         const res = await fetch('/api/images');
//         const data = await res.json();
//         setImageFilenames(data);
//         }

//     fetchImages();
//   }, []);

    return(
        <>
        <CustomCursor />
        <div className={utilStyles.headerWhiteBackground}></div>
        <Header></Header>
        <div style={{paddingTop: 180}} className={utilStyles.TitleSection}>
            <Image className={utilStyles.projectMainImageStyle}
                src={"/images/RFS1/1.jpeg"}
                alt="project"
                width={1400}
                height={800}
            />
            <h1 style={{fontSize: '2rem'}}>Robotically Fabricated Structure (RFS)</h1>
            
        </div>
        {/* A project description block */}
        <div className={utilStyles.projectDescription}>
            <div className={utilStyles.headerResponsive}></div>
            <h1 style={{fontWeight: 400}}>RFS is a robotically fabricated timber pavilion that explores responsible and precise methods contributing to sustainable and low-carbon construction outlooks. This structure is designed with the help of custom algorithms developed specifically for this project and built through state-of-the-art human-robot collaborative construction</h1>
            <div className={utilStyles.projectDescriptionContent}>
                <div style={{fontSize:'1rem'}}>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Project Name</p>
                        <p style={{fontWeight: 300, marginTop: 0}}> Robotically Fabricated Structure (RFS)</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Gross Built Area</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>430 sqft</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Completion Year</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>2021</p>
                    </div>
                </div>
                    <h3> RFS employs bespoke prefabricated timber sub-assemblies manufactured from regionally sourced short 2x4 dimensional lumber and utilizes industrial robotic arms to process and assemble elements into intricately layered modules. After fabrication, modules are transported to the site, where human workers move each sub-assembly into place and attach them together to form the pavilion. The integrated digital design and construction process for RFS is a novel approach to reconsidering issues of material use, labor, and the environment to create intelligent and resourceful architecture with striking expressive qualities. RFS is situated in the Matthaei Botanical Gardens in Ann Arbor, Michigan; it is designed for public engagement, acting as a defined gathering point located within the framework of a public conservatory while still maintaining an open-air condition.</h3>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div>
        {/* {imageFilenames.map((filename) => (
                <div className={utilStyles.projectCardStyle}>
                    <Image key={filename} src={`/images/RFS/${filename}`} width={400} height={280} />
                </div>
            ))} */}
        {/* image gallery block */}
        <div style={{ marginTop:50, paddingLeft: 40, paddingRight:40}} className={utilStyles.lastestWorkStyle}>
            <div className={utilStyles.projectsScrollStyle}>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/2.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/3.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/4.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/5.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/6.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/7.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/8.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/9.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/10.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/11.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/12.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/13.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/14.jpeg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/15.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/16.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/17.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/18.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/19.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                
                </div>        
                <div className={utilStyles.projectCardStyle}>
                    <Image className={utilStyles.projectImageStyle}
                        src={"/images/RFS1/20.jpg"}
                        alt="project"
                        width={400}
                        height={280}
                    />
                  
                </div>
              
                
                
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
            <div style={{paddingLeft:0, paddingRight: 0}} className={utilStyles.researchtopicsText}>
                <h3>Project Description</h3>
                <p>RFS is a robotically fabricated timber pavilion that explores responsible and precise methods contributing to sustainable and low-carbon construction outlooks. This structure is designed with the help of custom algorithms developed specifically for this project and built through state-of-the-art human-robot collaborative construction. RFS employs bespoke prefabricated timber sub-assemblies manufactured from regionally sourced short 2x4 dimensional lumber and utilizes industrial robotic arms to process and assemble elements into intricately layered modules. After fabrication, modules are transported to the site, where human workers move each sub-assembly into place and attach them together to form the pavilion. 
The coupling of custom algorithms and robotic fabrication enables the feasible realization of bespoke building components that are otherwise difficult or costly to achieve through conventional means and methods, with minimal construction waste. Moreover, short elements enable the use of indigenous trees that cannot easily produce full-length building elements (typically eight-foot dimensional lumber), construction and manufacturing off-cuts, and lumber elements reclaimed from the deconstruction of buildings, ultimately contributing to a more sustainable practice. The integrated digital design and construction process for RFS is a novel approach to reconsidering issues of material use, labor, and the environment to create intelligent and resourceful architecture with striking expressive qualities.
RFS is situated in the Matthaei Botanical Gardens in Ann Arbor, Michigan; it is designed for public engagement, acting as a defined gathering point located within the framework of a public conservatory while still maintaining an open-air condition. Formal configurations of the pavilion were influenced by views to and from the site, approach, and traffic flow, ultimately resulting in a curved, porous structure visible from the park road. The walls and ceiling feature intricately layered patterns of timber that allow for airflow, striking shadows, and optical effects. RFS was left minimally treated to reduce the environmental impact on the surrounding area and produce a long-lasting but impermanent structure. The pavilion includes an enclosed walkway that offers opportunities for exhibitions and intimate conversations, an exterior seating area, and a raised platform that creates an opportunity for small public events and performances.
Completing RFS elevated the ongoing research in human-robot collaborative construction beyond the laboratory to the scale and complexity of complete building systems. This case-study project is intended to provoke conversations about appropriate uses of automation in construction and the Architecture, Engineering, and Construction (AEC) community’s shifting responsibility to find creative solutions to construction inefficiencies and the omnipresent threat of climate change.
RFS is designed and fabricated by ADR Laboratory, research assistants, and students of the University of Michigan’s Taubman College MS in Digital and Material Technologies program. The work is evaluated for structural performance and building code requirements in partnership with the structural engineering firm Silman.
</p>
            </div>
            <div className={utilStyles.headerResponsive}></div>
        </div>
        <div style={{paddingLeft: 40, paddingRight: 40}} className={utilStyles.projectDescriptionContent}>
        <h3 style={{fontSize:'1.6em', fontWeight:400}}>Project Credits</h3>
                <div style={{marginTop:30, fontSize:'1rem'}}>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Principal Investigator and Project Lead</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Dr. Arash Adel (Assistant Professor of Architecture)<br></br>ADR Laboratory</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Research, Design, and Fabrication Assistants</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Ben Lawson, Ryan Craney, Sarah Nail, Gabrielle Clune, Andrew Hoover, Juliette Zidek</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Construction Assistants</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Abdallah Kamhawi, Tharanesh Varadharajan, Ali Fahmy, Elliot Smithberger, Qian Li, Nadim Hajj Ahmad, Joshua Powell, Ivan Gort-Cabeza de Vaca</p>
                    </div>
                    
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Students (MS in Digital and Material Technologies, Taubman College of Architecture and Urban Planning)</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Ruxin Xie, Daniel Ruan, Xinran Li, Jingwen Song, Mehdi Shirvani, Mackenzie Bruce, Chris Humphrey</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Structural Engineers</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Robert Silman Associates Structural Engineers (Nat Oppenheimer, Omid Oliyan, Justin Den Herder, Paul Evans)</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Video Editors</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Yunyan Li, Jacob Cofer</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Videographers</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Jacob Cofer, Bob Berg</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Diagrams</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Yunyan Li</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Supported by</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Herbert W. and Susan L. Johe Fund, Taubman College of Architecture and Urban Planning, University of Michigan</p>
                    </div>
                    <div>
                        <p style={{fontWeight: 500, marginBottom: 0}}>Special Thanks</p>
                        <p style={{fontWeight: 300, marginTop: 0}}>Prof. Jonathan Massey, Prof. McLain Clutter, Prof. Catie Newell, Prof. Wes McGee, Cynthia Radecki, Earl Bell</p>

                    </div>
                </div>
            </div>

        <Footer></Footer>
        </>
    );

}