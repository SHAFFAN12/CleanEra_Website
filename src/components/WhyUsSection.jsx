import React from 'react';
import { UserCheck, ShieldCheck, Clock, Search, Zap, LayoutGrid } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    { icon: <UserCheck />, title: "Dedicated account management" },
    { icon: <ShieldCheck />, title: "Trained and Background checked staff" },
    { icon: <Clock />, title: "Reliable scheduling systems" },
    { icon: <Search />, title: "Quality inspections" },
    { icon: <Zap />, title: "Fast issue resolution" },
    { icon: <LayoutGrid />, title: "Scalable multi-site service" },
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-info">
            <h2>Why Businesses Switch to <span className="text-accent">CleanEra</span></h2>
            <p>
              Many companies chose CleanEra after dealing with poor communication, 
              missed cleans, staffing issues, or lack of accountability.
            </p>
            <button className="btn btn-primary mt-6">Talk to Our Team</button>
          </div>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon">{r.icon}</div>
                <h4>{r.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-us-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: center;
        }
        .why-us-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .why-us-info p {
          color: var(--text-muted);
          font-size: 1.1rem;
        }
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .reason-card {
          background: var(--white);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }
        .reason-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .reason-icon {
          color: var(--accent);
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }
        .reason-card h4 {
          font-size: 0.9rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .mt-6 { margin-top: 1.5rem; }

        @media (max-width: 1200px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 992px) {
          .why-us-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .why-us-info {
            max-width: 600px;
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;
