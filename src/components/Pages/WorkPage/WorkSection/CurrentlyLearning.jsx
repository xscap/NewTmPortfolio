import React from "react";

const CurrentlyLearning = ({ list = [] }) => {
  return (
    <>
      <div className="panel-heading">
        <h3>Currently Learning</h3>
      </div>
      <section className="panel">
        <ul className="panel-list">
          {list.map((item) => (
            <li key={item.id} className="panel-item">
              <span className="dot" />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CurrentlyLearning;
