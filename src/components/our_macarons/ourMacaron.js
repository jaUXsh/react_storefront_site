import React from 'react';
import Header from '../header';
import Footer from '../footer';
import BannerImg from '../bannerImg';
import OurMacaronContent from './ourMacaronContent';

import ourMacaron from '../../assets/images/our-macarons-image.png';


const OurMacaron = () => {
    return (
        <div>
            <Header />
            <BannerImg img={ourMacaron} altText="Macarons Homepage Image" />
            <OurMacaronContent />
            <Footer />
        </div>
    )

};

export default OurMacaron;