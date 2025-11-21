import React from "react";


function TrainerCard({ name, role, image, specialties }) {
  return (
    <article className="trainer-card">
      <div className="trainer-image">
        <img src={image} alt={name} />
      </div>
      <div className="trainer-body">
        <h3>{name}</h3>
        <p className="trainer-role">{role}</p>
        <p className="trainer-spec">{specialties}</p>
      </div>
    </article>
  );
}

export default TrainerCard;
