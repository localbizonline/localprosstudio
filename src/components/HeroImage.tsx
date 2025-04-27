import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  maxWidth?: number;
  aspectRatio?: number;
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  className = ''
}) => {
  return (
    <div 
      className={`relative ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-auto object-contain rounded-lg sm:rounded-xl lg:rounded-2xl"
        style={{ width: 'auto', maxHeight: '80vh' }}
        loading="eager"
        fetchpriority="high"
      />
    </div>
  );
};

export default HeroImage;