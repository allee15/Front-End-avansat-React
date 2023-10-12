import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUsPage() {
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
        <div>
            <h1>Contact Us</h1>
            <h2>If you're interested in adopting one of our pets, write us here its name, how can we reach out to you and we will come as soon as possible with a response to you!</h2>
            <form onSubmit={sendEmail}>
                <textarea style={{width: '100%', height: '200px', paddingLeft: '20px', paddingRight: '20px'}} value={message} onChange={e => setMessage(e.target.value)} name="message"></textarea>
                <button style={{backgroundColor: 'darkslategrey', color: 'white', width: '100%', height: '50px'}} type="submit">Send</button>
            </form>
            <ToastContainer />
        </div>
    );
}



