import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Zara Momand",
      role: "Manager, Ariana Denture Clinic",
      text: "The reliability and quality of service from CleanEra is exceptional. They've maintained our clinic to the highest required standards for over 2 years.",
      stars: 5
    },
    {
      name: "Matthew Schwartz",
      role: "Restaurant Manager, Chick-fil-A",
      text: "Professional team, transparent pricing, and always on time. CleanEra understands our industry's unique cleaning requirements perfectly.",
      stars: 5
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2>Trusted by Businesses That Need <span className="text-accent">Reliability</span></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="var(--accent)" stroke="var(--accent)" />)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .testimonial-card {
          background: var(--white);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
        }
        .stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        .testimonial-text {
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .testimonial-author {
          display: flex;
          flex-direction: column;
        }
        .testimonial-author strong {
          color: var(--primary);
          font-size: 1.1rem;
        }
        .testimonial-author span {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .testimonial-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
