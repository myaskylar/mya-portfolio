import React from 'react'
import "./nav.css"
import { AiOutlineUser } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import {RiSuitcaseLine} from 'react-icons/ri'
import { MdOutlineContactPhone } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("# ");
  return (
    <nav>
      <a
        href="# "
        onClick={() => setActiveNav("# ")}
        className={activeNav === "# " ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiBookOpen />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsLaptop />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiSuitcaseLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
}

export default Nav