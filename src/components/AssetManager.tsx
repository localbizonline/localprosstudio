import React, { useState, useRef } from 'react';
import { Folder, File, X, ZoomIn, Download, Copy, Check } from 'lucide-react';
import ImageGallery from './ImageGallery';


const AssetManager: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Images</h2>
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default AssetManager;