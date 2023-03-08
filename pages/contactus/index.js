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
import { useMemo, useState } from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import CustomCursor from "../../components/Cursor";


export default function ContactUs(){
    const [isError, setIsError] = useState(null);
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    if(!isLoaded) return <div>Loading...</div>
    
    


    async function handleOnSubmit(event){
        event.preventDefault();
        const formData = {}
        Array.from(event.currentTarget.elements).forEach(field => {
            if( !field.name) return;
            formData[field.name] = field.value;
        });
        fetch('/api/contact', {
            method:'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            console.log("Response received");
            setIsError(false);
          }).catch(() => {setIsError(true)});
        console.log(formData);
        event.target.reset();
    }

    return(
        <>
        <LayoutAbout>
        <CustomCursor />
            {/*trial */}
            {/*This is the yellow section with the title*/}
            <div className={utilStyles.yellowContactUsTitle}>
                <h3>Fill out the form below, shoot us an email or follow us on our social channels.</h3>
            </div>
        </LayoutAbout>
        <div className={utilStyles.formContainer}>
            <form className={utilStyles.form} onSubmit={handleOnSubmit} method="post">
                <input className={utilStyles.input} required type="text" id="name" name="name" placeholder="Enter  name"></input>
                <input className={utilStyles.input} required type="text" id="email" name="email" placeholder="Enter email"></input>
                <input style={{height: 195}} className={utilStyles.input} required type="text" id="message" name="message" placeholder="Enter message"></input>
                <div  style={{marginTop: 10}} className={utilStyles.textArrow}>
                    <button className={utilStyles.submit} type="submit" >SEND</button>
                    <Image className={utilStyles.smallUpperArrow}
                        src={mainarrow}
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                </div>
                {/* if there is an error with the submission, show an error notification */}
                { isError === true && (

                <div>Error!</div>
                ) }
                {/* if there is no error with the submission, show a block that says success */}
                { isError === false && (

                <div className={utilStyles.sucessfulSubmissionBlock}>
                    <p>Thank you for reaching out, <br></br>We will get back to you soon!</p>
                </div>
                
                ) }
            </form>
            {/* <Image 
                src={"/images/Map.png"}
                width={360}
                height={435}
                paddingTop={40}
            /> */}
            <GoogleMap className={utilStyles.mapContactUs} zoom={13} center={{lat: 42.289558, lng: -83.717043}}>
                <Marker position={{lat: 42.289558, lng: -83.717043}} />
                bacground
                bacgroundbacgroundbacground
            </GoogleMap>
            <script
            src="https://maps.googleapis.com/maps/api/js?key={googleMapsApiKey}"
            defer
            ></script>
        </div>
        <div className={utilStyles.headerbreakerBlack_top}></div>
        <div className={utilStyles.bottomContainer}>
        <p>Adel Design Research (ADR) <br></br>
            2000 Bonisteel Boulevard<br></br>
            Ann Arbor, MI 48109-2069<br></br>
            Phone: +1 (734) 763 8228<br></br><br></br>

            Arash Adel, Director<br></br>
            aaadel@umich.edu  
        </p>
        <Link href="https://www.instagram.com/adr_laboratory/">
                    <Image className={utilStyles.adrsocial_footer}
                        src={"/images/instagram-icon.png"}
                        alt="ADR Instagram"
                        height={21}
                        width={21}
                    />
                </Link>
                <Link href="https://www.linkedin.com/company/adr-laboratory/about/">
                    <Image className={utilStyles.adrsociallinkedin_footer}
                        src={"/images/linkedin.png"}
                        alt="ADR LinkedIn"
                        height={18}
                        width={18}
                    />
                </Link>
        
        </div>
        
        
        
        <Footer></Footer>
        </>
        
    );
}

function Map(){
    const center = useMemo(() => ({lat: 44, lng: -88}), []);
    return <GoogleMap zoom={10} center={center}>
        <Marker position={center} />
    </GoogleMap>

}

