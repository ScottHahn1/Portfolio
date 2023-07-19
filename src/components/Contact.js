import { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8cuqujx', 'template_vmgi57b', form.current, 'XW4QQqRQU3p_X7Vr3')
        .then((result) => {
            alert('E-mail Sent!');
            e.target.reset();
        }, (error) => {
            alert(error.text);
        });
    };

    return (
        <div className='contact-container'>
        <div className='contact'>
            <h2>Contact</h2>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <label>Name:</label> 
                <input type="text" name="user_name" required /> 
                <label>E-mail:</label>
                <input type="email" name="user_email" required />
                <label>Message:</label>
                <textarea name="message" />
                <input className='submit' type="submit" value="Send" />
            </form>
        </div>
        </div>
    )
}

export default Contact;