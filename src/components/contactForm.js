import React, {Component} from 'react';


class ContactForm extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const contactFormStyle = {
            paddingLeft: "20px",
        };

        return (
        <div className="contact-form">
            <h3 style={contactFormStyle}>Contact Form</h3>
            <form>
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="tel" name="phone" placeholder="Phone"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea name="message" placeholder="Message"></textarea>
                <button>SEND</button>
            </form>
        </div>
        )
    }
}

export default ContactForm;