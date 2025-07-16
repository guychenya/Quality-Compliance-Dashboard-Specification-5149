import React from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import ProfileSettings from './ProfileSettings'
import NotificationSettings from './NotificationSettings'
import SecuritySettings from './SecuritySettings'
import OrganizationSettings from './OrganizationSettings'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiUser, FiBell, FiLock, FiBriefcase } = FiIcons

const SettingsPage = () => {
  const [activeTab, setActiveTab] = React.useState('profile')
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'security', label: 'Security', icon: FiLock },
    { id: 'organization', label: 'Organization', icon: FiBriefcase }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600">Manage your account and application preferences</p>
            </div>
            
            {/* Settings Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="sm:flex sm:divide-x">
                {/* Tabs Navigation */}
                <div className="sm:w-64 border-b sm:border-b-0 border-gray-200">
                  <nav className="flex sm:flex-col">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-3 px-6 py-4 w-full ${
                          activeTab === tab.id
                            ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <SafeIcon icon={tab.icon} className="h-5 w-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
                
                {/* Settings Content */}
                <div className="flex-1 p-6">
                  {activeTab === 'profile' && <ProfileSettings />}
                  {activeTab === 'notifications' && <NotificationSettings />}
                  {activeTab === 'security' && <SecuritySettings />}
                  {activeTab === 'organization' && <OrganizationSettings />}
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default SettingsPage