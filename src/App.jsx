import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Pages
import AuthPage from './components/auth/AuthPage'
import Dashboard from './components/dashboard/Dashboard'
import AnalyticsPage from './components/analytics/AnalyticsPage'
import AuditsPage from './components/audits/AuditsPage'
import DocumentsPage from './components/documents/DocumentsPage'
import TrainingPage from './components/training/TrainingPage'
import SettingsPage from './components/settings/SettingsPage'

// Context and styles
import './App.css'

// Mock user for demo purposes
const DEMO_USER = {
  id: '123456',
  email: 'demo@example.com',
  user_metadata: {
    full_name: 'Demo User',
    department: 'Quality Assurance'
  }
}

// Modified context for demo
const DemoAuthContext = React.createContext({
  user: DEMO_USER,
  loading: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {}
});

export const useDemoAuth = () => React.useContext(DemoAuthContext);

const AppContent = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/audits" element={<AuditsPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <DemoAuthContext.Provider value={{
      user: DEMO_USER,
      loading: false,
      signIn: () => console.log('Demo: Sign in'),
      signUp: () => console.log('Demo: Sign up'),
      signOut: () => console.log('Demo: Sign out')
    }}>
      <Router>
        <div className="App">
          <AppContent />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: '#22c55e',
                  secondary: '#16a34a',
                },
              },
            }}
          />
        </div>
      </Router>
    </DemoAuthContext.Provider>
  )
}

export default App