import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LayoutAboutUs from "../../components/Header";
import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import mainpic from '../../public/images/AdR_HomePage_008-bw2.png'
import mainarrow from '../../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../../public/images/ADR-Logo-01.png'
import LayoutAbout from "../../components/LayoutAbout";
import SmallAwards from "../../components/SmallAwards";
import mypic from '../../public/images/AdR_About_Page_004.png'
import Arash from '../../public/images/Arash.jpg'
import upperArrow from '../../public/images/ADR-GraphicElementsNoBoundary_y.png'



export default function ContactUs(){
    return(
        <>
        <LayoutAbout>
            {/*trial */}
            {/*This is the yellow section with the title*/}
            <div className={utilStyles.yellowContactUsTitle}>
                <h3>Fill out the form below, shoot us an email or follow us on our social channels.</h3>
            </div>
        </LayoutAbout>
        <div className={utilStyles.form}>
            <form className={utilStyles.form} action="/api/event" method="post">
                <input className={utilStyles.input} required type="text" id="name" name="name" placeholder="Enter  name"></input>
                <input className={utilStyles.input} required type="text" id="email" name="email" placeholder="Enter email"></input>
                <input style={{height: 195}} className={utilStyles.input} required type="text" id="message" name="message" placeholder="Enter message"></input>
                <button type="submit" >Create new event</button>
            </form>
        </div>
        
        
        <Footer></Footer>
        </>
        
    );
}

