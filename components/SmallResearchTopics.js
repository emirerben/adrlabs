import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
import plus_graphic from '../public/images/ADR-GraphicElements_white.png'
import minus_graphic from '../public/images/ADR-GraphicElements_M_white.png'

import { useState } from "react";



export default function SmallResearchTopics(){
    const [showMe1, setShowMe1] = useState(false);
    const [showMe2, setShowMe2] = useState(false);
    const [showMe3, setShowMe3] = useState(false);
    const [showMe4, setShowMe4] = useState(false);
    function toggle1(){
        setShowMe1(!showMe1);
        const imgChangeHandler = () => {
            if(!showMe1) {
                setImg(true);
            }else{
                setImg(false)
            }
        };
    }
    function toggle2(){
        setShowMe2(!showMe2);
        const imgChangeHandler = () => {
            if(!showMe2) {
                setImg(true);
            }else{
                setImg(false)
            }
        };
    }
    function toggle3(){
        setShowMe3(!showMe3);
        const imgChangeHandler = () => {
            if(!showMe3) {
                setImg(true);
            }else{
                setImg(false)
            }
        };
    }
    function toggle4(){
        setShowMe4(!showMe4);
        const imgChangeHandler = () => {
            if(!showMe4) {
                setImg(true);
            }else{
                setImg(false)
            }
        };
    }
   
 return (
    <div className={utilStyles.SmallResearchTopicsStyle}>
    
        <h2>LATEST PUBLICATIONS</h2>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicContainerStyle}>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Cocoon: 3D Printed Clay Formwork for Concrete Casting</h3>
                <p>By combining two historic and widely used materials, clay and concrete, our proposed novel process, Cocoon integrates robotic clay three-dimensional (3D) printing as the primary formwork and incrementally casting concrete into this formwork to fabricate nonstandard concrete elements.</p>
                <Image onClick={toggle1} className={utilStyles.plus_style}
                    src={!showMe1 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe1?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src='/images/06.jpg'
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <p>Concrete, a material widely used in the construction industry today for its low cost and considerable strength as a composite building material. By combining two historic and widely used materials, clay and concrete, our proposed novel process, Cocoon integrates robotic clay three-dimensional (3D) printing as the primary formwork and incrementally casting concrete into this formwork to fabricate nonstandard concrete elements. The concrete’s fluidity takes shape from the 3D printed clay formwork, allowing the clay to gain structure from the concrete as it cures. As the clay loses moisture, the formwork begins to shrink, crack, and reveal the concrete below. This self-demolding process produces easily removable formwork that can then be recycled by adding water to rehydrate the clay creating a nearly zero-waste formwork. <br></br> <br></br> <a style={{color: 'white'}}href='https://www.researchgate.net/publication/364639955_Cocoon_3D_Printed_Clay_Formwork_for_Concrete_Casting'>ResearchGate</a></p>
            </div>
            
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3> Robotic Timber Construction: A Case Study Structure</h3>
                <p>We present a novel and transferable process for the robotic fabrication of bespoke timber subassemblies made of off-the-shelf standard timber elements. A nonstandard timber structure and a Zollinger roof structure, acts as the case study for the research and validates the feasibility of the proposed process.</p>
                <Image onClick={toggle2} className={utilStyles.plus_style}
                    src={!showMe2 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe2?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src='/images/07.jpg'
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <p>Several research projects have investigated the use of automated assembly technologies (e.g., industrial robotic arms) for the fabrication of nonstandard timber structures. Building on these projects, we present a novel and transferable process for the robotic fabrication of bespoke timber subassemblies made of off-the-shelf standard timber elements. A nonstandard timber structure,  consisting of four bespoke subas semblies: three vertical supports and a Zollinger roof structure, acts as the case study for the research and validates the feasibility of the proposed process. <br></br> <br></br> <a style={{color: 'white'}}href='https://drive.google.com/file/d/1Q4hzXtLFFQp-vT_kAObbLKv1_cykyM-9/view'>PDF</a></p>
            </div>
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Parallel Paths of Inquiry: Detailing for DFAB HOUSE</h3>
                <p>DFAB  HOUSE,  a  multi-technology  demonstrator  of  digital fabrication in architecture, integrates six full-scale novel con-struction  technologies  into  a  three-story  residential  building  for the first time. This  account  focuses  on  the  co-development  of  its  most  interrelated  subsystems:  Spatial  Timber Assemblies and the Lightweight Translucent Facade.</p>
                <Image onClick={toggle3} className={utilStyles.plus_style}
                    src={!showMe3 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe3?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src='/images/08.jpg'
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <p>DFAB  HOUSE,  a  multi-technology  demonstrator  of  digital fabrication in architecture, integrates six full-scale novel con-struction  technologies  into  a  three-story  residential  building  for the first time. Rather than a mere showcase of individual digital fabrication technologies, it explores how their synthesis across interfaces can drive the process  of  architectural  design.  This  account  focuses  on  the  co-development  of  its  most  interrelated  subsystems:  Spatial  Timber Assemblies and the Lightweight Translucent Facade. Each of the subsystems fulfills specific design objectives: the timber structure demonstrates cooperative robotic assem-bly and its degrees of freedom, and optimizes structural per-formance  and  material  use;  the  facade  combines  thermal  performance  and  daylighting,  allows  a  non-planar  geometry  optimal  for  prestressing,  and  creates  an  outward  perception  of the timber frame. However, these two subsystems perform synergistically. <br></br> <br></br> <a style={{color: 'white'}}href='https://www.tandfonline.com/doi/full/10.1080/24751448.2021.1863668'>DOI</a></p>
            </div>
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Engrained Performance: Performance-Driven Computational Design of a Robotically Assembled Shingle Facade System</h3>
                <p>This project presents a novel fabrication-aware and performance-driven computational design method that facilitates the design and robotic fabrication of a wood shingle facade system.The research merges computational design, robotic fabrication, and building facade optimization into a seamless digital design-to-fabrication workflow.</p>
                <Image onClick={toggle4} className={utilStyles.plus_style}
                    src={!showMe4 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe4?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src='/images/09.png'
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <p>This project presents a novel fabrication-aware and performance-driven computational design method that facilitates the design and robotic fabrication of a wood shingle facade system.The research merges computational design, robotic fabrication, and building facade optimization into a seamless digital design-to-fabrication workflow. The research encompasses the following topics: (1) a constructive system integrating the rules, constraints, and dependencies of conventional shingle facades; (2) an integrative computational design method incorporating material, robotic fabrication, and assembly constraints; (3) an optimization method for facade sun shading; and (4) a digital design-to-fabrication workflow informing the robotic fabrication procedures. The result is an integrative computational design method for the design of a wood shingle facade  Environmental analysis and multi-objective optimization are coupled with a variable facade surface to produce several optimal design solutions that conform to the constraints of the robotic setup and constructive system.  <br></br> <br></br> <a style={{color: 'white'}}href='https://www.researchgate.net/publication/353890445_Engrained_Performance_Performance-Driven_Computational_Design_of_a_Robotically_Assembled_Shingle_Facade_System'>ResearchGate</a></p>
            </div>
            <div className={utilStyles.breakerWhite}></div>
        </div>
    </div>
);
}