import Link from 'next/link';
import Image from 'next/future/image'
import utilStyles from '../styles/utils.module.css';


const SmallNews = () => (
<div className={utilStyles.SmallNewsTopicsStyle}>
    <h2 style={{fontWeight: "500"}}>NEWS</h2>
    <div className={utilStyles.breakerBlack}></div>
    <div className={utilStyles.NewsContainerStyle}>
        <div className={utilStyles.breakerBlack}></div>
        <div className={utilStyles.NewsBlockStyle}>
        <h3>Robotically Fabricated Structure Receives Global Future Design Award</h3>
            <p>10/31/22 <br></br><br></br><Link href={'/news/globaldesignaward'}>READ MORE</Link></p>
            <div className={utilStyles.yellowHighlight}></div>
            
        </div>
        <div className={utilStyles.breakerBlack}></div>
        <div className={utilStyles.NewsBlockStyle}>
        <h3>RFS Awarded the Honorable Mention for the Loop Design Awards 2022</h3>
            <p>10/05/22 <br></br><br></br><Link href={'/news/loopdesignawards'}>READ MORE</Link></p>
        </div>
        <div className={utilStyles.breakerBlack}></div>
        <div className={utilStyles.NewsBlockStyle}>
        <h3>RFS Nominated for the LOOP Design Awards 2022 People's Choice</h3>
            <p className={utilStyles.underlineHover}>08/29/22 <br></br><br></br><Link href={'/news/peopleschoice'} className={utilStyles.underlineHover}>READ MORE</Link></p>
        </div>
        
    </div>
    
    
</div>
);

export default SmallNews;