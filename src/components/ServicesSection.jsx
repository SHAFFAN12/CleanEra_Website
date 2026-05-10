import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import WorkStation from "../assets/workstation.png"
import washroom from "../assets/washroom.png"
import Garbage from "../assets/Garbage.png"
import floorCare from "../assets/Floor.png"
import leftArrow from "../assets/left-arrow.png"
import rightArrow from "../assets/right-arrow.png"

import warehouse from "../assets/warehouse-2.png"
import breakRoom from "../assets/break.png"
import lockerRoom from "../assets/Locker.png"

const ServicesSection = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);

  const officeCards = [
    { title: "Workstations & common areas", img: WorkStation },
    { title: "Washroom sanitation", img: washroom },
    { title: "Garbage removal", img: Garbage },
    { title: "Floor care", img: floorCare },
    { title: "Office Kitchen", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" },
    { title: "Glass Windows", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600" }
  ];

  const industrialCards = [
    { title: "Production floor cleaning", img: floorCare },
    { title: "Warehouse aisles", img: warehouse },
    { title: "Break rooms", img: breakRoom },
    { title: "Locker rooms", img: lockerRoom },
    { title: "Storage Units", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" },
    { title: "Heavy Equipment", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section className="services-section">
      <div className="section-header">
        <h2 className="section-title">
          What's Included in Our <br />
          Office Cleaning
        </h2>
      </div>

      <div className="tab-content-block">
        <div className="banner-nav-container">
          <div className="navy-banner">
            <h3 className="banner-title">
              Office Cleaning <br />
              Includes:
            </h3>
          </div>

          <div className="nav-arrows">
            <button onClick={() => swiperRef.current?.slidePrev()} className="nav-btn">
              <img src={leftArrow} alt="Previous" className="nav-arrow-img" />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="nav-btn">
              <img src={rightArrow} alt="Next" className="nav-arrow-img" />
            </button>
          </div>
        </div>

        {/* Card Slider Row */}
        <div className="cards-slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="services-swiper"
            loop={true}
          >
            {officeCards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="service-card">
                  <img src={card.img} alt={card.title} className="card-image" />
                  <div className="card-overlay">
                    <span className="card-caption">{card.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Second Category Block */}
      <div className="tab-content-block" style={{ marginTop: '100px' }}>
        <div className="banner-nav-container reverse">
          <div className="nav-arrows">
            <button onClick={() => swiperRef2.current?.slidePrev()} className="nav-btn">
              <img src={leftArrow} alt="Previous" className="nav-arrow-img" />
            </button>
            <button onClick={() => swiperRef2.current?.slideNext()} className="nav-btn">
              <img src={rightArrow} alt="Next" className="nav-arrow-img" />
            </button>
          </div>

          <div className="navy-banner reverse">
            <h3 className="banner-title">
              Industrial Includes:
            </h3>
          </div>
        </div>

        <div className="cards-slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef2.current = swiper)}
            className="services-swiper"
            loop={true}
          >
            {industrialCards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="service-card">
                  <img src={card.img} alt={card.title} className="card-image" />
                  <div className="card-overlay">
                    <span className="card-caption">{card.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="cta-footer">
        <button className="btn-custom-scope">Get a Custom Scope</button>
      </div>

      <style jsx>{`
        .services-section {
          background-color: #F8FCFA; /* CUSTOM LIGHT BG */
          padding: 100px 0;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #111111;
          line-height: 1.2;
        }

        .banner-nav-container {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          position: relative;
          z-index: 5;
        }

        .navy-banner {
          background-color: #0A1628;
          height: 500px; /* INCREASED HEIGHT AS REQUESTED */
          display: flex;
          align-items: flex-start; /* MOVED TEXT UP */
          padding: 80px 60px; /* PADDING TO CONTROL TEXT HEIGHT */
          border-radius: 0 30px 30px 0;
          width: 70%; /* NARROWER BANNER */
        }

        .navy-banner.reverse {
          border-radius: 30px 0 0 30px; /* ROUNDED LEFT */
          justify-content: flex-start;
          align-items: flex-start;
        }

        .navy-banner.reverse .banner-title {
          text-align: left;
        }

        .banner-title {
          color: #FFFFFF;
          font-size: 56px; /* LARGER CHUNKY TEXT */
          font-weight: 850;
          line-height: 1;
          text-align: left;
          letter-spacing: -2px;
        }

        .nav-arrows {
          display: flex;
          gap: 25px;
          padding: 0 60px;
          flex-grow: 1;
          margin-bottom: 50px; /* MOVED HIGHER */
          position: relative;
          z-index: 100; /* ENSURE CLICKABLE OVER CARDS */
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-arrow-img {
          width: 50px;
          height: auto;
          opacity: 0.8;
          transition: all 0.3s ease;
          /* Filter for #D5E0F2 */
          filter: invert(91%) sepia(8%) saturate(1008%) hue-rotate(186deg) brightness(101%) contrast(93%);
        }

        .nav-btn:hover .nav-arrow-img {
          opacity: 1;
          transform: scale(1.1);
          filter: invert(30%) sepia(100%) saturate(2000%) hue-rotate(190deg) brightness(100%) contrast(110%);
        }

        .cards-slider-wrapper {
          margin-top: -250px; /* PULLED CARDS HIGHER TO HIT MID-BANNER */
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        /* Ensure slides are opaque and not affected by other components */
        :global(.services-swiper .swiper-slide) {
          opacity: 1 !important;
        }

        .service-card {
          height: 440px;
          border-radius: 15px; /* REDUCED ROUNDING */
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(10, 22, 40, 0.9) 0%, transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center; /* CENTERED HORIZONTALLY */
          padding: 60px 20px; /* INCREASED BOTTOM PADDING TO MOVE TEXT UP */
        }

        .card-caption {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.3;
          text-align: center; /* CENTERED TEXT */
        }

        .cta-footer {
          margin-top: 80px;
          display: flex;
          justify-content: center;
        }

        .btn-custom-scope {
          background-color: #3399FF; /* NAVBAR BLUE */
          color: #FFFFFF;
          padding: 1.2rem 3rem;
          border-radius: 6px; /* MATCH NAVBAR RADIUS */
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(51, 153, 255, 0.2);
        }

        .btn-custom-scope:hover {
          background-color: #2688EE;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(51, 153, 255, 0.3);
        }

        @media (max-width: 1024px) {
          .banner-title { font-size: 42px; }
          .navy-banner { width: 85%; }
        }

        @media (max-width: 768px) {
          .navy-banner {
            width: 100%;
            border-radius: 0;
            height: 380px; /* Increased height */
            padding: 50px 30px;
            display: flex;
            align-items: flex-start; /* Keep text at the top */
          }
          .banner-title {
            font-size: 32px;
            line-height: 1.1;
          }
          .cards-slider-wrapper {
            margin-top: -120px; /* Move cards up into the banner area */
            padding: 0 15px;
          }
          .nav-arrows {
            padding: 0 20px;
            justify-content: flex-end; /* Align arrows to the right */
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
