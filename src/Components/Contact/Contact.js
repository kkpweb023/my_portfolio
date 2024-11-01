import React from "react";
import "./Contact.css";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Contact = () => {


  return (
    <div className="contact_div" id="contact">
      <div className="contact_title">Contact Me</div>
      <div className="contact_desc">- get in touch -</div>
       <form className="contact_form">
            <input type={'text'} className="name" placeholder='Enter name'/>
            <input type={'email'} className="email" placeholder='Enter email'/>
            <textarea name="message" className="msg" rows="5" placeholder='Something type here...'></textarea>
            <button type="submit" className="submitBtn">Send Message</button>
        </form>
      <div className="cont_logo">
        <span className="find">Find me on:</span>
          <span className="contact_icons" >
            <FaFacebookSquare />
            <FaLinkedin />
            <FaGithubSquare />
            <IoCall />
          </span>
      </div>

      <footer className="footer">Created by <span>kkpweb023</span> | 2024 © All rights reserved.</footer>
    </div>
  );
};

export default Contact;
