import React from 'react';
import corporateIcon from '../assets/corporate-icon.png';
import warehouseIcon from '../assets/folders.png';
import manufacturingIcon from '../assets/manufacturing-icon.png';
import medicalIcon from '../assets/medical-icon.png';

const WhyUsSection = () => {
  const industries = [
    {
      num: "01",
      icon: corporateIcon,
      title: "Corporate <br /> Offices",
      desc: "We are experienced in bringing adventures to their journey, with all outdoor destinations."
    },
    {
      num: "02",
      icon: warehouseIcon,
      title: "Warehouses",
      desc: "We are experienced in bringing adventures to their journey, with all outdoor destinations."
    },
    {
      num: "03",
      icon: manufacturingIcon,
      title: "Manufacturing <br /> Plants",
      desc: "We are experienced in bringing adventures to their journey, with all outdoor destinations."
    },
    {
      num: "04",
      icon: medicalIcon,
      title: "Medical Clinics",
      desc: "We are experienced in bringing adventures to their journey, with all outdoor destinations."
    }
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Trusted Across Multiple <br />
            Industries
          </h2>
        </div>

        <div className="why-us-grid">
          {industries.map((item, idx) => (
            <div key={idx} className="why-us-card">
              <span className="card-num">{item.num}</span>
              <div className="card-icon-box">
                <img src={item.icon} alt={item.title} className="card-icon-img" />
              </div>
              <h3 className="card-title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-box">
          <button className="btn-blue">Book An Appointment</button>
        </div>
      </div>

      <style jsx>{`
        .why-us-section {
          background-color: #FFFFFF;
          padding: 100px 0;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #111111;
          line-height: 1.2;
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 52px;
        }

        .why-us-card {
          background: #FFFFFF;
          border: 1px solid #EBEBEB;
          border-radius: 16px;
          padding: 24px 24px 12px;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          height: auto;
        }

        .why-us-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .card-num {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #FFFFFF;
          color: #99b3ca;
          border: 1px solid #EBEBEB;
          padding: 8px 18px;
          border-radius: 16px 0 16px 0; /* ROUNDED TOP-LEFT AND BOTTOM-RIGHT TO MATCH CARD CORNER */
          font-size: 18px;
          font-weight: 700;
          z-index: 2;
        }

        .card-icon-box {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px; /* REDUCED */
        }

        .card-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1A1A2E;
          margin-bottom: 8px; /* REDUCED */
          line-height: 1.3;
        }

        .card-desc {
          font-size: 14px;
          color: #999999;
          line-height: 1.6;
          margin-top: 8px; /* ADDED */
        }

        .cta-box {
          display: flex;
          justify-content: center;
        }

        .btn-blue {
          background-color: #3399FF;
          color: white;
          padding: 14px 48px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 4px 6px rgba(51, 153, 255, 0.2);
          transition: all 0.3s ease;
        }
        .btn-blue:hover {
          background-color: #2688EE;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(51, 153, 255, 0.3);
        }

        @media (max-width: 1024px) {
          .why-us-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            padding: 0 40px;
          }
        }

        @media (max-width: 640px) {
          .why-us-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }
          .section-title {
            font-size: 32px;
          }
          .why-us-card {
            padding: 24px;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;
