import React from "react";

const Experience = ({ experience = [] }) => {
  return (
    <section className="panel panel-experience">
      <div className="panel-heading">
        <h3>Experience / Journey</h3>
      </div>

      <div className="timeline">
        {experience.map((e) => (
          <div key={e.id} className="timeline-item">
            <div className="timeline-left">
              <strong>{e.role}</strong>
              <div className="muted">{e.company}</div>
              <div className="muted small">{e.period}</div>
            </div>
            <div className="timeline-right">
              <p className="muted">{e.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
