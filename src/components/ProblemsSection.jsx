import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import problemsImg from '../assets/problems-visual.png';
import peaceIcon from '../assets/peace-hand-symbol.png';
import logo from '../assets/CleanEra.png';
import sprayIcon from '../assets/spray.png';
import soapIcon from '../assets/icon.png';

const ProblemsSection = () => {
  const tickerItems = [
    "CLEANING SERVICES",
    "TRUSTED PROFESSIONALS",
    "COMMERCIAL CLEANING",
    "FACILITY MANAGEMENT"
  ];

  const features = [
    "Dedicated Account Manager",
    "Supervisor Audits",
    "Photo Verified Checklists",
    "Consistent Quality",
    "Weekly/Monthly Reports",
    "24/7 On-Call Support",
    "Background checked Cleaning Teams",
    "WHMIS Trained Staff"
  ];

  return (
    <section className="problems-section">
      {/* 1. Text Ticker / Marquee Strip */}
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {tickerItems.map((text, idx) => (
                <span key={`${i}-${idx}`} className="ticker-item">
                  {text} <span className="ticker-star">✳</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Two-Column Content Block */}
      <div className="container content-wrapper">
        {/* Background Decorative Icons - MOVED OUTSIDE COLLAGE */}
        <div className="peace-hand-icon"></div>
        <div className="spray-bottle-icon"></div>
        <div className="soap-foam-icon"></div>
        <div className="pink-blob"></div>

        <div className="problems-grid">
          {/* Left Column — Image Collage Block */}
          <div className="image-collage-column">
            <div className="collage-container">
              {/* Logo Card - CUSTOM VERTICAL LOGO */}
              <div className="logo-card">
                <img src={logo} alt="CleanEra Logo" className="vertical-logo-img" />
              </div>

              {/* Main Image 1 (Large Background) */}
              <div className="main-image-1">
                <img src={problemsImg} alt="Cleaning Professional" />
              </div>

              {/* Main Image 2 (Foreground Overlay) */}
              <div className="main-image-2">
                <img src={problemsImg} alt="Cleaning Professional Portrait" style={{ objectPosition: 'top' }} />
              </div>
            </div>
          </div>

          {/* Right Column — Text Content Block */}
          <div className="text-content-column">
            <h2 className="main-heading">
              Cleaning Problems That Hurt <br /> Operations
            </h2>
            
            <p className="body-paragraph">
              If your current provider is inconsistent, understaffed, hard to reach, 
              or failing inspections, it creates risk, complaints, downtime, and 
              wasted management time. CleanEra provides structured cleaning 
              programs with accountability, trained teams, task checklists, 
              and responsive management.
            </p>

            <h3 className="sub-heading">
              Professional cleaning solutions for commercial spaces of every size
            </h3>

            <div className="feature-grid">
              {features.map((item, index) => (
                <div key={index} className="feature-item">
                  <div className="check-icon-wrapper">
                    <CheckCircle2 size={18} fill="#2ECC71" color="white" />
                  </div>
                  <span className="feature-text">{item}</span>
                </div>
              ))}
            </div>
            <div>
              <button className="btn-fix-issues">
                Fix My Cleaning Issues
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');

        .problems-section {
          background-color: #FFFFFF;
          overflow: hidden;
          padding-top: 2rem;
          padding-bottom: 10rem;
          position: relative;
        }

        /* Ticker Styles */
        .ticker-wrapper {
          width: 100%;
          border-top: none; /* REMOVED LINE AS REQUESTED */
          padding: 1.5rem 0;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 6rem;
        }
        .ticker-content {
          display: inline-block;
          animation: ticker 60s linear infinite;
        }
        .ticker-item {
          font-family: 'Fredoka', sans-serif; /* BUBBLE FONT */
          font-size: 5rem;
          font-weight: 700;
          color: transparent; /* HOLLOW INSIDE */
          -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.15); /* BLACK OUTLINE GHOST EFFECT */
          margin-right: 4rem;
          letter-spacing: 2px;
          display: inline-flex;
          align-items: center;
          gap: 2rem;
        }
        .ticker-star {
          color: #28B663; /* SOLID VIBRANT GREEN */
          font-size: 2rem;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Content Block Styles */
        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
          position: relative;
        }
        .problems-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 5rem;
          align-items: flex-start;
          padding-top: 8rem;
        }

        /* Image Collage Styles - MATCHING SCREENSHOT SCALE */
        .image-collage-column {
          position: relative;
          display: flex;
          align-items: flex-start;
        }
        .collage-container {
          position: relative;
          width: 100%;
          max-width: 650px;
        }
        
        .main-image-1 {
          width: 520px; /* MUCH BIGGER */
          height: 720px; /* TALLER TO MATCH TEXT */
          border-radius: 40px 70px 40px 70px; /* MODERATED LEAF SHAPE */
          overflow: hidden;
          z-index: 1;
          position: relative;
        }
        .main-image-1 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Official Logo Card */
        .logo-card {
          position: absolute;
          left: -40px;
          top: -20px;
          background: white;
          padding: 3rem 1rem; /* REDUCED HEIGHT/PADDING */
          border-radius: 30px;
          z-index: 5;
          width: 140px; /* NARROWER */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .vertical-logo-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .main-image-2 {
          position: absolute;
          right: 60px; /* MOVED LEFT TO AVOID OVERLAP WITH TEXT COLUMN */
          bottom: 0px;
          width: 260px;
          height: 290px;
          border-radius: 0 40px 0 40px; /* ONLY TOP-RIGHT AND BOTTOM-LEFT ROUNDED */
          border: 15px solid white; /* THICK BORDER LIKE PICTURE */
          overflow: hidden;
          box-shadow: 0 50px 100px rgba(0,0,0,0.15);
          z-index: 15;
        }
        .main-image-2 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Decorative elements - MOVED FOR BETTER MATCH */
        .pink-blob {
          position: absolute;
          bottom: -100px;
          left: -150px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        .peace-hand-icon {
          position: absolute;
          top: 80px;
          left: -150px;
          width: 200px;
          height: 200px;
          opacity: 0.8;
          z-index: 100;
          background-color: #D6E4F6; /* THE EXACT COLOR REQUESTED */
          -webkit-mask: url(${peaceIcon}) no-repeat center;
          mask: url(${peaceIcon}) no-repeat center;
          -webkit-mask-size: contain;
          mask-size: contain;
        }
        .spray-bottle-icon {
          position: absolute;
          bottom: -80px;
          right: -160px; /* MOVED FURTHER RIGHT */
          width: 210px; /* SLIGHTLY SMALLER */
          height: 210px;
          opacity: 0.5;
          z-index: 1;
          background-color: #D6E4F6;
          -webkit-mask: url(${sprayIcon}) no-repeat center;
          mask: url(${sprayIcon}) no-repeat center;
          -webkit-mask-size: contain;
          mask-size: contain;
        }
        .soap-foam-icon {
          position: absolute;
          bottom: -120px;
          left: -250px; 
          width: 380px; /* SLIGHTLY SMALLER */
          height: 380px;
          opacity: 0.5;
          z-index: 0;
          background: url(${soapIcon}) no-repeat center;
          background-size: contain;
          pointer-events: none;
        }

        /* Text Block Styles */
        .text-content-column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 780px; /* MATCHES TOTAL COLLAGE STACK */
        }
        .main-heading {
          font-size: 2rem;
          font-weight: 900;
          color: #001A33;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
          max-width: 550px; /* ENSURES BREAK HAPPENS ONLY AT BR */
        }
        .body-paragraph {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .sub-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #001A33;
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem 3rem;
          margin-bottom: 2rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .feature-text {
          font-size: 1.1rem;
          color: #333;
          font-weight: 500;
        }
        .cta-container {
          margin-top: auto;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          width: fit-content;
        }
        .btn-fix-issues{
          background-color: #3399FF; /* NAVBAR BLUE */
          color: white;
          padding: 1.2rem 3rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 6px; /* MATCH NAVBAR RADIUS */
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 6px rgba(51, 153, 255, 0.2);
          cursor: pointer;
        }
        .btn-fix-issues:hover {
          transform: translateY(-2px);
          background-color: #2688EE;
          box-shadow: 0 6px 20px rgba(51, 153, 255, 0.3);
        }
        
        
        

        @media (max-width: 1200px) {
          .problems-grid { gap: 3rem; }
          .image-collage-column { transform: scale(0.85); }
        }

        @media (max-width: 768px) {
          .problems-section {
            padding-top: 0rem;
            padding-bottom: 5rem;
          }
          .ticker-wrapper {
            padding: 0.5rem 0;
            margin-bottom: 2rem;
          }
          .ticker-item {
            font-size: 2.5rem;
            margin-right: 2rem;
            gap: 1rem;
          }
          .ticker-star {
            font-size: 1.2rem;
          }
          .image-collage-column {
            height: auto;
            justify-content: center;
            transform: scale(1);
            margin-bottom: 4rem;
          }
          .collage-container {
            max-width: 320px;
          }
          .main-image-1 { width: 280px; height: 350px; }
          .main-image-2 { width: 140px; height: 160px; right: -10px; bottom: -10px; }
          .logo-card { width: 60px; height: 160px; left: -5px; }
          .problems-grid { grid-template-columns: 1fr; padding-top: 4rem; }
          .main-heading { font-size: 2rem; }
          .feature-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ProblemsSection;
