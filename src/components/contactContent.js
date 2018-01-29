import React from 'react';
import ContactForm from './contactForm';

import macImg from '../assets/images/macarons-image.png';

const ContactContent = () => {
    const macGraphicStyle = {
        marginBottom: "22%",
        paddingLeft: "35px"
    };
    return (
        <div className="main-content">
            <div className="contact-page-text">
                <h3>Visit Us</h3>
                <p>Monday - Friday | 10am - 9pm</p>
                <p>Saturday | 10am - 8pm</p>
                <p>Sunday | 11am - 7pm</p>
                <p>Closed Thanksgiving Day, Christmas and Easter Day</p>
                <p className="paragraph-line-gap">1625 Post St</p>
                <p>San Francisco, CA 94115</p>
                <p className="paragraph-line-gap">949-800-3111</p>
                <p className="paragraph-line-gap"><span>orders@mboutique.com</span></p>
                <p className="paragraph-line-gap">Send your questions, comments and flavor suggestions or place an order!</p>
            </div>
            <ContactForm />
            <div className="aside-image">
                <img src={macImg} alt="Macarons graphic" style={macGraphicStyle}/>
            </div>
        </div>
    )
};

export default ContactContent;