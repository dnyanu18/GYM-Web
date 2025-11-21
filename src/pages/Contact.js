// src/pages/Contact.js
import React from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <main className="page contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Visit us or send a message.</h1>
        <p className="subtitle">
          Have questions about memberships, timings, or personal training?
          Fill out the form and we&apos;ll get back to you within 24 hours.
        </p>
      </section>

      <section className="contact-grid">
        {/* Left side - info card */}
        <div className="contact-card contact-info-card">
          <h2>PowerFit Gym</h2>
          <p className="contact-tagline">
            Transform your body and mind with modern equipment, expert trainers,
            and science-backed workout plans.
          </p>

          <div className="contact-info-group">
            <h3>Visit Us</h3>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="contact-info-group">
            <h3>Contact</h3>
            <p>Phone: <span>+91 98765 43210</span></p>
            <p>Email: <span>support@ironpulse.fit</span></p>
          </div>

          <div className="contact-info-group">
            <h3>Hours</h3>
            <p>Mon – Fri: 5:00 AM – 10:00 PM</p>
            <p>Sat – Sun: 6:00 AM – 9:00 PM</p>
          </div>

          <div className="contact-highlight">
            <p>🏋️‍♂️ Free trial session for first-time visitors.</p>
          </div>
        </div>

        {/* Right side - form card */}
        <div className="contact-card contact-form-card">
          <h2>Send us an enquiry</h2>
          <p className="form-subtitle">
            Tell us about your goals and we&apos;ll help you choose the right plan.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Dnyaneshwar Patil"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="interest">I&apos;m interested in</label>
                <select id="interest" defaultValue="membership">
                  <option value="membership">Membership plans</option>
                  <option value="personal-training">Personal training</option>
                  <option value="classes">Group classes</option>
                  <option value="nutrition">Nutrition coaching</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Goals</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us about your fitness goals, current routine, or any injuries we should know about..."
              />
            </div>

            <button type="submit" className="primary-btn contact-btn">
              Submit Enquiry
            </button>

            <p className="privacy-note">
              We respect your privacy. Your details are only used to contact you
              about your enquiry.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
