import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import './index.css';
import {Link, useNavigate} from "react-router-dom";
import ReusableButton from "../../components/reusablaComponents/ReusableButton";

export default function ContactUsPage() {
    const token = useSelector(state => state.authentication.token);
    const [message, setMessage] = useState()
    const navigate = useNavigate();

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

    useEffect(() => {
        if(!token) {
            navigate("/login")
        }
    })

    return (
        <div className="contactUsPage">
            <h1>Contact Us</h1>
            {token ? (
                <form onSubmit={sendEmail}>
                    <p className="grayText">If you're interested in adopting one of our pets, write us here its name, how can we reach out to you and we will come as soon as possible with a response to you!</p>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} name="message"></textarea>
                    <ReusableButton size="sm" variant="pink" type="submit">Send</ReusableButton>
                </form>
            ) : (
                <div>
                    <p>You have to log in before sending us a message!</p>
                    <Link to="/login">
                        <ReusableButton size="sm" variant="pink" type="button">Log in >></ReusableButton>
                    </Link>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}
