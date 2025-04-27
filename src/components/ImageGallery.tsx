import React, { useState } from 'react';
import { Copy, Check, Upload } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Import Folder icon
import { Folder } from 'lucide-react';

const images = [
  {
    path: new URL('../assets/images/Compressed/1 in one locksmith.jpg', import.meta.url).href,
    name: '1 in one locksmith.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Affordable water proofing.jpg', import.meta.url).href,
    name: 'Affordable water proofing.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/affrodable water proofing team.jpg', import.meta.url).href,
    name: 'affrodable water proofing team.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Bercon Construction & Civils.jpg', import.meta.url).href,
    name: 'Bercon Construction & Civils.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Blue fuel gas.jpeg', import.meta.url).href,
    name: 'Blue fuel gas.jpeg'
  },
  {
    path: new URL('../assets/images/Compressed/BugsAway.jpg', import.meta.url).href,
    name: 'BugsAway.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/DK Turf & Paving.jpg', import.meta.url).href,
    name: 'DK Turf & Paving.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/G and L Tech Services.jpg', import.meta.url).href,
    name: 'G and L Tech Services.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Heldervue Solar.jpg', import.meta.url).href,
    name: 'Heldervue Solar.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/lady looking at tablet.jpeg', import.meta.url).href,
    name: 'lady looking at tablet.jpeg'
  },
  {
    path: new URL('../assets/images/Compressed/Lead Gen Clients 400x516.jpg', import.meta.url).href,
    name: 'Lead Gen Clients 400x516.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Local Pros business card.jpg', import.meta.url).href,
    name: 'Local Pros business card.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Plumbing Service Template.jpg', import.meta.url).href,
    name: 'Plumbing Service Template.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Plumbing Website Templates.jpg', import.meta.url).href,
    name: 'Plumbing Website Templates.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Plumbing-Spl.jpg', import.meta.url).href,
    name: 'Plumbing-Spl.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/TinyPNG Feb 10 174841.jpg', import.meta.url).href,
    name: 'TinyPNG Feb 10 174841.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Unicorn Dolphin Group.jpg', import.meta.url).href,
    name: 'Unicorn Dolphin Group.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/Wild Stallion Advance Solutions.jpg', import.meta.url).href,
    name: 'Wild Stallion Advance Solutions.jpg'
  },
  {
    path: new URL('../assets/images/Compressed/angled-sony-xperia-z5-mockup-held-by-a-black-man-a11077.png', import.meta.url).href,
    name: 'angled-sony-xperia-z5-mockup-held-by-a-black-man-a11077.png'
  },
  {
    path: new URL('../assets/images/Compressed/Edit Media 33.png', import.meta.url).href,
    name: 'Edit Media 33.png'
  },
  {
    path: new URL('../assets/images/Compressed/iMac Backdrop.png', import.meta.url).href,
    name: 'iMac Backdrop.png'
  },
  {
    path: new URL('../assets/images/Compressed/Local Pros Rectangle Light BG.png', import.meta.url).href,
    name: 'Local Pros Rectangle Light BG.png'
  },
  {
    path: new URL('../assets/images/Compressed/Local Pros Studio logo transparent.png', import.meta.url).href,
    name: 'Local Pros Studio logo transparent.png'
  },
  {
    path: new URL('../assets/images/Compressed/Local Pros women team member .png', import.meta.url).href,
    name: 'Local Pros women team member .png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup (1).png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup (1).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup (2).png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup (2).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup (3).png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup (3).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup (4).png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup (4).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 mockup (5).png', import.meta.url).href,
    name: 'MacBook iPhone 8 mockup (5).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 mockup (6).png', import.meta.url).href,
    name: 'MacBook iPhone 8 mockup (6).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup (7).png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup (7).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup (8).png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup (8).png'
  },
  {
    path: new URL('../assets/images/Compressed/MacBook iPhone 8 Mockup.png', import.meta.url).href,
    name: 'MacBook iPhone 8 Mockup.png'
  },
  {
    path: new URL('../assets/images/Compressed/Minimalist Agency Logo (2).png', import.meta.url).href,
    name: 'Minimalist Agency Logo (2).png'
  },
  {
    path: new URL('../assets/images/Compressed/Minimalist Agency Logo.png', import.meta.url).href,
    name: 'Minimalist Agency Logo.png'
  },
  {
    path: new URL('../assets/images/Compressed/MTech Solutions.png', import.meta.url).href,
    name: 'MTech Solutions.png'
  },
  {
    path: new URL('../assets/images/Compressed/online-logo-maker-for-a-plumbing-company-with-wrench-clipart-with-tools-clipart-1167c (2).png', import.meta.url).href,
    name: 'online-logo-maker-for-a-plumbing-company-with-wrench-clipart-with-tools-clipart-1167c (2).png'
  },
  {
    path: new URL('../assets/images/Compressed/online-logo-maker-for-a-plumbing-company-with-wrench-clipart-with-tools-clipart-1167c (3).png', import.meta.url).href,
    name: 'online-logo-maker-for-a-plumbing-company-with-wrench-clipart-with-tools-clipart-1167c (3).png'
  },
  {
    path: new URL('../assets/images/Compressed/Plumbing Company Logo (1).png', import.meta.url).href,
    name: 'Plumbing Company Logo (1).png'
  },
  {
    path: new URL('../assets/images/Compressed/smartmockups_m09k7lkc.png', import.meta.url).href,
    name: 'smartmockups_m09k7lkc.png'
  },
  {
    path: new URL('../assets/images/Compressed/smartmockups_m09k63q9.png', import.meta.url).href,
    name: 'smartmockups_m09k63q9.png'
  },
  {
    path: new URL('../assets/images/Compressed/smartmockups_m09klmcm.png', import.meta.url).href,
    name: 'smartmockups_m09klmcm.png'
  },
  {
    path: new URL('../assets/images/Compressed/smartmockups_m09l4ef5.png', import.meta.url).href,
    name: 'smartmockups_m09l4ef5.png'
  },
  {
    path: new URL('../assets/images/Compressed/Tensi Shade.png', import.meta.url).href,
    name: 'Tensi Shade.png'
  },
  {
    path: new URL('../assets/images/Compressed/White iPhone 6 Plus held.png', import.meta.url).href,
    name: 'White iPhone 6 Plus held.png'
  },
  {
    path: new URL('../assets/images/Compressed/Woman iPhone 11 Pro copy.png', import.meta.url).href,
    name: 'Woman iPhone 11 Pro copy.png'
  },
  {
    path: new URL('../assets/images/Compressed/Woman iPhone 11 Pro.png', import.meta.url).href,
    name: 'Woman iPhone 11 Pro.png'
  }
];

const ImageGallery = () => {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    setIsUploading(true);
    try {
      for (const file of Array.from(files)) {
        const filePath = `compressed/${Date.now()}-${file.name}`;
        
        // Upload to Supabase storage
        const { error: uploadError } = await supabase.storage
          .from('assets')
          .upload(filePath, file);

        if (uploadError) throw uploadError;
      }
      
      // Refresh the page to show new images
      window.location.reload();
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = async (path: string) => {
    try {
      await navigator.clipboard.writeText(path);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Folder className="w-12 h-12 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Image Gallery</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                required
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Local Images</h2>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            multiple
            accept="image/*"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className={`inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${
              isUploading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isUploading}
          >
            <Upload className="w-5 h-5 mr-2" />
            {isUploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="relative"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={image.path}
                alt={image.name}
                className="w-full h-full object-contain bg-gray-50 p-2"
                width={640}
                height={360}
                loading="lazy"
              />
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 truncate max-w-[70%]" title={image.name}>
                  {image.name}
                </span>
                <button
                  onClick={() => copyToClipboard(image.path)}
                  className="ml-2 p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                  title="Copy path"
                >
                  {copiedPath === image.path ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="mt-2">
                <code className="text-xs text-gray-500 break-all bg-gray-50 p-2 rounded block overflow-x-auto">
                  {image.path}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;