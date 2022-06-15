import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {SiCodewars} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mya-skylar-290838221/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="icon-size" />
      </a>
      <a href="https://github.com/myaskylar/" target="_blank" rel="noreferrer">
        <BsGithub className="icon-size" />
      </a>
      <a
        href="https://www.codewars.com/users/myaskylar"
        target="_blank"
        rel="noreferrer"
      >
        <SiCodewars className="icon-size" />
      </a>
    </div>
  );
};

export default HeaderSocials;
