import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
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
import logo from './assets/images/Compressed/Local Pros Studio logo transparent.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Social Media', href: '/social-media' },
    { name: 'About', href: '/about' },
  ];

  const landingPages = [
    { name: 'Home (Original)', href: '/' },
    { name: 'Home Services (Dec)', href: '/home-services' },
    { name: 'Home V2', href: '/home2' },
    { name: 'Home V3', href: '/home3' },
    { name: 'Home V4', href: '/home4' },
    { name: 'Home Funnel', href: '/home-funnel' },
    { name: 'Reputation Management', href: '/reputation' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Reviews (Old)', href: '/reviews-old' },
    { name: 'Reviews Pro', href: '/reviews-pro' },
    { name: 'Reviews Pro (Clienti)', href: '/reviews-clienti' },
    { name: 'Reviews Pro (Extreme)', href: '/reviews-extreme' },
    { name: 'Reviews Funnel', href: '/reviews-funnel' },
    { name: 'Social Media', href: '/social-media' },
    { name: 'Web Design', href: '/web-design' },
    { name: 'Web Design Alt', href: '/web-design-alt' },
    { name: 'Google Ads', href: '/google-ads' },
    { name: 'FieldCard', href: '/fieldcard' },
    { name: 'ReachMax', href: '/reachmax' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Cursor Opus', href: '/cursor-opus-landing-page' },
    { name: 'Gemini Flash', href: '/gemini-flash-landing-page' },
    { name: 'GPT 5.2', href: '/gpt-52-landing-page' },
    { name: 'Claude Code', href: '/claude-code-landing-page' },
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
            
            {/* Pages Dropdown */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                onBlur={() => setTimeout(() => setIsPagesOpen(false), 200)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              >
                All Landing Pages
                <ChevronDown className={`w-4 h-4 transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPagesOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 text-[10px] font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-800 mb-1">
                    Versions & Landing Pages
                  </div>
                  {landingPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        isActive(page.href)
                          ? 'text-white bg-neutral-800'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20getting%20more%20reviews%20and%20growing%20my%20social%20presence"
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

              <div className="px-4 py-3">
                <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">
                  All Landing Pages
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {landingPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(page.href)
                          ? 'text-white bg-neutral-800 font-semibold'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/27832336716?text=Hi%2C%20I'm%20interested%20in%20getting%20more%20reviews%20and%20growing%20my%20social%20presence"
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
  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeServicesPage />} />
          <Route path="/home-services" element={<HomeServicesPage />} />
          <Route path="/home2" element={<Home2Page />} />
          <Route path="/home3" element={<Home3Page />} />
          <Route path="/home4" element={<Home4Page />} />
          <Route path="/home-funnel" element={<HomeFunnelPage />} />
          <Route path="/reviews-funnel" element={<ReviewFunnelPage />} />
          <Route path="/reviews" element={<ReviewsProClientiPage />} />
          <Route path="/reviews-old" element={<ReviewCollectionPageArchive />} />
          <Route path="/reviews-pro" element={<ReviewCollectionProPage />} />
          <Route path="/reviews-clienti" element={<ReviewCollectionProPage />} />
          <Route path="/reviews-extreme" element={<ReviewsProClientiPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/fieldcard" element={<FieldCardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reputation" element={<ReputationManagementPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/web-design-alt" element={<AlternativeWebDesignPage />} />
          <Route path="/reachmax" element={<ReachMaxPage />} />
          <Route path="/gallery" element={<ImageGallery />} />
          
          {/* Special Landing Pages */}
          <Route path="/cursor-opus-landing-page" element={<CursorOpusLandingPage />} />
          <Route path="/gemini-flash-landing-page" element={<GeminiFlashLandingPage />} />
          <Route path="/gpt-52-landing-page" element={<Gpt52LandingPage />} />
          <Route path="/claude-code-landing-page" element={<LandingPage />} />

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
