import React from 'react';
import BannerImg from '../bannerImg';
import HomeContent from './homeContent';
import SampleMenu from './sampleMenu'

import homeImg from '../../assets/images/banners/welcome-image.jpg';


const Homepage = () => {
    return (
        <div>
            <BannerImg img={homeImg} altText="Macarons Homepage Image" />
            <HomeContent />
            <SampleMenu />
        </div>
    )
};

export default Homepage;