import React from 'react';
import BannerImg from '../bannerImg';
import GiftsAndPartiesContent from './gPcontent';

import gPimg from '../../assets/images/banners/gifts-parties-image.jpg';


const GiftsAndParties = () => {
    return (
        <div>
            <BannerImg img={gPimg} altText="Macarons Homepage Image" />
            <GiftsAndPartiesContent />
        </div>
    )
};

export default GiftsAndParties;