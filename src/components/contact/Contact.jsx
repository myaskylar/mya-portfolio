import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import {MdConnectWithoutContact} from 'react-icons/md';
import {ImWhatsapp} from 'react-icons/im'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // const SERVICE = process.env.React_App_SERVICE_ID;
    // const TEMPLATE = process.env.React_App_TEMPLATE_ID;
    // const PUBLIC = process.env.React_App_PUBLIC_KEY;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bamc80c",
        "template_wj0tzpn",
        form.current,
        "yTY27d2-5E5QrO46o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
      window.alert("Message send");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mya_skylar@outlook.com</h5>
            <a
              href="mailto:mya_skylar@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Massage
            </a>
          </article>

          <article className="contact__option">
            <MdConnectWithoutContact className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mya Skylar</h5>
            <a
              href="https://www.linkedin.com/in/mya-skylar-290838221/"
              target="_blank"
              rel="noreferrer"
            >
              Network
            </a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatapps</h4>
            <h5>sample</h5>
            <a
              href="https://api.whatsapp.com/send?phone=447448251272"
              target="_blank"
              rel="noreferrer"
            >
              Send Massage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your email" required />
          <textarea
            name="massage"
            rows="7"
            placeholder="Your massage"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
