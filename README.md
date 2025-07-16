# Quality Compliance Dashboard

A comprehensive web-based application for monitoring and managing quality compliance metrics in manufacturing and regulated industries.

## Features

### 🔐 Authentication
- User registration and login
- Secure authentication with Supabase
- Role-based access control
- Password recovery

### 📊 Dashboard
- Real-time KPI monitoring
- Interactive charts and visualizations
- Compliance rate tracking
- Audit findings overview

### 📋 Compliance Management
- Multiple compliance areas (ISO 9001, FDA, Environmental, Safety)
- Compliance rate tracking
- Audit scheduling and management
- CAPA (Corrective and Preventive Actions) tracking

### 📁 Document Management
- Secure document upload and storage
- Version control
- Document categorization
- Access permissions

### 📈 Analytics
- Trend analysis
- Performance metrics
- Compliance reporting
- Data visualization

### 👥 Training Management
- Training completion tracking
- Certification management
- Competency assessments

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Routing**: React Router DOM

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quality-compliance-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your Supabase credentials in `.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
npm run dev
```

## Supabase Setup

### Required Tables

Create the following tables in your Supabase database:

```sql
-- Users table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  department TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Audits table
CREATE TABLE audits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  audit_date DATE,
  status TEXT DEFAULT 'scheduled',
  department TEXT,
  auditor_id UUID REFERENCES profiles(id),
  findings_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Compliance areas table
CREATE TABLE compliance_areas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  compliance_rate DECIMAL(5,2),
  last_audit_date DATE,
  next_audit_date DATE,
  findings_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'current',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Documents table
CREATE TABLE documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  file_path TEXT,
  file_size INTEGER,
  file_type TEXT,
  category TEXT,
  status TEXT DEFAULT 'current',
  uploaded_by UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CAPAs table
CREATE TABLE capas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  priority TEXT DEFAULT 'medium',
  status TEXT DEFAULT 'open',
  assigned_to UUID REFERENCES profiles(id),
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Row Level Security (RLS)

Enable RLS and create policies:

```sql
-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE audits ENABLE ROW LEVEL SECURITY;
ALTER TABLE compliance_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE capas ENABLE ROW LEVEL SECURITY;

-- Create policies (example for profiles)
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthPage.jsx
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── dashboard/
│   │   ├── Dashboard.jsx
│   │   ├── KPICard.jsx
│   │   ├── RecentAudits.jsx
│   │   ├── ComplianceAreas.jsx
│   │   ├── DocumentManagement.jsx
│   │   └── ComplianceChart.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Sidebar.jsx
├── contexts/
│   └── AuthContext.jsx
├── hooks/
│   └── useSupabase.js
├── config/
│   └── supabase.js
├── common/
│   └── SafeIcon.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Features in Detail

### Dashboard KPIs
- **Overall Compliance Rate**: Real-time compliance percentage
- **Open CAPAs**: Count of open corrective actions
- **Training Completion**: Employee training completion rate
- **Audit Findings**: Number of audit findings

### Compliance Areas
- ISO 9001:2015 compliance
- FDA regulations
- Environmental standards
- Safety standards

### Document Management
- Upload and categorize documents
- Version control
- Access permissions
- Document status tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact [your-email@example.com] or create an issue in the repository.