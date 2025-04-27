/*
  # Set up CDN storage bucket

  1. New Storage Bucket
    - Creates a public bucket for CDN assets
    - Sets up appropriate security policies
  
  2. Security
    - Enables public read access
    - Restricts write access to authenticated users
*/

-- Create a new public storage bucket for CDN assets if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'cdn'
  ) THEN
    INSERT INTO storage.buckets (id, name, public)
    VALUES ('cdn', 'cdn', true);
  END IF;
END $$;

-- Allow public read access to files in the CDN bucket
CREATE POLICY "Public Read CDN"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'cdn');

-- Allow authenticated users to upload to CDN bucket
CREATE POLICY "Auth Upload CDN"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'cdn');

-- Allow authenticated users to update their own uploads
CREATE POLICY "Auth Update CDN"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'cdn' AND auth.uid() = owner);

-- Allow authenticated users to delete their own uploads
CREATE POLICY "Auth Delete CDN"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'cdn' AND auth.uid() = owner);