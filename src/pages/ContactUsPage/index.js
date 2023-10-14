import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import './index.css';
import {Link} from "react-router-dom";

export default function ContactUsPage() {
    const token = useSelector(state => state.authentication.token);
    const [message, setMessage] = useState()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e7nt70t', 'template_c10k7xl', e.target, 'gJcEBYj0HnQj8Vf1Y')
            .then((result) => {
                setMessage("");
                toast.success("Message successfully sent!");
            }, (error) => {
                toast.error("An error has occured. Try again!");
            });
    };

    return (
        <div className="contactUsPage">
            <h1>Contact Us</h1>
            {token ? (
                <form onSubmit={sendEmail}>
                    <p className="grayText">If you're interested in adopting one of our pets, write us here its name, how can we reach out to you and we will come as soon as possible with a response to you!</p>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} name="message"></textarea>
                    <button style={{backgroundColor: 'palevioletred', color: 'white'}} type="submit" className='btn btn-success'>Send</button>
                </form>
            ) : (
                <div>
                    <p>You have to log in before sending us a message!</p>
                    <Link to="/login">
                        <button style={{backgroundColor: 'palevioletred', color: 'white'}} type="button" className='btn btn-success'>Log in >></button>
                    </Link>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}
