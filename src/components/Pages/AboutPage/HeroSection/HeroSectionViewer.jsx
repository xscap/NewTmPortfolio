import React from "react";
import "./herosection.css";
import { heroData } from "../../../../assets/data";
import { MapPin, Download, Send, ArrowRight, } from "lucide-react";
import { Link } from "react-router-dom";

// OPTIONAL IF USING IMPORT METHOD
// import profileImg from "../../../../assets/image(5).png";

const HeroSectionViewer = () => {
  const [hero] = heroData;

  return (
    <section className="hero-section" id="about">
      {/* LEFT SIDE */}
      <div className="hero-content">
        <span className="hero-tag">👨‍💻 About Me</span>

        <h1 className="hero-title">
           <span>{hero?.title}</span>
        </h1>

        <h3 className="hero-role">{hero?.role}</h3>

        <p className="hero-description">{hero?.description}</p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <Link to="/work" className="primary-btn">
            View My Work <ArrowRight size={18} />
          </Link>

          <button className="secondary-btn">
            Download Resume <Download size={18} />
          </button>

          <Link to="/contact" className="secondary-btn">
            Contact Me <Send size={18} />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image-wrapper">
        <div className="hero-image-card">
          <img
            src={hero?.image}

            // IF USING IMPORT METHOD
            // src={profileImg}

            alt="profile"
            className="hero-image"
          />
        <div className="location-badge-container" style={{textAlign: "center"}}>
          <div className="location-badge">
            <MapPin size={16} />
            <span>{hero?.location}</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionViewer;