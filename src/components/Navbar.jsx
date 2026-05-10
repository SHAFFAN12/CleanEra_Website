import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import phone from "../assets/phone-call.png"
import emailIcon from "../assets/email.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-fixed">
      <div className="container">
        {/* Top Row: Logo, Contact, CTA */}
        <div className="nav-top-row">
          <div className="logo">
            <img src={logo} alt="CleanEra Logo" className="navbar-logo" />
          </div>

          <div className="nav-contact-center">
            <a href="tel:2892079500" className="contact-link">
              <img src={phone}  className="icon-green" />
              <span>289-207-9500</span>
            </a>
            <a href="mailto:support@getcleanera.com" className="contact-link">
              <img src={emailIcon} className="icon-green" />
              <span>support@getcleanera.com</span>
            </a>
          </div>

          <div className="nav-cta-right">
            <button className="btn btn-blue">Get a Quote & Site Visit</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Bottom Row: Page Links (Center) */}
        <div className={`nav-bottom-row ${isOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links-center">
            <li><a href="#about">About us</a></li>
            <li className="has-dropdown">
              <a href="#services">Services <ChevronDown size={14} /></a>
            </li>
            <li className="has-dropdown">
              <a href="#facilities">Facilities Served <ChevronDown size={14} /></a>
            </li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #fff;
          z-index: 1000;
          padding: 0.5rem 0;
          border-bottom: 1px solid #eef2f6;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .nav-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
        }
        
        /* Logo Styling */
        .logo {
          display: flex;
          align-items: center;
        }
        .navbar-logo {
          height: 60px; /* INCREASED SIZE */
          width: auto;
          object-fit: contain;
        }

        /* Contact Center Styling */
        .nav-contact-center {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #145D8D;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .contact-link:hover { color: #4CAF50; }
        .icon-green { 
          color: #4CAF50; 
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
        img.icon-green {
          filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(114deg) brightness(97%) contrast(101%);
        }

        /* Button Styling */
        .btn-blue {
          background-color: #3399FF;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 6px rgba(51, 153, 255, 0.2);
        }
        .btn-blue:hover {
          background-color: #2688EE;
          transform: translateY(-1px);
        }

        /* Bottom Row Links Styling */
        .nav-bottom-row {
          display: flex;
          justify-content: center;
          padding-top: 0.5rem;
        }
        .nav-links-center {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links-center a {
          color: #1E293B;
          font-weight: 600;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-links-center a:hover { color: #3399FF; }

        .mobile-toggle {
          display: none;
          background: none;
          color: #001A33;
        }

        @media (max-width: 1024px) {
          .nav-contact-center { display: none; }
          .nav-links-center { gap: 1.5rem; }
        }

        @media (max-width: 768px) {
          .nav-cta-right { display: none; }
          .mobile-toggle { display: block; }
          .nav-bottom-row {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 2rem;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          }
          .nav-bottom-row.mobile-open {
            display: block !important;
            z-index: 1001;
          }
          .nav-links-center {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
