import React from 'react';
import { FileText, ClipboardCheck, Layout, Rocket } from 'lucide-react';

const OnboardingSection = () => {
  const steps = [
    { icon: <FileText />, title: "Request a Quote", desc: "Start by filling out our simple request form." },
    { icon: <ClipboardCheck />, title: "Site Visit / Needs Assessment", desc: "We'll visit your facility to understand your specific needs." },
    { icon: <Layout />, title: "Custom Cleaning Plan/ Scope", desc: "We'll create a tailored plan that fits your budget and requirements." },
    { icon: <Rocket />, title: "Launch & Ongoing Quality Control", desc: "We'll start our service and maintain consistent quality." },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header text-center mb-16">
          <h2>Our Simple <span className="text-accent">Onboarding</span> Process</h2>
        </div>

        <div className="steps-container">
          {steps.map((s, i) => (
            <div key={i} className="step-item">
              <div className="step-number">{i + 1}</div>
              <div className="step-icon-box">
                {s.icon}
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary">Schedule Assessment</button>
        </div>
      </div>

      <style jsx>{`
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }
        .step-item {
          text-align: center;
          position: relative;
        }
        .step-number {
          position: absolute;
          top: -10px;
          right: 20%;
          background: var(--accent);
          color: var(--white);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          z-index: 2;
        }
        .step-icon-box {
          background: var(--bg-light);
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--accent);
          transition: all 0.3s ease;
        }
        .step-item:hover .step-icon-box {
          background: var(--accent);
          color: var(--white);
          transform: rotate(10deg);
        }
        .step-item h4 {
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }
        .step-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .mb-16 { margin-bottom: 4rem; }
        .text-center { text-align: center; }
        .mt-12 { margin-top: 3rem; }

        @media (max-width: 992px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }
        @media (max-width: 600px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default OnboardingSection;
