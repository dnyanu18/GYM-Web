import React from "react";


function ClassCard({ title, level, duration, image, description }) {
  return (
    <article className="class-card">
      <div className="class-image">
        <img src={image} alt={title} />
        <span className="class-level">{level}</span>
      </div>
      <div className="class-body">
        <h3>{title}</h3>
        <p className="class-desc">{description}</p>
        <p className="class-meta">{duration} • Small group training</p>
      </div>
    </article>
  );
}

export default ClassCard;
