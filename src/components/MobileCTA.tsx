import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 md:hidden transition-all duration-300 ${
        hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-lg"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/27787869161?text=Hi%2C%20I'm%20interested%20in%20Local%20Pros%20Studio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-neutral-900 text-white rounded-full shadow-soft-xl hover:bg-neutral-800 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
