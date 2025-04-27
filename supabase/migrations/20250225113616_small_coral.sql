/*
  # Create storage bucket for assets

  1. Storage
    - Create public bucket named 'assets'
    - Enable public access for asset files
*/

-- Create a new public storage bucket for assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('assets', 'assets', true);

-- Allow public access to files in the assets bucket
CREATE POLICY "Public Access"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'assets');

-- Allow public uploads to the assets bucket
CREATE POLICY "Public Upload"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'assets');

-- Allow public deletes from the assets bucket
CREATE POLICY "Public Delete"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'assets');