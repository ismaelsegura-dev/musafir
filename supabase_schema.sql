-- 1. Create the properties table
CREATE TABLE properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  price NUMERIC NOT NULL,
  image TEXT NOT NULL,
  rating NUMERIC NOT NULL,
  reviews INTEGER NOT NULL,
  badges TEXT[] NOT NULL DEFAULT '{}',
  amenities TEXT[] NOT NULL DEFAULT '{}',
  description TEXT NOT NULL,
  host JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- 3. Create Policy: Allow Public Read Access
-- Anyone can read the properties
CREATE POLICY "Allow public read access" ON properties
  FOR SELECT USING (true);

-- 4. Create Policy: Allow Admins to Insert/Update
-- Only authenticated users can insert or update.
-- *NOTE*: For a strict admin setup, you can check user roles if you have them configured,
-- e.g., checking custom claims: (auth.jwt() ->> 'role') = 'admin'
-- Here we're using auth.uid() IS NOT NULL which ensures the user is simply logged in via Supabase Auth.
CREATE POLICY "Allow insert by admins" ON properties
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Allow update by admins" ON properties
  FOR UPDATE USING (auth.uid() IS NOT NULL);
