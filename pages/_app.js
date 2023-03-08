import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
    // <Head>
    //     <script
    //         src="https://maps.googleapis.com/maps/api/js?key={googleMapsApiKey}"
    //         defer
    //     ></script>
    // </Head>
}

