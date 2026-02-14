import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SocialProofSection from './components/SocialProofSection';
import LeadGenSection from './components/LeadGenSection';
import CallToAction from './components/CallToAction';
import Home2Page from './components/Home2Page';
import Home3Page from './components/Home3Page';
import Home4Page from './components/Home4Page';
import Footer from './components/Footer';
import FieldCardPage from './components/FieldCardPage';
import ReviewCollectionPage from './components/ReviewCollectionPage';
import ReviewCollectionPageArchive from './components/ReviewCollectionPageArchive';
import SocialMediaPage from './components/SocialMediaPage';
import WebDesignPage from './components/WebDesignPage';
import AboutPage from './components/AboutPage';
import MobileCTA from './components/MobileCTA';
import CursorOpusLandingPage from './components/CursorOpusLandingPage';
import GeminiFlashLandingPage from './components/GeminiFlashLandingPage';
import Gpt52LandingPage from './components/Gpt52LandingPage';
import LandingPage from './components/LandingPage';
import HomeFunnelPage from './components/HomeFunnelPage';
import ReviewFunnelPage from './components/ReviewFunnelPage';
import ReputationManagementPage from './components/ReputationManagementPage';
import GoogleAdsPage from './components/GoogleAdsPage';
import AlternativeWebDesignPage from './components/AlternativeWebDesignPage';
import ReachMaxPage from './components/ReachMaxPage';
import ImageGallery from './components/ImageGallery';
import HomeServicesPage from './components/HomeServicesPage';
import ReviewCollectionProPage from './components/ReviewCollectionProPage';
import ReviewsProClientiPage from './components/ReviewsProClientiPage';
import ReviewsLetterPage from './components/ReviewsLetterPage';
import LandingPagesDirectory from './components/LandingPagesDirectory';
import SocialPostingPageV2 from './components/SocialPostingPageV2';
import HomeCodexPage from './components/HomeCodexPage';
import HomeGeminiPage from './components/HomeGeminiPage';
import HomeSalesLetterPage from './components/HomeSalesLetterPage';
import SpecialOfferGeminiProPage from './components/SpecialOfferGeminiProPage';
import SpecialOfferOpusPage from './components/SpecialOfferOpusPage';
import SpecialOfferGpt52Page from './components/SpecialOfferGpt52Page';
import RecurringServicesPage from './components/RecurringServicesPage';
import RecurringServicesLetterPage from './components/RecurringServicesLetterPage';
import logo from './assets/images/Compressed/Local Pros Studio logo transparent.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Reviews', href: '/reviews' },
    { name: 'Social Media', href: '/social-media-posting-service' },
    { name: 'Web Design', href: '/web-design' },
    { name: 'Recurring Services', href: '/recurring-services' },
    { name: 'Special Offer', href: '/special-offer-opus' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
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
              href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20getting%20more%20reviews%20and%20growing%20my%20social%20presence"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    event_category: 'engagement',
                    event_label: 'header_get_started',
                    value: 1
                  });
                }
              }}
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
          <div className="md:hidden py-4 border-t border-neutral-800 max-h-[80vh] overflow-y-auto">
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
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20getting%20more%20reviews%20and%20growing%20my%20social%20presence"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 mx-4"
                onClick={() => {
                  setIsOpen(false);
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'mobile_menu_get_started',
                      value: 1
                    });
                  }
                }}
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

// Original HomePage with Services
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

  // Landing pages that should NOT show footer or mobile CTA (but we'll show Nav for switching)
  const isSpecialLandingPage = [
    '/cursor-opus-landing-page',
    '/gemini-flash-landing-page',
    '/gpt-52-landing-page',
    '/claude-code-landing-page',
    '/special-offer-gemini-pro',
    '/special-offer-opus',
    '/pages',
  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeGeminiPage />} />
          <Route path="/home-services" element={<HomeServicesPage />} />
          <Route path="/home2" element={<Home2Page />} />
          <Route path="/home3" element={<Home3Page />} />
          <Route path="/home4" element={<Home4Page />} />
          <Route path="/home-funnel" element={<HomeFunnelPage />} />
          <Route path="/reviews-funnel" element={<ReviewFunnelPage />} />
          <Route path="/reviews" element={<ReviewsLetterPage />} />
          <Route path="/reviews-old" element={<ReviewCollectionPageArchive />} />
          <Route path="/reviews-pro" element={<ReviewCollectionProPage />} />
          <Route path="/reviews-clienti" element={<ReviewsProClientiPage />} />
          <Route path="/reviews-extreme" element={<ReviewsProClientiPage />} />
          <Route path="/reviews-letter" element={<ReviewsLetterPage />} />
          <Route path="/social-media-posting-service" element={<SocialPostingPageV2 />} />
          <Route path="/social-posting-v2" element={<SocialPostingPageV2 />} />
          <Route path="/home-codex" element={<HomeCodexPage />} />
          <Route path="/homegemini" element={<HomeGeminiPage />} />
          <Route path="/sales" element={<HomeSalesLetterPage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/fieldcard" element={<FieldCardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recurring-services" element={<RecurringServicesPage />} />
          <Route path="/recurring-service-booking-system" element={<RecurringServicesLetterPage />} />
          <Route path="/reputation" element={<ReputationManagementPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/web-design-alt" element={<AlternativeWebDesignPage />} />
          <Route path="/reachmax" element={<ReachMaxPage />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/pages" element={<LandingPagesDirectory />} />

          {/* Special Landing Pages */}
          <Route path="/cursor-opus-landing-page" element={<CursorOpusLandingPage />} />
          <Route path="/gemini-flash-landing-page" element={<GeminiFlashLandingPage />} />
          <Route path="/gpt-52-landing-page" element={<Gpt52LandingPage />} />
          <Route path="/claude-code-landing-page" element={<LandingPage />} />
          <Route path="/special-offer-gemini-pro" element={<SpecialOfferGeminiProPage />} />
          <Route path="/special-offer-opus" element={<SpecialOfferOpusPage />} />
          <Route path="/special-offer-gpt.5.2" element={<SpecialOfferGpt52Page />} />
          <Route path="/special-offer-gpt.5.2/" element={<SpecialOfferGpt52Page />} />

          {/* Legacy routes */}
          <Route path="/reputation/reviews" element={<ReviewCollectionPage />} />
        </Routes>
      </main>
      {!isSpecialLandingPage && <Footer />}
      {!isSpecialLandingPage && <MobileCTA />}
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
