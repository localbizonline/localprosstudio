/*
  # Update assets table policies

  1. Changes
    - Safely drop existing policies if they exist
    - Remove user_id column if it exists
    - Recreate policies only if they don't exist
*/

-- Drop existing RLS policies if they exist
DO $$ 
BEGIN
  -- Drop policies if they exist
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Users can view their own assets'
  ) THEN
    DROP POLICY "Users can view their own assets" ON assets;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Users can insert assets'
  ) THEN
    DROP POLICY "Users can insert assets" ON assets;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Users can delete their own assets'
  ) THEN
    DROP POLICY "Users can delete their own assets" ON assets;
  END IF;

  -- Drop public policies if they exist
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Public can view assets'
  ) THEN
    DROP POLICY "Public can view assets" ON assets;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Public can insert assets'
  ) THEN
    DROP POLICY "Public can insert assets" ON assets;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Public can delete assets'
  ) THEN
    DROP POLICY "Public can delete assets" ON assets;
  END IF;
END $$;

-- Remove user_id column if it exists
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'assets' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE assets DROP COLUMN user_id;
  END IF;
END $$;

-- Create new public policies if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Public can view assets'
  ) THEN
    CREATE POLICY "Public can view assets"
      ON assets
      FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Public can insert assets'
  ) THEN
    CREATE POLICY "Public can insert assets"
      ON assets
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assets' AND policyname = 'Public can delete assets'
  ) THEN
    CREATE POLICY "Public can delete assets"
      ON assets
      FOR DELETE
      TO public
      USING (true);
  END IF;
END $$;