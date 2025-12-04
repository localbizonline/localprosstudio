import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import CallToAction from './components/CallToAction';
import ServicesSection from './components/ServicesSection';
import SocialProofSection from './components/SocialProofSection';
import LeadGenSection from './components/LeadGenSection';
import WebDesignPage from './components/WebDesignPage';
import GoogleAdsPage from './components/GoogleAdsPage';
import AlternativeWebDesignPage from './components/AlternativeWebDesignPage';
import ImageGallery from './components/ImageGallery';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import SocialMediaPage from './components/SocialMediaPage';
import Home2Page from './components/Home2Page';
import Footer from './components/Footer';
import FieldCardPage from './components/FieldCardPage';
import ReachMaxPage from './components/ReachMaxPage';
import ReputationManagementPage from './components/ReputationManagementPage';
import ReviewCollectionPage from './components/ReviewCollectionPage';
import logo from './assets/images/Compressed/Local Pros Studio logo transparent.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Web Design', href: '/web-design' },
    { name: 'Google Ads', href: '/google-ads' },
    { name: 'Reputation', href: '/reputation' },
    { name: 'Reviews', href: '/reputation/reviews' },
    { name: 'Social', href: '/social-media' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  return (
    <nav className="sticky top-0 w-full backdrop-blur-lg z-50 bg-neutral-950/90 border-b border-neutral-800">
      <div className="container-lg">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Local Pros Studio" 
              className="h-8 w-auto"
              width="120" 
              height="32" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-white bg-neutral-800'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Local%20Pros%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-white bg-neutral-800'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20Local%20Pros%20Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 mx-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        )}
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
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home2Page />} />
          <Route path="/home-classic" element={<HomePage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/web-design-alt" element={<AlternativeWebDesignPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/reputation" element={<ReputationManagementPage />} />
          <Route path="/reputation/reviews" element={<ReviewCollectionPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/fieldcard" element={<FieldCardPage />} />
          <Route path="/reachmax" element={<ReachMaxPage />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
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
