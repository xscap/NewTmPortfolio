import React from "react";
import "./heroabout.css";
import { cardData } from "../../../../assets/data.jsx";

const HeroAbout = () => {
  return (
    <section className="about-section" id="about-cards">
      <div className="about-section-inner">
        <div className="about-section-header">
          <span className="about-label">About Me</span>
          <h2>My Story &amp; Skills</h2>
          <p>
            I create modern frontend experiences with React, JavaScript and
            visually polished, responsive layouts. These cards highlight what I
            do and why I work the way I do.
          </p>
        </div>

        <div className="about-cards-section">
          {cardData.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.id} className="about-card">
                <div className="about-card-icon">
                  {Icon ? <Icon size={24} /> : null}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
