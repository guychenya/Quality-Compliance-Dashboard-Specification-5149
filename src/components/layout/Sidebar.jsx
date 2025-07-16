import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiHome, FiBarChart3, FiFileText, FiUsers, FiSettings, FiShield } = FiIcons

const Sidebar = () => {
  const location = useLocation()
  
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: FiBarChart3, label: 'Analytics', path: '/analytics', active: false },
    { icon: FiShield, label: 'Audits', path: '/audits', active: false },
    { icon: FiFileText, label: 'Documents', path: '/documents', active: false },
    { icon: FiUsers, label: 'Training', path: '/training', active: false },
    { icon: FiSettings, label: 'Settings', path: '/settings', active: false },
  ]

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm border-r border-gray-200 w-64 min-h-screen"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-primary-600 p-2 rounded-lg">
            <SafeIcon icon={FiShield} className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">QCD</h2>
            <p className="text-xs text-gray-600">Quality Control</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                item.active
                  ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <SafeIcon icon={item.icon} className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.aside>
  )
}

export default Sidebar