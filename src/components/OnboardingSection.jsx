import React from 'react';
import step1 from '../assets/onboarding_step_1_management.png';
import step2 from '../assets/onboarding_step_2_staff.png';
import step3 from '../assets/onboarding_step_3_scheduling.png';
import step4 from '../assets/onboarding_step_4_inspections.png';
import step5 from '../assets/onboarding_step_5_resolution.png';
import step6 from '../assets/onboarding_step_6_scalable.png';
import bubbleIcon from '../assets/bubble-icon.png';

const OnboardingSection = () => {
  const cards = [
    {
      id: "r1c1",
      title: "Dedicated account management",
      image: step1,
      active: false,
      gridPos: "card-r1c3"
    },
    {
      id: "r1c2",
      title: "Trained and Background checked staff",
      image: step2,
      active: false,
      gridPos: "card-r1c4"
    },
    {
      id: "r2c1",
      title: "Reliable scheduling systems",
      image: step3,
      active: false,
      gridPos: "card-r2c1"
    },
    {
      id: "r2c2",
      title: "Quality inspections",
      image: step4,
      active: false,
      gridPos: "card-r2c2"
    },
    {
      id: "r2c3",
      title: "Fast issue resolution",
      image: step5,
      active: false,
      gridPos: "card-r2c3"
    },
    {
      id: "r2c4",
      title: "Scalable multi-site service",
      image: step6,
      active: false,
      gridPos: "card-r2c4"
    }
  ];

  return (
    <section className="onboarding-section">
      <div className="container">
        <div className="onboarding-grid">
          {/* Left Column - Text Block */}
          <div className="text-block">
            <h2 className="heading">
              Why Businesses Switch to <br />
              CleanEra
            </h2>
            <p className="description">
              "Many companies chose CleanEra after dealing with poor communication, missed cleans, staffing issues, or lack of accountability."
            </p>
            <button className="btn-blue">Talk to Our Team</button>
          </div>

          {/* Card Grid Content */}
          {cards.map((card) => (
            <div key={card.id} className={`feature-card ${card.active ? 'active' : ''} ${card.gridPos}`}>
              <div className="photo-container">
                <img src={card.image} alt={card.title} className="photo" />
              </div>
              <h4 className="card-title" dangerouslySetInnerHTML={{ __html: card.title.replace('Background checked', 'Background <br/> checked').replace('account management', 'account <br/> management').replace('multi-site service', 'multi-site <br/> service').replace('scheduling systems', 'scheduling <br/> systems') }}></h4>
            </div>
          ))}
          
          

          {/* Red Bubble Icon */}
          <img src={bubbleIcon} className="bubble-bg-icon" alt="" />
        </div>
      </div>

      <style jsx>{`
        .onboarding-section {
          background-color: #FFFFFF;
          padding: 100px 0;
          overflow: hidden;
          position: relative;
        }

        .onboarding-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto auto;
          gap: 10px; /* DECREASED */
          position: relative;
        }

        .text-block {
          grid-column: span 2;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-right: 40px;
        }

        .heading {
          font-size: 38px;
          font-weight: 800;
          color: #111111;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .description {
          font-size: 15px;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 90%;
        }

        .btn-blue {
          background-color: #3399FF;
          color: #FFFFFF;
          padding: 12px 32px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          width: fit-content;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-blue:hover {
          background-color: #2688EE;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(51, 153, 255, 0.3);
        }

        /* Feature Cards */
        .feature-card {
          background: #FFFFFF;
          border: 1px solid #EBEBEB;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          min-height: 320px; /* INCREASED */
          max-width: 300px; /* INCREASED WIDTH */
          margin: 0 auto; /* CENTER IN GRID CELL */
          z-index: 2;
        }

        .feature-card.active {
          border: 1px solid #EBEBEB; /* REMOVED BLUE BORDER */
          background-color: #FFFFFF; /* REMOVED BLUE BACKGROUND */
        }

        .photo-container {
          width: 200px; /* INCREASED */
          height: 200px; /* INCREASED */
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 10px; /* REDUCED */
          margin-top: 8px;
        }

        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-title {
          font-size: 15px;
          font-weight: 600;
          color: #1A1A2E;
          line-height: 1.4;
          margin-top: 15px; /* ADDED MARGIN TOP */
        }

        .feature-card.active .card-title {
          color: #1A1A2E; /* REMOVED BLUE TEXT */
        }

        /* Grid Positions */
        .card-r1c3 { grid-column: 3; grid-row: 1; }
        .card-r1c4 { grid-column: 4; grid-row: 1; }
        .card-r2c1 { grid-column: 1; grid-row: 2; }
        .card-r2c2 { grid-column: 2; grid-row: 2; }
        .card-r2c3 { grid-column: 3; grid-row: 2; }
        .card-r2c4 { grid-column: 4; grid-row: 2; }

        /* Decorative Background Circles */
        .decorative-circles {
          position: absolute;
          right: -50px;
          top: 0;
          z-index: 1;
          pointer-events: none;
        }

        .circle-outline {
          width: 140px;
          height: 140px;
          border: 1px solid rgba(200, 200, 200, 0.3);
          border-radius: 50%;
        }

        .circle-outline.overlap {
          position: absolute;
          top: 40px;
          right: 30px;
        }

        .bubble-bg-icon {
          position: absolute;
          top: -100px;
          right: -200px;
          width: 300px;
          opacity: 1;
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 1100px) {
          .heading { font-size: 32px; }
          .photo-container { width: 110px; height: 110px; }
        }

        @media (max-width: 1024px) {
          .onboarding-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .text-block {
            grid-column: span 2;
            margin-bottom: 40px;
            padding-right: 0;
            text-align: center;
            align-items: center;
          }
          .card-r1c3, .card-r1c4, .card-r2c1, .card-r2c2, .card-r2c3, .card-r2c4 {
            grid-column: span 1;
            grid-row: auto;
          }
        }

        @media (max-width: 640px) {
          .onboarding-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .heading { font-size: 28px; }
          .feature-card { padding: 16px; min-height: 200px; }
          .photo-container { width: 90px; height: 90px; }
          .card-title { font-size: 13px; }
        }
      `}</style>
    </section>
  );
};

export default OnboardingSection;
