import React from 'react';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <ShieldCheck className="text-accent" />, title: "WSIB Compliant" },
    { icon: <Calendar className="text-accent" />, title: "Flexible Scheduling" },
    { icon: <Lock className="text-accent" />, title: "Insured & Bonded" },
  ];

  return (
    <section className="features-bar">
      <div className="container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <span className="feature-title">{f.title}</span>
            </div>
          ))}
          <div className="feature-cta">
            <button className="btn btn-primary">Claim My 6-Month Offer</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-bar {
          background: var(--white);
          margin-top: -3rem;
          position: relative;
          z-index: 10;
        }
        .features-grid {
          background: var(--white);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow-lg);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          gap: 2rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-right: 2rem;
          border-right: 1px solid #eee;
        }
        .feature-item:last-of-type {
          border-right: none;
        }
        .feature-icon {
          background: var(--bg-light);
          padding: 0.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-title {
          font-weight: 600;
          color: var(--primary);
        }
        .feature-cta {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 0;
            border-radius: 0;
            box-shadow: none;
            border-bottom: 1px solid #eee;
          }
          .features-bar { margin-top: 0; }
          .feature-item { border-right: none; }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .feature-cta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
