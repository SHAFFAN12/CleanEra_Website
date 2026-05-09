import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can you respond to urgent cleaning needs?",
      answer: "Fast! Our average emergency dispatch time is 90 minutes across the GTA. We maintain 24/7 on-call support and dedicated rapid response crews ready for spills, floods, and urgent situations."
    },
    {
      question: "How fast can you take over from our current provider?",
      answer: "We can usually transition services within 48-72 hours depending on the size of the facility and specific requirements."
    },
    {
      question: "Do you clean after hours, weekends, or holidays?",
      answer: "Yes, we provide flexible scheduling including overnight, weekend, and holiday cleanings to ensure zero disruption to your business."
    },
    {
      question: "What happens if our regular cleaner is unavailable?",
      answer: "We maintain a pool of trained relief staff who are already familiar with our protocols to ensure service continuity."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2>Frequently Asked <span className="text-accent">Questions</span></h2>
          <p className="mt-2 text-muted">Still need help? <a href="#contact" className="text-accent font-bold">Get Help Now</a></p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                <span>{faq.question}</span>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid #eee;
          margin-bottom: 1rem;
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          background: none;
          text-align: left;
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--primary);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-out;
          opacity: 0;
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          padding-bottom: 1.5rem;
          opacity: 1;
        }
        .faq-answer p {
          color: var(--text-muted);
          line-height: 1.6;
        }
        .text-muted { color: var(--text-muted); }
        .font-bold { font-weight: 700; }
      `}</style>
    </section>
  );
};

export default FAQSection;
