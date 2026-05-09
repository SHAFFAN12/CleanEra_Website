import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import general from "../assets/general-cleaning.png";
import cleaning from "../assets/health-cleaning.png";
import deep from "../assets/deep-cleaning.png";
import high from "../assets/disinfection.png";
import wall from "../assets/wall.png";

const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "General Commercial Cleaning",
      image: general,
      link: "Discover More"
    },
    {
      title: "Cleaning for Health",
      image: cleaning,
      link: "Discover More"
    },
    {
      title: "Deep Cleaning",
      image: deep,
      link: "Discover More"
    },
    {
      title: "High-Touch Point Disinfection",
      image: high,
      link: "Discover More"
    },
    {
      title: "Wall & Window",
      image: wall,
      link: "Discover More"
    },
    {
      title: "General Commercial Cleaning",
      image: general,
      link: "Discover More"
    },
    {
      title: "Cleaning for Health",
      image: cleaning,
      link: "Discover More"
    },
    {
      title: "Deep Cleaning",
      image: deep,
      link: "Discover More"
    },
    {
      title: "High-Touch Point Disinfection",
      image: high,
      link: "Discover More"
    },
    {
      title: "Wall & Window",
      image: wall,
      link: "Discover More"
    }
  ];

  return (
    <section className="industries-carousel-section">
      <div className="container-fluid">
        <div className="carousel-wrapper">
          <Swiper
            slidesPerView={5}
            centeredSlides={true}
            spaceBetween={20}
            grabCursor={true}
            loop={true}
            watchSlidesProgress={true}
            pagination={{
              clickable: true,
              el: '.custom-pagination-container',
              bulletClass: 'pagination-dot',
              bulletActiveClass: 'active',
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Pagination]}
            className="industries-swiper"
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 }
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className={`industry-card ${isActive ? 'active' : ''}`}>
                    <div className="card-image-container">
                      <img src={service.image} alt={service.title} className="card-image" />
                    </div>
                    <div className="card-footer">
                      <h4 className="service-title">{service.title}</h4>
                      {isActive ? (
                        <button className="cta-button">Get a Custom Scope</button>
                      ) : (
                        <a href="#" className="discover-link">Discover More</a>
                      )}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="custom-pagination-container"></div>
        </div>
      </div>

      <style jsx>{`
        .industries-carousel-section {
          background-color: #FFFFFF;
          padding: 100px 0;
          width: 100%;
          position: relative;
        }

        .industries-carousel-section .carousel-wrapper {
          position: relative;
          max-width: 1600px; /* INCREASED FOR 5 CARDS */
          margin: 0 auto;
          padding: 0 20px;
        }

        .industries-swiper {
          padding: 40px 0 100px 0 !important;
        }

        .industry-card {
          width: 100%;
          height: 380px;
          background: white;
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          transform-origin: center bottom;
        }

        .industry-card.active {
          height: 480px;
          z-index: 10;
          transform: scale(1.05);
        }

        .industries-swiper .swiper-slide {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          transition: all 0.5s ease;
          opacity: 0.5;
        }

        .industries-swiper .swiper-slide-active {
          opacity: 1;
        }

        .industry-card .card-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          border-radius: 20px;
          overflow: hidden;
        }

        .industry-card .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .industry-card.active .card-image {
          transform: scale(1.1);
        }

        .industry-card .card-footer {
          position: absolute;
          bottom: -45px; /* HANGING EVEN FURTHER OFF BOTTOM */
          left: 50%;
          transform: translateX(-50%);
          width: 80%; /* EVEN NARROWER */
          background: white;
          padding: 20px 15px 5px 15px; /* REDUCED BOTTOM PADDING */
          z-index: 1;
          min-height: 90px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* PUSH TEXT TO BOTTOM */
          align-items: center;
          border-radius: 15px;
        }

        .industry-card .service-title {
          color: #1A1A2E;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .industry-card.active .service-title {
          font-size: 18px;
        }

        .industry-card .discover-link {
          color: #000000; /* CHANGED TO BLACK */
          font-size: 14px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .industry-card .discover-link:hover {
          color: #333333;
          text-decoration: underline;
        }

        .industry-card .cta-button {
          background-color: #3399FF;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(51, 153, 255, 0.2);
        }

        .cta-button:hover {
          background-color: #2688EE;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(51, 153, 255, 0.3);
        }

        .custom-pagination-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 50px; /* MORE SPACE FROM CARDS */
        }

        :global(.pagination-dot) {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid #CCCCCC !important;
          background: transparent !important;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          opacity: 1 !important;
        }

        :global(.pagination-dot:hover) {
          border-color: #2ECC71 !important;
          transform: scale(1.2);
        }

        :global(.pagination-dot.active) {
          background-color: #2ECC71 !important;
          border-color: #2ECC71 !important;
          transform: scale(1.1);
        }

        @media (max-width: 1024px) {
          .industry-card { height: 350px; }
          .industry-card.active { height: 420px; }
        }

        @media (max-width: 768px) {
          .industries-carousel-section { padding: 60px 0; }
          .industry-card { height: 320px; }
          .industry-card.active { height: 360px; transform: scale(1); }
          .swiper-slide { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
