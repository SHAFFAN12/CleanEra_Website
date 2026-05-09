import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import heroImg from '../assets/hero-bg.png';
import wsibIcon from '../assets/cyber-security.png';
import flexibleIcon from '../assets/working-hours.png';
import InsureIcon from '../assets/insured.png';

const Hero = () => {
  const trustBadges = [
    { title: "WSIB Compliant", icon: <img src={wsibIcon} alt="WSIB" className="w-8 h-8" />, color: "bg-blue-50" },
    { title: "Flexible Scheduling", icon: <img src={flexibleIcon} alt="WSIB" className="w-8 h-8" />, color: "bg-green-50" },
    { title: "Insured & Bonded", icon: <img src={InsureIcon} alt="WSIB" className="w-8 h-8" />, color: "bg-yellow-50" },
     { title: "WSIB Compliant", icon: <img src={wsibIcon} alt="WSIB" className="w-8 h-8" />, color: "bg-blue-50" },
    { title: "Flexible Scheduling", icon: <img src={flexibleIcon} alt="WSIB" className="w-8 h-8" />, color: "bg-green-50" },
    { title: "Insured & Bonded", icon: <img src={InsureIcon} alt="WSIB" className="w-8 h-8" />, color: "bg-yellow-50" },
    
  ];

  return (
    <section className="hero-outer">
      {/* Curved Hero Section */}
      <div className="hero-curved-box">
        <div className="hero-overlay"></div>
        <div className="container hero-content-centered">
          <h1 className="hero-heading">
            <span className="heading-top">Professional Office Cleaning for</span>
            <span className="text-bright-green heading-bottom">Businesses in GTA</span>
          </h1>
          <p className="hero-description">
            Reliable, fully managed cleaning services designed for offices, 
            industrial sites, retail spaces, healthcare environments, and 
            multi-site operations.
          </p>
          <div className="hero-cta-box">
            <button className="btn btn-light-blue">Book a Site Walkthrough</button>
          </div>
        </div>
      </div>

      {/* Floating Trust Card */}
      <div className="container floating-card-container">
        <div className="floating-trust-card">
          <Swiper
            modules={[Pagination, Autoplay]}
            style={{
              "--swiper-pagination-color": "#22c55e",
              "--swiper-navigation-color": "#22c55e",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="trust-swiper"
          >
            {trustBadges.map((badge, index) => (
              <SwiperSlide key={index}>
                <div className="badge-card">
                  <div className="badge-inner">
                    <div className={`badge-icon-box ${badge.color}`}>
                      {badge.icon}
                    </div>
                    <span className="badge-text">{badge.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="card-footer">
            <button className="btn-navy-pill">Claim My 6-Month Offer</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-outer {
          position: relative;
          background: #fff;
          padding-bottom: 5rem;
        }
        .hero-curved-box {
          position: relative;
          height: 100vh;
          min-height: 850px;
          background-image: url(${heroImg});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: ellipse(100% 100% at 50% 0%);
          overflow: hidden;
          z-index: 1;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 26, 51, 0.88);
        }
        .hero-content-centered {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          max-width: 1000px;
          padding-top: 20px;
        }
        .hero-heading {
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
        }
        .heading-top {
          font-size: 3.5rem;
          font-weight: 600;
          opacity: 0.95;
          margin-bottom: 0.5rem;
        }
        .heading-bottom {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -2px;
        }
        .text-bright-green {
          color: #4CAF50;
        }
        .hero-description {
          font-size: 1.35rem;
          max-width: 750px;
          margin: 0 auto 3rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        .hero-cta-box {
          margin-top: 1rem;
        }
        .btn-light-blue {
          background-color: #3399FF;
          color: white;
          padding: 1.2rem 3rem;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(51, 153, 255, 0.4);
          transition: all 0.3s ease;
        }
        .btn-light-blue:hover {
          transform: translateY(-3px);
          background-color: #3399FF;
        }

        /* Floating Card Styling - MATCHING SCREENSHOT */
        .floating-card-container {
          position: relative;
          z-index: 10;
          margin-top: -12vh;
          display: flex;
          justify-content: center;
        }
        .floating-trust-card {
          background: white;
          width: 90%;
          max-width: 1200px;
          padding: 4rem 2rem;
          border-radius: 60px;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.15);
          text-align: center;
          border: 1px solid rgba(0,0,0,0.03);
        }
        .trust-swiper {
          padding-bottom: 4.5rem !important;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .badge-card {
          display: flex;
          justify-content: center;
          height: 100%;
        }
        .badge-inner {
          background: #fff;
          padding: 1.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border: 1px solid #dcfce7; /* Subtle green border */
          width: 100%;
          justify-content: flex-start;
          transition: transform 0.3s ease;
        }
        .badge-inner:hover {
          transform: translateY(-5px);
        }
        .badge-icon-box {
          padding: 1rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .badge-text {
          font-weight: 700;
          color: #334155;
          font-size: 1.1rem;
        }
        .card-footer {
          margin-top: 0.5rem;
          display: flex;
          justify-content: center;
        }
        .btn-navy-pill {
          background-color: #001A33;
          color: white;
          padding: 1rem 3.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          border: none;
        }
        .btn-navy-pill:hover {
          background-color: #000;
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        :global(.trust-swiper) {
          --swiper-pagination-color: #22c55e;
          --swiper-theme-color: #22c55e;
        }
        :global(.swiper-pagination) {
          bottom: 2rem !important;
        }
        :global(.swiper-pagination-bullet) {
          background: #dcfce7 !important; /* Light green for inactive */
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 8px !important;
          border: 2px solid #bbf7d0;
          transition: all 0.3s ease;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #22c55e !important; /* Stronger green for active */
          width: 14px !important;
          height: 14px !important;
          transform: scale(1.2);
          border-color: #16a34a;
        }

        @media (max-width: 768px) {
          .floating-trust-card {
            padding: 3rem 1rem;
            border-radius: 40px;
          }
          .badge-inner {
            padding: 1.2rem;
            gap: 1rem;
          }
          .heading-top { font-size: 2rem; }
          .heading-bottom { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
