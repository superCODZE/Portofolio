import './App.css';
import React from "react";

function ContactTxt() {
    const year = new Date().getFullYear();
    return (
        
        <>
        <div className='contact-txt'>
            <h2 className='contact-title'>Contact Me</h2>
            <p>Have a project in mind or want to collaborate with me You can contact me directly by sending a message or reach out through my social media profiles I am always open to discussing new ideas projects or opportunities and I will get back to you as soon as possible</p>
            
        </div>
        <h4 className='copyRights'>Copy Rights {year}, All rights reserved</h4>
        </>
    )

}

export default ContactTxt;
