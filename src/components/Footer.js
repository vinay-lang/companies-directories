import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>CompanyDirectory</strong>
          <p className="muted">© {new Date().getFullYear()} • Built by you</p>
        </div>
        <div className="footer-links">
         <a href="/" aria-label="Privacy Policy">Privacy</a>
<a href="/" aria-label="Terms and Conditions">Terms</a>
<a href="/" aria-label="Contact Us">Contact</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
