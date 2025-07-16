import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiAlertCircle, FiCheckCircle, FiInfo, FiX } = FiIcons

const Notification = ({ type = 'info', title, message, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case 'success': return FiCheckCircle
      case 'error': return FiAlertCircle
      case 'warning': return FiAlertCircle
      default: return FiInfo
    }
  }
  
  const getIconColor = () => {
    switch (type) {
      case 'success': return 'text-green-500'
      case 'error': return 'text-red-500'
      case 'warning': return 'text-yellow-500'
      default: return 'text-blue-500'
    }
  }
  
  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-100'
      case 'error': return 'bg-red-50 border-red-100'
      case 'warning': return 'bg-yellow-50 border-yellow-100'
      default: return 'bg-blue-50 border-blue-100'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-start p-4 rounded-lg border ${getBgColor()}`}
    >
      <div className={`flex-shrink-0 ${getIconColor()}`}>
        <SafeIcon icon={getIcon()} className="h-5 w-5" />
      </div>
      
      <div className="ml-3 flex-1">
        {title && (
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        )}
        {message && (
          <div className="text-sm text-gray-600 mt-1">{message}</div>
        )}
      </div>
      
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <SafeIcon icon={FiX} className="h-5 w-5" />
        </button>
      )}
    </motion.div>
  )
}

export default Notification