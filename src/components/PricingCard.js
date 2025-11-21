import React from "react";


function PricingCard({ name, price, period, features, highlighted }) {
  return (
    <article className={`pricing-card ${highlighted ? "pricing-highlight" : ""}`}>
      <h3>{name}</h3>
      <p className="pricing-price">
        ₹{price}
        <span> / {period}</span>
      </p>
      <ul>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button className={highlighted ? "btn-primary" : "btn-outline"}>
        Choose plan
      </button>
    </article>
  );
}

export default PricingCard;
