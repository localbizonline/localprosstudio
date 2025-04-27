import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

// Import portfolio images
import mockup1 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (1).png';
import mockup2 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (2).png';
import mockup3 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (3).png';
import mockup4 from '../assets/images/Compressed/MacBook iPhone 8 Mockup (4).png';
import mockup5 from '../assets/images/Compressed/MacBook iPhone 8 mockup (5).png';
import mockup6 from '../assets/images/Compressed/MacBook iPhone 8 mockup (6).png';

const portfolioItems = [
  { image: mockup1, title: 'Modern Business Website' },
  { image: mockup2, title: 'E-commerce Platform' },
  { image: mockup3, title: 'Service Provider Website' },
  { image: mockup4, title: 'Professional Portfolio' },
  { image: mockup5, title: 'Corporate Website' },
  { image: mockup6, title: 'Digital Agency Website' }
];

interface ImageModalProps {
  image: string;
  title: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-2xl"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={500}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default PortfolioGallery;