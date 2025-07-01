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

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <SponsorList />
      <DemoPage />
      <SignupBanner />
      <PricingFeaturesSection />
      <SignupBanner />
      <FeatureSlider />
      <WhyChooseUsSection />
      <FAQSection />
      <Footer />
      <main className="p-4">
        <h2 className="text-2xl font-bold">Landing Page Content</h2>
      </main>
    </div>
  );
}

export default App;
