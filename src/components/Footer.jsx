import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-navy text-white">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Contact */}
          <div className="footer-col">
            <img src={logo} alt="CleanEra Logo" className="footer-logo mb-6" />
            <ul className="footer-contact">
              <li><Phone size={18} /> 416-207-9500</li>
              <li><Mail size={18} /> support@getcleanera.com</li>
              <li><MapPin size={18} /> Suite 750, Robert Speck Parkway</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
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
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#commercial">Commercial Cleaning</a></li>
              <li><a href="#specialized">Specialized Cleaning Services</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="footer-col">
            <h3>Business Hours</h3>
            <ul className="footer-links">
              <li>Office: Monday - Friday 9 AM - 5 PM</li>
              <li>Cleaning services available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2026. Design & Developed by Geeks Root.</p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Globe size={20} /></a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 5rem 0 2rem;
          background-color: var(--primary);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-col h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--white);
        }
        .footer-logo {
          height: 80px; /* INCREASED SIZE */
          width: auto;
          object-fit: contain;
        }
        .footer-contact, .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0.8;
          font-size: 0.95rem;
        }
        .footer-links a {
          opacity: 0.8;
          font-size: 0.95rem;
        }
        .footer-links a:hover {
          opacity: 1;
          color: var(--accent);
          padding-left: 5px;
        }
        .footer-links li {
          opacity: 0.8;
          font-size: 0.95rem;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0.6;
          font-size: 0.9rem;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-links a:hover {
          color: var(--accent);
        }
        .mb-6 { margin-bottom: 1.5rem; }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
