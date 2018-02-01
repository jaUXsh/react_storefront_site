import React from 'react';
import BannerImg from '../bannerImg';
import OurMacaronContent from './ourMacaronContent';

import ourMacaron from '../../assets/images/banners/our-macarons-image.jpg';


const OurMacaron = () => {
    return (
        <div>
            <BannerImg img={ourMacaron} altText="Macarons Homepage Image" />
            <OurMacaronContent />
        </div>
    )

};

export default OurMacaron;