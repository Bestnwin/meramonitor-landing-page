import { useEffect } from 'react';
import React, { useState } from "react";

// ✅ FIXED IMPORTS — make sure these match your file names exactly!
import FormModal from './components/RegisterrModal'; // Import your new FormModal component

import Navbar from './components/navbar';
import Landing from './section/Landing';
import SponsorList from './components/sponser'; 
import DemoPage from './components/DemoPage';
import SignupBanner from './components/SignupBanner';
import PricingFeaturesSection from './components/price';
import FeatureSlider from './components/FeatureSlide';
import FAQSection from './components/faq';
import Footer from './components/footer';
import WhyChooseUsSection from './components/Whychooseus';
import FeatureSection from './components/download';
import Testimonials from './components/Testimonial';

function App() {
    const [showFormModal, setShowFormModal] = useState(false);

  const openModal = () => {
    setShowFormModal(true);
  };

  const closeModal = () => {
    setShowFormModal(false);
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmKeys.forEach(key => {
      const value = params.get(key);
      if (value) {
        localStorage.setItem(key, value);
        console.log(`UTM Param - ${key}: ${value}`);
      }
    });

    if (utmKeys.some(key => params.has(key))) {
      const url = new URL(window.location);
      utmKeys.forEach(key => url.searchParams.delete(key));
      window.history.replaceState({}, '', url.pathname + url.search);
    }
  }, []);

  return (
    <div>
      <Navbar onOpenFormModal={openModal} />

      {/* Render the FormModal, controlled by showFormModal state */}
      
      <Landing />
      <SponsorList />
      <DemoPage onOpenFormModal={openModal} />
      <SignupBanner />
      <PricingFeaturesSection onOpenFormModal={openModal} />
      <SignupBanner />
      <FeatureSlider />
      <WhyChooseUsSection />
      <Testimonials />
      <FeatureSection onOpenFormModal={openModal} />
      <FAQSection />
      <Footer />
      <FormModal isOpen={showFormModal} onClose={closeModal} />
    </div>
  );
}

export default App;
