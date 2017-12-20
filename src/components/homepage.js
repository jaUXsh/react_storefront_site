import React from 'react';
import Header from './header';
import Footer from './footer';
import BannerImg from './bannerImg';
import homeImg from '../assets/images/welcome-image.png';
import HomeContent from './homeContent';
import SampleMenu from './sampleMenu'

const Homepage = () => {
    return (
        <div>
            <Header />
            <BannerImg img={homeImg} altText="Macarons Homepage Image"/>
            <HomeContent />
            <SampleMenu />
            <Footer />
        </div>
    )
};

export default Homepage;