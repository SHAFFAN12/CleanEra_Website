import React from 'react';
import ctaImg from '../assets/cta-visual.png';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <div className="cta-grid">
          <div className="cta-content">
            <h2>Need a Reliable Cleaning <span className="text-accent">Partner?</span></h2>
            <p>
              Whether you manage one building or multiple facilities, CleanEra 
              can build a program that protects your standards and saves management time.
            </p>
            <div className="cta-btns">
              <button className="btn btn-primary">Request Proposal</button>
              <button className="btn btn-outline">Book Site Visit</button>
            </div>
          </div>
          <div className="cta-image">
            <img src={ctaImg} alt="Reliable Cleaning Partner" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: var(--bg-light);
          padding: 5rem 0;
          overflow: hidden;
        }
        .cta-container {
          background: var(--white);
          border-radius: 30px;
          box-shadow: var(--shadow-lg);
          padding: 0;
          overflow: hidden;
        }
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
        .cta-content {
          padding: 4rem;
        }
        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .cta-content p {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .cta-btns {
          display: flex;
          gap: 1rem;
        }
        .cta-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 992px) {
          .cta-grid {
            grid-template-columns: 1fr;
          }
          .cta-content {
            padding: 3rem;
            text-align: center;
          }
          .cta-btns {
            justify-content: center;
          }
          .cta-image {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
