import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
import plus_graphic from '../public/images/ADR-GraphicElements_white.png'
import minus_graphic from '../public/images/ADR-GraphicElements_M_white.png'
import mypic from '../public/images/AdR_About_Page_004.png'
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
    
        <h2>AWARDS</h2>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicContainerStyle}>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Dezeen Awards</h3>
                <p>Our project, RFS, is Featured on Dezeen!</p>
                <Image onClick={toggle1} className={utilStyles.plus_style}
                    src={!showMe1 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe1?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src={mypic}
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <Link href='https://www.dezeen.com/2022/08/26/robotically-fabricated-structure-university-of-michigan'><p style={{textDecorationLine: 'underline'}}>Read more</p></Link>
            </div>
            
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Global Future Design Awards</h3>
                <p>We are excited to announce that ADR Laboratory has received new global recognition for our project Robotically Fabricated Structure (RFS), now a Gold Winner for the 2022 Global Future Design Awards. <br></br><br></br>
                The Global Future Design Awards is an annual awards program organized by Architecture Press Release, a leading body of architecture press in Global. This award recognizes outstanding ideas that redefine design in architecture through the implementation of novel technologies, materials, programs, aesthetics, and spatial organization.
                </p>
                <Image onClick={toggle2} className={utilStyles.plus_style}
                    src={!showMe2 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe2?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src={mypic}
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <Link href='http://www.architecturepressrelease.com/gold-winner-robotically-fabricated-structure-rfs-adr-laboratory/'><p style={{textDecorationLine: 'underline'}}>Read more</p></Link>
            </div>
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Loop Design Awards</h3>
                <p>We are excited to announce that our project, Robotically Fabricated Structure (RFS), has been awarded the Honorable Mention under the Temporary Architecture category for LOOP Design Awards 2022! RFS was able to stand out from over 700 entries in this edition of the awards, joining many other remarkable projects in being announced a winner to the global community. Please join us in congratulating the team at ADR for their amazing accomplishment.</p>
                <Image onClick={toggle3} className={utilStyles.plus_style}
                    src={!showMe3 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe3?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src={mypic}
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <Link href='https://www.loopdesignawards.com/project/robotically-fabricated-structure-rfs/'><p style={{textDecorationLine: 'underline'}}>Read more</p></Link>
            </div>
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>World Design Awards</h3>
                <p>Robotically Fabricated Structure (RFS) has once again received global attention, winning this year’s World Design Award, hosted by The Architecture Community, in the temporary structure category.<br></br><br></br>
                RFS was created by Taubman College assistant professor of architecture Arash Adel and his team at ADR Laboratory. The outdoor timber pavilion was designed and fabricated through state-of-the-art human-robot collaborative construction, forming a novel approach to reconsidering issues of material use, labor, and the environment to create intelligent and resourceful architecture with striking expressive qualities.
                </p>
                <Image onClick={toggle4} className={utilStyles.plus_style}
                    src={!showMe4 ? plus_graphic : minus_graphic }
                    alt="Plus"
                />
            </div>
            <div className={utilStyles.moreinfoStyle} style={{display:showMe4?"block":"none"}}>
                    <Image className={utilStyles.researchImageStyle}
                        src={mypic}
                        alt="Plus"
                        width={540}
                        height={334}
                    />
                    <Link href='http://www.thearchitecturecommunity.com/robotically-fabricated-structure-rfs-adr-laboratory-taubman-college-of-architecture-and-urban-planning-university-of-michigan-world-design-awards-2022/'><p style={{textDecorationLine: 'underline'}}>Read more</p></Link>
            </div>
            <div className={utilStyles.breakerWhite}></div>
        </div>
    </div>
);
}