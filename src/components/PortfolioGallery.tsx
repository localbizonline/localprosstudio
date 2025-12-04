import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import portfolio images
import mockup1 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (1).png';
import mockup2 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (2).png';
import mockup3 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (3).png';
import mockup4 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (4).png';
import mockup5 from '../assets/images/Compressed/MacBook iPhone 8 mockup (5).png';
import mockup6 from '../assets/images/Compressed/MacBook iPhone 8 mockup (6).png';

const portfolioItems = [
  { image: mockup1, title: 'Maramba Fence & Gates', category: 'Home Services' },
  { image: mockup2, title: 'LAK Security', category: 'Security Services' },
  { image: mockup3, title: 'Pool Pro', category: 'Pool Services' },
  { image: mockup4, title: 'Clean Home', category: 'Cleaning Services' },
  { image: mockup5, title: 'Garden Masters', category: 'Landscaping' },
  { image: mockup6, title: 'Fix It Right', category: 'Handyman Services' }
];

interface ImageModalProps {
  image: string;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  image, 
  title, 
  onClose, 
  onPrev, 
  onNext,
  hasPrev,
  hasNext 
}) => {
  return (
    <div 
      className="fixed inset-0 bg-neutral-950/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      <div 
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
        <p className="text-white text-center mt-4 font-medium">{title}</p>
      </div>
    </div>
  );
};

const PortfolioGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < portfolioItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative bg-neutral-100 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium text-neutral-900">{item.title}</h3>
              <p className="text-sm text-neutral-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <ImageModal
          image={portfolioItems[selectedIndex].image}
          title={portfolioItems[selectedIndex].title}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < portfolioItems.length - 1}
        />
      )}
    </div>
  );
};

export default PortfolioGallery;
