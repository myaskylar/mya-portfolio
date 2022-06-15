import React from 'react'
import "./footer.css"
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href=" #" className="footer__logo">
        MYASKYLAR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mya-skylar-290838221/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/myaskylar/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.codewars.com/users/myaskylar"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodewars />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; mya. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer