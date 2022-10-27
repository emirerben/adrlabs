import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutAboutUs from "../components/Header";
import Head from 'next/head';
import Image from 'next/future/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import mainpic from '../public/images/AdR_HomePage_008-bw2.png'
import mainarrow from '../public/images/ADR-GraphicElements_vcopy.png'
import adrlogo from '../public/images/ADR-Logo-01.png'
import LayoutAbout from "../components/LayoutAbout";


export default function About(){
    return(
        <LayoutAbout>
            <div className={utilStyles.yellowTitle}>
                <h1>ARCHITECTURE<br></br>COMPUTATIONAL DESIGN<br></br>ROBOTIC CONSTRUCTION</h1>
                <h3>ABOUT US</h3>
            </div>
        </LayoutAbout>

        
    );
}