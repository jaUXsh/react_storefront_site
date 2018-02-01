import React from 'react';
import BannerImg from '../bannerImg';
import ContactContent from './contactContent';

import contactImg from '../../assets/images/banners/contact-image.jpg';

const Contact = () => {
    return (
        <div>
            <BannerImg img={contactImg} altText="Contact Map Image" />
            <ContactContent />
        </div>
    )
};

export default Contact;