import React from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import "./contactsection.css";

const ContactPart = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-heading">
          <h2>Let's Connect</h2>
          <p>
            I'm open to new opportunities and exciting projects.
            Let's build something awesome together!
          </p>
        </div>

        {/* Email */}
        <a
          href="mailto:arnab@gmail.com"
          className="contact-card"
        >
          <div className="icon-wrapper">
            <FaEnvelope size={20} />
          </div>

          <div>
            <h4>Email Me</h4>
            <span>arnab@gmail.com</span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/arnabpaul"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon-wrapper">
            <FaLinkedinIn size={20} />
          </div>

          <div>
            <h4>LinkedIn</h4>
            <span>linkedin.com/in/arnabpaul</span>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/arnabpaul"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon-wrapper">
            <FaGithub size={20} />
          </div>

          <div>
            <h4>GitHub</h4>
            <span>github.com/arnabpaul</span>
          </div>
        </a>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="resume-btn-contact"
        >
          <FaDownload size={18} />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ContactPart;