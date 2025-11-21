import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>
            Iron<span>Pulse</span>
          </h3>
          <p>
            Transform your body and mind with science-backed training and
            world-class coaches.
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Contact</h4>
            <p>Pune, Maharashtra, India</p>
            <p>+91 98765 43210</p>
            <p>support@ironpulse.fit</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon – Fri: 5:00 AM – 10:00 PM</p>
            <p>Sat – Sun: 6:00 AM – 9:00 PM</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} IronPulse Fitness. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
