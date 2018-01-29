import React, {Component} from 'react';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(e) {
        const {value, name} = e.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.form);
        this.reset();
    }
    reset() {
        this.setState({
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            }
        }, ()=>{
            console.log(this.state)
        });
    }
    render() {
        const contactFormStyle = {
            paddingLeft: "20px",
        };
        const {name, email, phone, subject, message} = this.state.form;

        return (
        <div className="contact-form">
            <h3 style={contactFormStyle}>Contact Form</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} placeholder="Name" onChange={this.handleInputChange}/>
                <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleInputChange}/>
                <input type="tel" name="phone" value={phone} placeholder="Phone" onChange={this.handleInputChange}/>
                <input type="text" name="subject" value={subject} placeholder="Subject" onChange={this.handleInputChange}/>
                <textarea name="message" value={message} placeholder="Message" onChange={this.handleInputChange}></textarea>
                <button>SEND</button>
            </form>
        </div>
        )
    }
}

export default ContactForm;