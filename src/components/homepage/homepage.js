import React from 'react';
import Header from '../header';
import Footer from '../footer';
import BannerImg from '../bannerImg';
import HomeContent from './homeContent';
import SampleMenu from './sampleMenu'

import homeImg from '../../assets/images/banners/welcome-image.jpg';


const Homepage = () => {
    return (
        <div>
            <Header />
            <BannerImg img={homeImg} altText="Macarons Homepage Image" />
            <HomeContent />
            <SampleMenu />
            <Footer />
        </div>
    )
};

export default Homepage;