import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import portfolio images
import mockup1 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (1).png';
import mockup2 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (2).png';
import mockup3 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (3).png';
import mockup4 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (4).png';
import mockup5 from '../assets/images/Compressed/MacBook iPhone 8 mockup (5).png';
import mockup6 from '../assets/images/Compressed/MacBook iPhone 8 mockup (6).png';

const portfolioImages = [
  { src: mockup1, alt: 'Website Design 1' },
  { src: mockup2, alt: 'Website Design 2' },
  { src: mockup3, alt: 'Website Design 3' },
  { src: mockup4, alt: 'Website Design 4' },
  { src: mockup5, alt: 'Website Design 5' },
  { src: mockup6, alt: 'Website Design 6' }
];

interface PortfolioSliderProps {
  hideControls?: boolean;
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ hideControls = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (isPaused || !autoplayEnabled) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === portfolioImages.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, autoplayEnabled]);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsPaused(true);
    setAutoplayEnabled(false);
    setCurrentIndex((prev) => (prev === 0 ? portfolioImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsPaused(true);
    setAutoplayEnabled(false);
    setCurrentIndex((prev) => (prev === portfolioImages.length - 1 ? 0 : prev + 1)); 
  };

  return (
    <div className="relative max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {!hideControls && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          <div className="relative w-full h-full">
            {portfolioImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${
                  index === currentIndex 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentIndex
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;