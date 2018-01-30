import React from 'react';
import Header from '../header';
import Footer from '../footer';
import BannerImg from '../bannerImg';
import GiftsAndPartiesContent from './gPcontent';

import gPimg from '../../assets/images/gifts-parties-image.png';


const GiftsAndParties = () => {
    return (
        <div>
            <Header />
            <BannerImg img={gPimg} altText="Macarons Homepage Image" />
            <GiftsAndPartiesContent />
            <Footer />
        </div>
    )
};

export default GiftsAndParties;