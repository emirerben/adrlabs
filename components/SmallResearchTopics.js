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
    
        <h2>RESEARCH TOPICS</h2>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicContainerStyle}>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Fabrication-Aware Computational Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Robotic Construction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Human-Robot Collaboration</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className={utilStyles.breakerWhite}></div>
            <div className={utilStyles.TopicBlockStyle}>
                <h3>Design for Assembly, Disassembly, and Reuse </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className={utilStyles.breakerWhite}></div>
        </div>
    </div>
);
}