import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const SmallNews = () => (
<div className={utilStyles.SmallNewsTopicsStyle}>
    <h2>NEWS</h2>
    <div className={utilStyles.breakerBlack}></div>
    <div className={utilStyles.NewsContainerStyle}>
        <div className={utilStyles.breakerBlack}></div>
        <div className={utilStyles.NewsBlockStyle}>
            <h3>Keynote Lecture International Manufacturing Forum Series 2021</h3>
            <p>3/31/21 <br></br><br></br>READ MORE</p>
            <div className={utilStyles.yellowHighlight}></div>
            
        </div>
        <div className={utilStyles.breakerBlack}></div>
        <div className={utilStyles.NewsBlockStyle}>
            <h3>Robotic Construction</h3>
            <p>3/31/21 <br></br><br></br>READ MORE</p>
        </div>
        <div className={utilStyles.breakerBlack}></div>
        <div className={utilStyles.NewsBlockStyle}>
            <h3>Human-Robot Collaboration</h3>
            <p>3/31/21 <br></br><br></br>READ MORE</p>
        </div>
        
    </div>
    
    
</div>
);

export default SmallNews;