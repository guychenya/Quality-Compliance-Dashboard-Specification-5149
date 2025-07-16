import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiBell, FiSettings, FiLogOut, FiUser } = FiIcons

// Demo user data
const demoUser = {
  user_metadata: {
    full_name: 'Demo User'
  },
  email: 'demo@example.com'
}

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm border-b border-gray-200 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quality Compliance Dashboard</h1>
          <p className="text-gray-600">Welcome back, {demoUser.user_metadata.full_name}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 relative">
            <SafeIcon icon={FiBell} className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <SafeIcon icon={FiSettings} className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-primary-100 p-2 rounded-full">
              <SafeIcon icon={FiUser} className="h-5 w-5 text-primary-600" />
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-900">
                {demoUser.user_metadata.full_name}
              </div>
              <div className="text-gray-600">{demoUser.email}</div>
            </div>
          </div>
          
          <button
            onClick={() => console.log('Demo: Sign out clicked')}
            className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
            title="Sign Out"
          >
            <SafeIcon icon={FiLogOut} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header