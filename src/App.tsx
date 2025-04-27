/*
Changes made:
- Moved useLocation hook inside a new component called AppContent that's rendered within BrowserRouter
- Restructured the component hierarchy to ensure all routing hooks are used within Router context
*/

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import GradientButton from './components/GradientButton'; 
import HeroSection from './components/HeroSection';
import CallToAction from './components/CallToAction';
import PainPoints from './components/PainPoints';
import ServicesSection from './components/ServicesSection';
import SocialProofSection from './components/SocialProofSection';
import BrowserMockup from './components/BrowserMockup';
import LeadGenSection from './components/LeadGenSection';
import WebDesignPage from './components/WebDesignPage';
import GoogleAdsPage from './components/GoogleAdsPage';
import AssetManager from './components/AssetManager';
import AlternativeWebDesignPage from './components/AlternativeWebDesignPage';
import ImageGallery from './components/ImageGallery';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import SocialMediaPage from './components/SocialMediaPage';
import Home2Page from './components/Home2Page';
import logo from './assets/images/Compressed/Local Pros Studio logo transparent.png';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Local Pros Studio" className="h-8 w-auto" width="120" height="32" />
          </Link>
          <div className="flex items-center space-x-4">
            <GradientButton 
              href="https://wa.me/27787869161?text=Interested%20in%20Local%20Pros%20Studio"
              className="!py-2 !px-6 !text-base hidden md:inline-flex"
            >
              Chat on WhatsApp
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <SocialProofSection />
    <LeadGenSection />
    <CallToAction />
  </>
);


const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <MobileCTA />
      <main>
        <Routes>
          <Route path="/" element={<Home2Page />} />
          <Route path="/home-classic" element={<HomePage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/web-design-alt" element={<AlternativeWebDesignPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/asset-manager" element={<AssetManager />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;