import React from 'react';

interface BrowserMockupProps {
  url: string;
}

const BrowserMockup: React.FC<BrowserMockupProps> = ({ url }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative aspect-[16/10] bg-white rounded-2xl shadow-2xl">
        {/* Website screenshot */}
        <div className="absolute top-[80px] left-[60px] right-[60px] bottom-[40px] bg-white flex items-center justify-center overflow-hidden">
          <img
            src="/src/assets/images/Mr.jpg"
            alt="Website Screenshot"
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg p-4"
            style={{
              maxWidth: 'calc(100% - 2rem)',
              maxHeight: 'calc(100% - 2rem)'
            }}
          />
        </div>
        
        {/* Computer frame */}
        <svg
          viewBox="0 0 1280 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main monitor frame */}
          <rect
            x="40"
            y="20"
            width="1200"
            height="700"
            rx="20"
            fill="#1a1a1a"
            className="drop-shadow-2xl"
          />
          
          {/* Screen */}
          <rect
            x="60"
            y="40"
            width="1160"
            height="660"
            rx="8"
            fill="white"
          />

          {/* Browser chrome */}
          <rect
            x="60"
            y="40"
            width="1160" 
            height="40"
            fill="#f1f5f9"
            className="drop-shadow-sm"
          />

          {/* URL bar */}
          <rect
            x="200"
            y="48"
            width="880"
            height="24"
            rx="4"
            fill="white"
            stroke="#e2e8f0"
          />

          {/* Browser controls */}
          <circle cx="100" cy="60" r="6" fill="#ef4444" />
          <circle cx="130" cy="60" r="6" fill="#fbbf24" />
          <circle cx="160" cy="60" r="6" fill="#22c55e" />

          {/* Stand */}
          <path
            d="M540 720 L740 720 L690 780 L590 780 Z"
            fill="#1a1a1a"
          />
          <rect
            x="590"
            y="780"
            width="100"
            height="20"
            fill="#1a1a1a"
          />
        </svg>

        {/* URL text */}
        <div className="absolute top-[48px] left-[200px] right-[200px] h-[24px] flex items-center px-3">
          <span className="text-gray-400 text-sm truncate font-mono">{url}</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;