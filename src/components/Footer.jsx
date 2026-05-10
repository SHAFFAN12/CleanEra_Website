import React from 'react';

import logo from '../assets/footer-logo.png';
import clock from "../assets/clock.png"
import phone from "../assets/phone-call.png"
import email from "../assets/email.png"
import location from "../assets/location.png"
const Footer = () => {
  return (
    <footer className="footer-main">
      {/* CTA Circle Badge */}
      <div className="cta-circle-wrapper">
        <div className="cta-circle-container">
          {/* Layer 1: White circle with text */}
          <div className="cta-circle-white">
            <span className="cta-circle-text">Request a Tailored<br />Cleaning Plan</span>
          </div>
          {/* Layer 2: Gradient border circle — transparent center, sits on top */}
          <div className="cta-circle-border"></div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* Column 1: Logo + Contact */}
            <div className="footer-col">
              <img src={logo} alt="CleanEra Logo" className="footer-logo" />
              <ul className="footer-contact">
                <li>
                  <img src={phone} className="contact-icon-img" />
                  <span>416-207-9500</span>
                </li>
                <li>
                  <img src={email} className="contact-icon-img" />
                  <span>support@getcleanera.com</span>
                </li>
                <li>
                  <img src={location} className="contact-icon-img" />
                  <span>Suite 750, Robert Speck Parkway</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Link */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Link</h3>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#facilities">Facilities Served</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-col">
              <h3 className="footer-col-title">Services</h3>
              <ul className="footer-links">
                <li><a href="#commercial">Commercial Cleaning</a></li>
                <li><a href="#specialized">Specialized Cleaning Services</a></li>
              </ul>
            </div>

            {/* Column 4: Business Hours */}
            <div className="footer-col">
              <h3 className="footer-col-title">Business Hours</h3>
              <ul className="footer-hours">
                <li>
                  <img src={clock} alt="clock" className="contact-icon-img" />
                  <span>Office: Monday - Friday 9 AM - 5 PM</span>
                </li>
                <li className="hours-plain">
                  Cleaning services available 24/7
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright">Copyright © 2026. Design &amp; Developed by Geeks Root.</p>
          <div className="social-pills">
            <a href="#" className="social-pill">
              <span className="social-icon">in</span>
              <span>linkedin</span>
            </a>
            <a href="#" className="social-pill">
              <span className="social-icon">f</span>
              <span>facebook</span>
            </a>
            <a href="#" className="social-pill">
              <span className="social-icon">@</span>
              <span>instagram</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ========= Footer Wrapper ========= */
        .footer-main {
          position: relative;
          margin-top: 100px;
        }

        /* ========= CTA Circle Badge ========= */
        .cta-circle-wrapper {
          position: absolute;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        /* Container — sized to white circle */
        .cta-circle-container {
          position: relative;
          width: 180px;
          height: 180px;
        }

        /* Layer 1: White circle with text */
        .cta-circle-white {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          z-index: 1;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .cta-circle-text {
          font-size: 17px;
          font-weight: 700;
          color: #0D1B2A;
          line-height: 1.3;
          display: block;
        }

        /* Layer 2: Gradient border circle (larger, transparent inside) */
        .cta-circle-border {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border-radius: 50%;
          z-index: 2;
          pointer-events: none;
          /* Smooth blend: green → teal */
          background: conic-gradient(
            from -90deg,
            #2ECC71 0deg,
            #1A6B8A 360deg
          );
          /* Mask: transparent center, show only outer 7px ring */
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 8px),
            black calc(100% - 7px)
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 8px),
            black calc(100% - 7px)
          );
        }

        /* ========= Main Footer Body ========= */
        .footer-body {
          background-color: #001B42;
          padding: 110px 0 48px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1.2fr 1.4fr;
          gap: 50px;
          margin-top: 40px;
        }

        .footer-logo {
          height: 60px;
          width: auto;
          margin-bottom: 28px;
          display: block;
        }

        /* Column Headings */
        .footer-col-title {
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        /* Contact list */
        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #E0E0E0;
          font-size: 15px;
          line-height: 1.5;
        }

        .contact-icon {
          color: #FFFFFF;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-icon-img {
          width: 15px;
          height: 15px;
          object-fit: contain;
          flex-shrink: 0;
          margin-top: 2px;
          filter: brightness(0) invert(1); /* makes it white */
        }

        /* Nav links list */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #D0D8E4;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #2ECC71;
        }

        /* Hours list */
        .footer-hours {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-hours li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #D0D8E4;
          font-size: 15px;
          line-height: 1.5;
        }

        .hours-plain {
          color: #D0D8E4;
          font-size: 15px;
          padding-left: 0;
        }

        /* ========= Bottom Bar ========= */
        .footer-bottom-bar {
          background-color: #001B42;
          padding: 16px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-size: 14px;
          color: #A0AABB;
          margin: 0;
        }

        /* Social pills */
        .social-pills {
          display: flex;
          gap: 9px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #284D83;
          color: #FFFFFF;
          font-size: 14px;
          padding: 8px 16px;
          border-radius: 22px;
          text-decoration: none;
          transition: background 0.3s ease;
          height: 34px;
        }

        .social-pill:hover {
          background: #2ECC71;
          color: #0A1628;
        }

        .social-icon {
          font-weight: 700;
          font-size: 15px;
        }

        /* ========= Responsive ========= */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .social-pills {
            justify-content: center;
            flex-wrap: wrap;
          }
          .cta-circle-wrapper {
            top: -90px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
