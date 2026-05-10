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
              el: '.industries-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
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
          
          <div className="industries-pagination"></div>
        </div>
      </div>

    </section>
  );
};

export default IndustriesSection;
