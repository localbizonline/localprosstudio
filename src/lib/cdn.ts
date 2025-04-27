import { supabase } from './supabase';

const CDN_BUCKET = 'assets';

export const getCdnUrl = (path: string) => {
  const { data } = supabase.storage
    .from(CDN_BUCKET)
    .getPublicUrl(path);
  
  return data.publicUrl;
};

export const uploadToCdn = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from(CDN_BUCKET)
    .upload(path, file);

  if (error) {
    throw error;
  }

  return getCdnUrl(data.path);
};