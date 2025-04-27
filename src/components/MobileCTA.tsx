import React from 'react';
import { ArrowRight } from 'lucide-react';

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent md:hidden z-50">
      <a
        href="https://wa.me/27787869161?text=Interested%20in%20Local%20Pros%20Studio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full px-6 py-4 text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 transition-colors shadow-lg"
      >
        Chat on WhatsApp
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  );
};

export default MobileCTA;