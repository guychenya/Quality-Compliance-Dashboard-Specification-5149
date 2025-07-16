import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'
import toast from 'react-hot-toast'

const { FiBell, FiSettings, FiLogOut, FiUser, FiX, FiCheck } = FiIcons

// Demo user data
const demoUser = {
  user_metadata: {
    full_name: 'Demo User'
  },
  email: 'demo@example.com'
}

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Audit Scheduled',
      message: 'ISO 9001 Internal Audit scheduled for June 15',
      time: '2 hours ago',
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: 'Document Expiring',
      message: 'Quality Manual v2.1 will expire in 7 days',
      time: '1 day ago',
      read: false,
      type: 'warning'
    },
    {
      id: 3,
      title: 'Training Reminder',
      message: 'GMP Compliance Training due in 3 days',
      time: '2 days ago',
      read: true,
      type: 'info'
    }
  ])
  
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }))
    setNotifications(updatedNotifications)
    toast.success('All notifications marked as read')
  }
  
  const markAsRead = (id) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    )
    setNotifications(updatedNotifications)
  }

  const unreadCount = notifications.filter(n => !n.read).length

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'warning': return <div className="bg-yellow-100 p-2 rounded-full"><SafeIcon icon={FiBell} className="h-4 w-4 text-yellow-600" /></div>
      case 'error': return <div className="bg-red-100 p-2 rounded-full"><SafeIcon icon={FiBell} className="h-4 w-4 text-red-600" /></div>
      case 'success': return <div className="bg-green-100 p-2 rounded-full"><SafeIcon icon={FiCheck} className="h-4 w-4 text-green-600" /></div>
      default: return <div className="bg-blue-100 p-2 rounded-full"><SafeIcon icon={FiBell} className="h-4 w-4 text-blue-600" /></div>
    }
  }
  
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
          <div className="relative">
            <button 
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <SafeIcon icon={FiBell} className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">Notifications</h3>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={markAllAsRead}
                      className="text-xs text-primary-600 hover:text-primary-800"
                    >
                      Mark all as read
                    </button>
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <SafeIcon icon={FiX} className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="py-4 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    notifications.map(notification => (
                      <div 
                        key={notification.id}
                        className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </p>
                              <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="p-2 border-t border-gray-200 text-center">
                  <button className="text-xs text-primary-600 hover:text-primary-800">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
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
            onClick={() => toast.success('Successfully logged out')}
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