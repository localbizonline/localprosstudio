import React, { useState, useRef } from 'react';
import { Folder, File, Trash2, Upload, X, ZoomIn, Download, Copy, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useEffect } from 'react';
import ImageGallery from './ImageGallery';

interface ImageModalProps {
  asset: Asset | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ asset, onClose }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full bg-white rounded-lg shadow-2xl">
        <div className="absolute top-4 right-4 flex space-x-2">
          <a
            href={asset.url}
            download={asset.name}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            title="Download"
          >
            <Download className="w-6 h-6 text-gray-600" />
          </a>
          <button
            onClick={onClose}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            title="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <img
            src={asset.url}
            alt={asset.name}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            width={1200}
            height={800}
          />
        </div>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
          <p className="text-sm text-gray-600">{asset.name}</p>
        </div>
      </div>
    </div>
  );
};

const existingAssets = [
  {
    id: 'logo-webp',
    name: 'Local Pros Studio Logo.webp',
    type: 'image/webp',
    url: './src/assets/images/Local Pros Studio Logo.webp',
    size: 15360, // Estimated size
    createdAt: new Date('2024-01-01')
  },
  {
    id: 'mr-jpg',
    name: 'Mr.jpg',
    type: 'image/jpeg',
    url: './src/assets/images/Mr.jpg',
    size: 524288, // Estimated size
    createdAt: new Date('2024-01-01')
  },
  {
    id: 'hellopeter-svg',
    name: 'hellopeter.svg',
    type: 'image/svg+xml',
    url: './src/assets/images/hellopeter.svg',
    size: 2048, // Estimated size
    createdAt: new Date('2024-01-01')
  },
  {
    id: 'imac-backdrop',
    name: 'iMac Backdrop.png',
    type: 'image/png',
    url: './src/assets/images/mockups/iMac Backdrop.png',
    size: 1048576, // Estimated size
    createdAt: new Date('2024-01-01')
  }
];

interface Asset {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
  created_at: Date;
  storage_path: string;
}

const AssetManager: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadAssets();
    }
  }, []);

  const loadAssets = async () => {
    try {
      setLoading(true);
      setError('');
      const { data, error } = await supabase
        .from('assets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAssets(data || []);
    } catch (err) {
      console.error('Error loading assets:', err);
      setError('Failed to load assets');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setIsAuthenticated(true);
      setError('');
      loadAssets();
    } else {
      setError('Invalid password');
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    // Upload existing local assets first
    if (assets.length === 0) {
      setLoading(true);
      try {
        setUploadProgress('Uploading existing assets...');
        for (const asset of existingAssets) {
          setUploadProgress(`Uploading ${asset.name}...`);
          const response = await fetch(asset.url);
          const blob = await response.blob();
          const file = new File([blob], asset.name, { type: asset.type });
          
          const filePath = `assets/${Date.now()}-${file.name}`;
          
          // Upload to storage
          const { error: uploadError } = await supabase.storage
            .from('assets')
            .upload(filePath, file);

          if (uploadError) throw uploadError;

          // Get public URL
          const { data: { publicUrl } } = supabase.storage
            .from('assets')
            .getPublicUrl(filePath);

          // Insert record
          const { error: insertError } = await supabase
            .from('assets')
            .insert({
              id: crypto.randomUUID(),
              name: file.name,
              type: file.type,
              url: publicUrl,
              size: file.size,
              storage_path: filePath
            });

          if (insertError) throw insertError;
        }
        await loadAssets();
      } catch (err) {
        console.error('Error uploading existing assets:', err);
        setError('Failed to upload existing assets');
      } finally {
        setUploadProgress(null);
        setLoading(false);
      }
    }

    setLoading(true);
    try {
      for (const file of Array.from(files)) {
        const filePath = `assets/${Date.now()}-${file.name}`;
        
        // Upload to storage
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from('assets')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('assets')
          .getPublicUrl(filePath);

        // Insert record
        const { error: insertError } = await supabase
          .from('assets')
          .insert({
          id: crypto.randomUUID(),
          name: file.name,
          type: file.type,
          url: publicUrl,
          size: file.size,
          storage_path: filePath
        });

        if (insertError) throw insertError;
      }
      
      loadAssets();
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload file');
    } finally {
      setLoading(false);
    }
  };

  const deleteAsset = async (asset: Asset) => {
    try {
      setLoading(true);
      
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('assets')
        .remove([asset.storage_path]);

      if (storageError) throw storageError;

      // Delete record
      const { error: deleteError } = await supabase
        .from('assets')
        .delete()
        .eq('id', asset.id);

      if (deleteError) throw deleteError;

      loadAssets();
    } catch (err) {
      console.error('Delete error:', err);
      setError('Failed to delete asset');
    } finally {
      setLoading(false);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-ZA', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Folder className="w-12 h-12 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Asset Manager</h2>
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Images</h2>
          <ImageGallery />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Asset Manager</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {assets.length} assets • {formatSize(assets.reduce((acc, asset) => acc + asset.size, 0))} total
              </span>
              {loading && (
                <span className="text-sm text-primary-600">{uploadProgress}</span>
              )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Asset
            </button>
            </div>
            {error && (
              <p className="text-sm text-red-600 mt-2">{error}</p>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              multiple
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
            />
          </div>

          {assets.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <Folder className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No assets uploaded yet</p>
              <p className="text-sm text-gray-400 mt-2">Upload files to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {assets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {asset.type.startsWith('image/') ? (
                            <div
                              className="w-10 h-10 rounded bg-gray-100 mr-3 flex items-center justify-center overflow-hidden cursor-pointer group relative"
                              onClick={() => setSelectedAsset(asset)}
                            >
                              <img src={asset.url} alt={asset.name} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          ) : (
                            <File className="w-5 h-5 text-gray-400 mr-3" />
                          )}
                          <span className="text-sm text-gray-900">{asset.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{asset.type}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{formatSize(asset.size)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{formatDate(new Date(asset.created_at))}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => copyToClipboard(asset.url, asset.id)}
                            className="text-gray-600 hover:text-gray-900 relative group"
                            title="Copy URL"
                          >
                            {copiedId === asset.id ? (
                              <Check className="w-5 h-5 text-green-600" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                            <span className="absolute right-0 top-full mt-2 w-auto min-w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {copiedId === asset.id ? 'Copied!' : 'Copy URL'}
                            </span>
                          </button>
                        <button
                          onClick={() => deleteAsset(asset)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Image Modal */}
          {selectedAsset && (
            <ImageModal
              asset={selectedAsset}
              onClose={() => setSelectedAsset(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetManager;