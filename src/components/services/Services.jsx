import React, { useEffect } from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="services">
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service" data-aos="fade-up">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Creating visually appealing, brand strengthening digital
                interfaces that attract and retain users.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Adaptability, communication, collaboration and teamwork.
                Problem-solving and Design thinking. A user-centric mindset,
                Attention to detail, Creative and analytical approach.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Creating user and customer experiences designed to have engaging
                user interfaces (UI) and deliver tangible business results.
              </p>
            </li>
          </ul>
        </article>

        <article className="service" data-aos="fade-up">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Writing efficient code and creating website using standard
                HTML/CSS, JavaScript and REACT practices.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Creating/managing Database and deploy on HEROKU.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Researching different software programs, maintaining software.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Implementing contingency plans in case the website goes down.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <BsCheck className="service__list-icon" />
                Maintaining, expanding and enhancing the website once built.
              </p>
            </li>
          </ul>
        </article>

        <article className="service" data-aos="fade-up">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                <BsCheck className="service__list-icon" />
                Working closely with web designers and programmers to produce
                the website.
              </p>
            </li>
            <li>
              <p>
                <BsCheck className="service__list-icon" />
                Constant communication with other colleagues in the business to
                develop and deploy their content, and ensuring there is a clear
                establishment of what can be created within what timeframe.
              </p>
            </li>
            <li>
              <p>
                <BsCheck className="service__list-icon" />
                Meeting with the development team and discussing clients
                requirements and proposed solutions with a senior developer.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
