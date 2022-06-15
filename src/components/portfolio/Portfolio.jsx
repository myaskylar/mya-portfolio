import React, { useEffect } from "react";
import "./portfolio.css";
import img from '../../images/cyf.png';
import img2 from '../../images/tv.png';
import img3 from '../../images/port.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {

   useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item" data-aos="zoom-in">
          <div className="porfolio__item-image">
            <img src={img} alt="page name" />
          </div>
          <h3>CYF Energiser App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/myaskylar/Algorithm-doctors-finalProject"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://algorithm-doctors-energisersv1.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item" data-aos="zoom-in">
          <div className="porfolio__item-image">
            <img src={img2} alt="page name" />
          </div>
          <h3>TV Programme Suggestion App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/myaskylar/tv-show-dom-project"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://cyf-myaskylar-tv.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item" data-aos="zoom-in">
          <div className="porfolio__item-image">
            <img src={img3} alt="page name" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/myaskylar/mya-portfolio"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://myaskylarportfolio.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
