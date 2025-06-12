/*
  # Create EduWeb 2025 RSVP table

  1. New Tables
    - `eduweb_rsvps`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `organization` (text, required)
      - `role` (text, required)
      - `dietary_restrictions` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `eduweb_rsvps` table
    - Add policy for public insert (since this is a public RSVP form)
    - Add policy for authenticated users to read data (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS eduweb_rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text NOT NULL,
  role text NOT NULL,
  dietary_restrictions text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE eduweb_rsvps ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for RSVP submissions
CREATE POLICY "Allow public RSVP submissions"
  ON eduweb_rsvps
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read RSVPs (for admin purposes)
CREATE POLICY "Allow authenticated users to read RSVPs"
  ON eduweb_rsvps
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_eduweb_rsvps_email ON eduweb_rsvps(email);
CREATE INDEX IF NOT EXISTS idx_eduweb_rsvps_created_at ON eduweb_rsvps(created_at);