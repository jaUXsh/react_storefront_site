import React from 'react';
import Header from '../header';
import Footer from '../footer';
import BannerImg from '../bannerImg';
import ContactContent from './contactContent';

import contactImg from '../../assets/images/banners/contact-image.jpg';

const Contact = () => {
    return (
        <div>
            <Header />
            <BannerImg img={contactImg} altText="Contact Map Image" />
            <ContactContent />
            <Footer />
        </div>
    )
};

export default Contact;