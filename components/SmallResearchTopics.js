import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const SmallResearchTopics = () => (
<div className={utilStyles.SmallResearchTopicsStyle}>
    <h2>RESEARCH TOPICS</h2>
    <div className={utilStyles.breakerWhite}></div>
    <div className={utilStyles.TopicContainerStyle}>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Fabrication-Aware Computational Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
        </div>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Robotic Construction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Human-Robot Collaboration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={utilStyles.breakerWhite}></div>
        <div className={utilStyles.TopicBlockStyle}>
            <h3>Design for Assembly, Disassembly, and Reuse </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={utilStyles.breakerWhite}></div>
    </div>
    
    
</div>
);

export default SmallResearchTopics;