import React from 'react';
import { Phone, Mail, MapPin, Link, Clock } from 'lucide-react';
import logo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer-main">
      {/* Hanging Circle CTA */}
      <div className="cta-circle-wrapper">
        <div className="cta-circle">
          <div className="cta-circle-content">
            <span className="cta-circle-text">Request a Tailored <br /> Cleaning Plan</span>
          </div>
        </div>
      </div>

      <div className="footer-content bg-navy text-white">
        <div className="container">
          <div className="footer-grid">
            {/* Brand & Contact */}
            <div className="footer-col">
              <img src={logo} alt="CleanEra Logo" className="footer-logo mb-6" />
              <ul className="footer-contact">
                <li><Phone size={16} className="contact-icon" /> 416-207-9500</li>
                <li><Mail size={16} className="contact-icon" /> support@getcleanera.com</li>
                <li><MapPin size={16} className="contact-icon" /> Suite 750, Robert Speck Parkway</li>
              </ul>
            </div>

            {/* Quick Links */}
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

            {/* Services */}
            <div className="footer-col">
              <h3 className="footer-col-title">Services</h3>
              <ul className="footer-links">
                <li><a href="#commercial">Commercial Cleaning</a></li>
                <li><a href="#specialized">Specialized Cleaning Services</a></li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="footer-col">
              <h3 className="footer-col-title">Business Hours</h3>
              <ul className="footer-hours">
                <li>
                  <Clock size={16} className="contact-icon" />
                  <span>Office: Monday - Friday 9 AM - 5 PM</span>
                </li>
                <li className="shift-right">Cleaning services available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">Copyright © 2026. Design & Developed by Geeks Root.</p>
            <div className="social-pills">
              <a href="#" className="social-pill">
                <Link size={14} /> <span>LinkedIn</span>
              </a>
              <a href="#" className="social-pill">
                <Link size={14} /> <span>Facebook</span>
              </a>
              <a href="#" className="social-pill">
                <Link size={14} /> <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-main {
          position: relative;
          margin-top: 100px;
        }

        .cta-circle-wrapper {
          position: absolute;
          top: -110px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .cta-circle {
          width: 220px;
          height: 220px;
          background: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px; /* For the gradient border effect */
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        /* Gradient Border Trick */
        .cta-circle::before {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          border-radius: 50%;
          padding: 6px; 
          background: linear-gradient(135deg, #42B79A 0%, #1A6991 100%);
          -webkit-mask: 
             linear-gradient(#fff 0 0) content-box, 
             linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .cta-circle-content {
          text-align: center;
        }

        .cta-circle-text {
          font-size: 18px;
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.3;
          display: block;
        }

        .footer-content {
          background-color: #001A33; /* Deep Navy */
          padding: 120px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-col-title {
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 24px;
        }

        .footer-logo {
          height: 50px;
          width: auto;
          margin-bottom: 30px;
        }

        .footer-contact, .footer-links, .footer-hours {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact li, .footer-links li, .footer-hours li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.5;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #42B79A;
        }

        .contact-icon {
          color: #FFFFFF;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .shift-right {
          margin-left: 28px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .social-pills {
          display: flex;
          gap: 12px;
        }

        .social-pill {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-pill:hover {
          background: #42B79A;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .cta-circle {
            width: 180px;
            height: 180px;
          }
          .cta-circle-text {
            font-size: 15px;
          }
          .cta-circle-wrapper {
            top: -90px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
          .social-pills {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
