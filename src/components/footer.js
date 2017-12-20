import React from 'react';
import emailLogo from "../assets/images/mail.png";
import phoneLogo from "../assets/images/phone.png";
import fbLogo from "../assets/images/facebook.png";
import twitterLogo from "../assets/images/twitter.png";


const Footer = () => {
    return (
        <footer>
            <section className="contact-container">
                <div className="footer-contact-1"><img src={emailLogo} alt="email logo"/> order@mboutique.com</div>
                <div className="footer-contact-2"><img src={phoneLogo} alt="phone number logo"/> 949-800-3111</div>
                <div className="footer-contact-3">Follow us <a href="#"><img src={fbLogo} alt="Facebook icon"/></a> <a href="#"><img src={twitterLogo} alt="twitter icon"/></a></div>
            </section>
            <p>Copyright &copy; 2017 MBoutique. All rights reserved.</p>
        </footer>
    );
};

export default Footer;