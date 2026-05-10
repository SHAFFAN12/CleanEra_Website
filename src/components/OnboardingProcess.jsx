import React from 'react';
import { Mail, Monitor, Database, Briefcase } from 'lucide-react';

const OnboardingProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Request a Quote",
      icon: <Mail size={32} color="#00BFA5" />,
      bgColor: "#D1F5F1"
    },
    {
      id: 2,
      title: "Site Visit / Needs Assessment",
      icon: <Monitor size={32} color="#6366F1" />,
      bgColor: "#E5E7FF"
    },
    {
      id: 3,
      title: "Custom Cleaning Plan/ Scope",
      icon: <Database size={32} color="#03A9F4" />,
      bgColor: "#E1F5FE"
    },
    {
      id: 4,
      title: "Launch & Ongoing Quality Control",
      icon: <Briefcase size={32} color="#1ABC9C" />,
      bgColor: "#D1F2EB"
    }
  ];

  return (
    <section className="onboarding-process">
      <div className="container">
        <h2 className="process-heading">
          Our Simple Onboarding <br />
          Process
        </h2>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.id} className="process-card">
              <div className="icon-box" style={{ backgroundColor: step.bgColor }}>
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
            </div>
          ))}
        </div>

        <div className="cta-wrapper">
          <button className="btn-schedule">Schedule Assessment</button>
        </div>
      </div>

      <style jsx>{`
        .onboarding-process {
          padding: 80px 0 100px;
          background-color: #FFFFFF;
          text-align: center;
        }

        .process-heading {
          font-size: 36px;
          font-weight: 800;
          color: #111111;
          line-height: 1.2;
          margin-bottom: 60px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }

        .process-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.02);
        }

        .process-card:hover {
          transform: translateY(-5px);
        }

        .icon-box {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .step-title {
          font-size: 18px;
          font-weight: 700;
          color: #111111;
          line-height: 1.4;
          max-width: 200px;
        }

        .cta-wrapper {
          margin-top: 20px;
        }

        .btn-schedule {
          background-color: #3399FF;
          color: white;
          padding: 14px 48px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(51, 153, 255, 0.3);
        }

        .btn-schedule:hover {
          background-color: #2688EE;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(51, 153, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
          .process-heading {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default OnboardingProcess;
