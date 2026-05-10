import React from 'react';
import boyImg from '../assets/boy.png';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-full-background">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-heading">
                Need a Reliable Cleaning Partner?
              </h2>
              <p className="cta-description">
                Whether you manage one building or multiple facilities, CleanEra 
                can build a program that protects your standards and saves management time.
              </p>
              <div className="cta-buttons">
                <button className="btn-request">Request Proposal</button>
                <button className="btn-book">Book Site Visit</button>
              </div>
            </div>
            <div className="cta-image-box">
              <img src={boyImg} alt="Cleaning Professional" className="boy-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="cta-footer-text">
          <h3 className="footer-heading">Ready for fewer complaints and a space you're proud of?</h3>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 80px 0;
          background-color: #FFFFFF;
          overflow: visible;
        }

        .cta-full-background {
          background: linear-gradient(135deg, #B9E6DB 0%, #D8F2ED 100%);
          width: 100%;
          overflow: visible;
        }

        .cta-card {
          display: flex;
          align-items: center;
          padding: 60px 0;
          position: relative;
          min-height: 380px;
          overflow: visible;
        }

        .cta-content {
          flex: 1;
          max-width: 800px;
          z-index: 2;
        }

        .cta-heading {
          font-size: 48px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 24px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .cta-description {
          font-size: 16px;
          color: #FFFFFF;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.95;
          max-width: 700px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
        }

        .btn-request {
          background-color: #59B891;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-request:hover {
          background-color: #4AA580;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(89, 184, 145, 0.3);
        }

        .btn-book {
          background-color: #67B1F6;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-book:hover {
          background-color: #56A0E5;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(103, 177, 246, 0.3);
        }

        .cta-image-box {
          position: absolute;
          right: 40px;
          bottom: 0;
          width: 450px;
          z-index: 1;
          pointer-events: none;
        }

        .boy-image {
          width: 100%;
          height: auto;
          display: block;
          /* This makes the head hang over the top */
          transform: translateY(-40px);
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
        }

        @media (max-width: 1024px) {
          .cta-card {
            padding: 50px;
            flex-direction: column;
            text-align: center;
            min-height: auto;
          }
          .cta-content {
            max-width: 100%;
            margin-bottom: 40px;
          }
          .cta-description {
            margin: 0 auto 32px;
          }
          .cta-buttons {
            justify-content: center;
          }
          .cta-image-box {
            position: relative;
            right: auto;
            bottom: auto;
            width: 300px;
            margin: 0 auto -90px;
          }
          .boy-image {
            transform: translateY(0);
          }
          .cta-heading {
            font-size: 36px;
          }
        }

        @media (max-width: 640px) {
          .cta-card {
            padding: 40px 24px;
          }
          .cta-heading {
            font-size: 32px;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .btn-request, .btn-book {
            width: 100%;
          }
        }

        .cta-footer-text {
          margin-top: 20px;
          text-align: center;
        }

        .footer-heading {
          font-size: 28px;
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.2;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
