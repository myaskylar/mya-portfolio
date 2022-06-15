import React from "react";
import "./about.css";
import laptop from "../../images/dev.webp";
import CTA from "../header/CTA";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__content">
          <h2>Hello I'm Mya Skylar,</h2>
          <p>
            A full stack web developer who recently graduated from
            CodeYourFuture. I'm a hardworking, self-motivated and diligent
            individual, excited to begin my career within IT and Software
            Development. During the lockdown I've started to learn coding.
            Throughout the codeyourfuture course I've discovered my interest in
            programming languages and web development. I'm passionate about
            learning, enjoy overcoming challenges and turning them into a
            beautiful interface. My specialty is front-end web design and
            development, collaboration and networking.
          </p>

          <CTA />
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={laptop} alt="Pic of lady with laptop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
