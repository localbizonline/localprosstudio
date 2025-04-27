/*
  # Create assets table

  1. New Tables
    - `assets`
      - `id` (uuid, primary key)
      - `name` (text) - Asset filename
      - `type` (text) - MIME type
      - `url` (text) - Asset URL
      - `size` (bigint) - File size in bytes
      - `created_at` (timestamptz) - Creation timestamp
      - `user_id` (uuid) - Reference to auth.users
      - `storage_path` (text) - Path in storage bucket

  2. Security
    - Enable RLS on `assets` table
    - Add policies for authenticated users to:
      - Read their own assets
      - Insert new assets
      - Delete their own assets
*/

-- Create assets table
CREATE TABLE IF NOT EXISTS assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  url text NOT NULL,
  size bigint NOT NULL,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) NOT NULL
);

-- Enable RLS
ALTER TABLE assets ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own assets"
  ON assets
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert assets"
  ON assets
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own assets"
  ON assets
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);