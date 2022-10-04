import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';
import plus_graphic from '../public/images/ADR-GraphicElements_v copy 2.png'
import mypic from '../public/images/AdR_About_Page_004.png'
import { useState } from "react";



export default function SmallResearchTopics(){
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
 return (
    <div className={utilStyles.SmallResearchTopicsStyle}>
    
    <h2>RESEARCH TOPICS</h2>
    <div className={utilStyles.breakerWhite}></div>
    <div className={utilStyles.TopicContainerStyle}>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Fabrication-Aware Computational Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Image onClick={toggle} className={utilStyles.plus_style}
                src={plus_graphic}
                alt="Plus"
            />
        </div>
        <div className={utilStyles.moreinfoStyle} style={{display:showMe?"block":"none"}}>
                <Image className={utilStyles.researchImageStyle}
                    src={mypic}
                    alt="Plus"
                    width={540}
                    height={334}
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        </div>
        
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Robotic Construction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/">
                <Image className={utilStyles.plus_style}
                    src={plus_graphic}
                    alt="Plus"
                />
            </Link>
        </div>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Human-Robot Collaboration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/">
                <Image className={utilStyles.plus_style}
                    src={plus_graphic}
                    alt="Plus"
                />
            </Link>
        </div>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Design for Assembly, Disassembly, and Reuse </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/">
                <Image className={utilStyles.plus_style}
                    src={plus_graphic}
                    alt="Plus"
                />
            </Link>
        </div>
        <div className={utilStyles.breakerWhite}></div>
    </div>
    
    
</div>
);
}