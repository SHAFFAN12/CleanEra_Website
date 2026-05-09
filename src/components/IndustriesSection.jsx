import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "General Commercial Cleaning",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600",
      link: "Discover More"
    },
    {
      title: "Cleaning for Health",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      link: "Discover More"
    },
    {
      title: "Deep Cleaning",
      image: "https://images.unsplash.com/photo-1581578731522-5b174716915f?auto=format&fit=crop&q=80&w=600",
      link: "Discover More"
    },
    {
      title: "High-Touch Point Disinfection",
      image: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=600",
      link: "Discover More"
    },
    {
      title: "Wall & Window",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600",
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
        }

        .carousel-wrapper {
          position: relative;
          max-width: 1600px; /* INCREASED FOR 5 CARDS */
          margin: 0 auto;
          padding: 0 20px;
        }

        .industries-swiper {
          padding: 40px 0 80px 0 !important;
        }

        .industry-card {
          width: 100%;
          height: 380px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          transform-origin: center bottom;
        }

        /* Active card is taller and has more shadow */
        .industry-card.active {
          height: 480px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
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

        .card-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .industry-card.active .card-image {
          transform: scale(1.1);
        }

        .card-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          padding: 24px 20px;
          z-index: 2;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .service-title {
          color: #1A1A2E;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 8px 0;
          text-align: left;
        }

        .industry-card.active .service-title {
          font-size: 18px;
        }

        .discover-link {
          color: #3399FF;
          font-size: 14px;
          text-decoration: none;
          font-weight: 600;
          text-align: left;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .discover-link:hover {
          color: #2688EE;
          text-decoration: underline;
        }

        .cta-button {
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
          gap: 12px;
          margin-top: 10px;
        }

        :global(.pagination-dot) {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid #CCCCCC !important;
          background: transparent !important;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          opacity: 1 !important;
        }

        :global(.pagination-dot.active) {
          background-color: #2ECC71 !important;
          border-color: #2ECC71 !important;
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
