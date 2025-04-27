/*
  # Create assets table without user_id requirement

  1. New Tables
    - `assets`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text)
      - `url` (text)
      - `size` (bigint)
      - `storage_path` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `assets` table
    - Add policies for public access since we're using password auth
*/

-- Create assets table
CREATE TABLE IF NOT EXISTS assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  url text NOT NULL,
  size bigint NOT NULL,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;

-- Policies for public access (protected by password in the app)
CREATE POLICY "Public can view assets"
  ON assets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can insert assets"
  ON assets
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can delete assets"
  ON assets
  FOR DELETE
  TO public
  USING (true);