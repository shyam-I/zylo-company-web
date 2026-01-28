-- Create leads table for capturing form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  company_name VARCHAR(255),
  service_needed VARCHAR(100),
  project_budget_range VARCHAR(50),
  project_timeline VARCHAR(100),
  project_description TEXT,
  form_type VARCHAR(50), -- 'quote', 'contact', 'service_request'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public form submissions)
CREATE POLICY "Allow public insertions" ON leads
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read all leads
CREATE POLICY "Allow authenticated users to read" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');
