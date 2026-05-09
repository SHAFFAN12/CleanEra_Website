import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import WhyUsSection from './components/WhyUsSection';
import OnboardingSection from './components/OnboardingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <ProblemsSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyUsSection />
        <OnboardingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
