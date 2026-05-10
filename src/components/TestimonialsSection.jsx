import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Zara Momand",
      role: "Manager Ariana Denture Clinic",
      text: "The reliability and quality of service from CleanEra is exceptional. They've maintained our clinic to the highest required standards for over 2 years."
    },
    {
      name: "Matthew Schwartz",
      role: "Restaurant Manager-Chick-fil-A",
      text: "Professional team, transparent pricing, and always on time. CleanEra understands our industry's unique cleaning requirements perfectly."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-heading">
          Trusted by Businesses That Need <br />
          Reliability
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="author-info">
                <h4 className="author-name">{t.name}</h4>
                <p className="author-role">{t.role}</p>
              </div>
              <p className="testimonial-text">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 80px 0 100px;
          background-color: #FFFFFF;
          text-align: center;
        }

        .section-heading {
          font-size: 32px;
          font-weight: 700;
          color: #1A1A2E;
          margin-bottom: 60px;
          line-height: 1.2;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .testimonial-card {
          background-color: #E3F1EE; /* Light Mint Green */
          padding: 50px 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
        }

        .author-info {
          margin-bottom: 24px;
        }

        .author-name {
          font-size: 18px;
          font-weight: 700;
          color: #1A1A2E;
          margin-bottom: 4px;
        }

        .author-role {
          font-size: 13px;
          color: #444444;
          font-weight: 500;
        }

        .testimonial-text {
          font-size: 15px;
          color: #555555;
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .section-heading {
            font-size: 28px;
          }
          .testimonial-card {
            padding: 40px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
