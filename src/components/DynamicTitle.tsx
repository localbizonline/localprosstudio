import React, { useState, useEffect } from 'react';

const serviceProviders = [
  'Plumbers',
  'Electricians',
  'Landscapers',
  'Contractors',
  'Painters',
  'HVAC Services',
  'Cleaning Services',
  'Pest Control',
  'Roofers',
  'Pool Services'
];

const DynamicTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Smooth text transition
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typeText = (text: string, currentLength: number) => {
    if (currentLength <= text.length) {
      setDisplayText(text.slice(0, currentLength));
      setTimeout(() => {
        typeText(text, currentLength + 1);
      }, 50); // Adjust typing speed here
    } else {
      setIsTyping(false);
    }
  };

  const startTypingAnimation = (text: string) => {
    setIsTyping(true);
    setIsAnimating(false);
    typeText(text, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsAnimating(false);

      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % serviceProviders.length;
        setCurrentIndex(nextIndex);
        startTypingAnimation(serviceProviders[nextIndex]);
      }, 500);

    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    startTypingAnimation(serviceProviders[0]);
  }, []);

  return (
    <div className="h-[40px] sm:h-[48px] overflow-hidden">
      <div className="text-3xl sm:text-4xl text-secondary-500 font-bold relative">
        <span className="relative">
          {displayText}
          {isTyping && (
            <span className="animate-pulse">|</span>
          )}
          <span 
            className={`absolute inset-x-0 -bottom-2 h-2 bg-secondary-500 -rotate-2 transition-opacity duration-800 ease-in-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default DynamicTitle;