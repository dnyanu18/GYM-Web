import React from "react";
import { Link } from "react-router-dom";


const heroImage =
  "/gym.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-tag">Premium Training • Science-backed • 24/7</p>
          <h1>
            Build your <span>strongest</span> version.
          </h1>
          <p className="hero-sub">
            Join IronPulse and get personalised workout plans, expert trainers
            and a community that keeps you accountable.
          </p>
          <div className="hero-actions">
            <Link to="/pricing">
              <button className="btn-primary">View Memberships</button>
            </Link>
            <Link to="/classes">
              <button className="btn-outline">Explore Classes</button>
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <span>40k+</span>
              <p>Workouts completed</p>
            </div>
            <div>
              <span>35+</span>
              <p>Expert coaches</p>
            </div>
            <div>
              <span>4.9★</span>
              <p>Member rating</p>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-img-wrap">
            <img src={heroImage} alt="People training in the gym" />
            <div className="hero-badge hero-badge-top">
              <span className="dot-live" />
              Live Classes
            </div>
            <div className="hero-badge hero-badge-bottom">
              +300 kcal burned · Today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
