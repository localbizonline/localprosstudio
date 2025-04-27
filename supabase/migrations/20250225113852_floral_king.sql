/*
  # Move existing assets to Supabase storage

  1. Changes
    - Ensure storage bucket exists
    - Add policies for public access to storage
*/

-- Ensure the assets bucket exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'assets'
  ) THEN
    INSERT INTO storage.buckets (id, name, public)
    VALUES ('assets', 'assets', true);
  END IF;
END $$;

-- Ensure storage policies exist
DO $$
BEGIN
  -- Public read access
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND schemaname = 'storage' 
    AND policyname = 'Public Read'
  ) THEN
    CREATE POLICY "Public Read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'assets');
  END IF;

  -- Public write access
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND schemaname = 'storage' 
    AND policyname = 'Public Write'
  ) THEN
    CREATE POLICY "Public Write"
    ON storage.objects
    FOR INSERT
    TO public
    WITH CHECK (bucket_id = 'assets');
  END IF;

  -- Public delete access
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND schemaname = 'storage' 
    AND policyname = 'Public Delete'
  ) THEN
    CREATE POLICY "Public Delete"
    ON storage.objects
    FOR DELETE
    TO public
    USING (bucket_id = 'assets');
  END IF;
END $$;