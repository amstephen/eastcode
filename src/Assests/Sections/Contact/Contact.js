import React from "react";
import "./Contact.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <h1>Get In Touch Today</h1>
      <p>
        Let Our Agent ask you a couple of questions and then we will contact
        you, it takes no more than 3 mins
      </p>
      <div id="social-links">
      <FaWhatsapp id="whatsapp"/>
      <FaInstagram id="instagram" />
      <FaTwitter id="twitter" />
      <FaLinkedin id="linkedin" />
      </div>
      
    </div>
  );
}

export default Contact;
