import React, { createContext, useContext } from 'react'
import useNotifications from '../hooks/useNotifications'

// Create context
const NotificationsContext = createContext({
  notifications: [],
  unreadCount: 0,
  addNotification: () => {},
  markAsRead: () => {},
  markAllAsRead: () => {},
  removeNotification: () => {},
  clearNotifications: () => {}
})

// Provider component
export const NotificationsProvider = ({ children }) => {
  const notificationsData = useNotifications()
  
  return (
    <NotificationsContext.Provider value={notificationsData}>
      {children}
    </NotificationsContext.Provider>
  )
}

// Hook for using notifications in components
export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext)
  
  if (context === undefined) {
    throw new Error('useNotificationsContext must be used within a NotificationsProvider')
  }
  
  return context
}

// Demo notifications for testing
export const addDemoNotifications = (addNotification) => {
  addNotification({
    title: 'ISO Audit Scheduled',
    message: 'ISO 9001:2015 audit scheduled for June 15, 2024',
    type: 'info',
    showToast: true
  })
  
  setTimeout(() => {
    addNotification({
      title: 'Document Expiring Soon',
      message: 'Quality Manual v2.3 will expire in 7 days',
      type: 'warning',
      showToast: true
    })
  }, 3000)
  
  setTimeout(() => {
    addNotification({
      title: 'Training Completion',
      message: 'GMP Compliance Training completed successfully',
      type: 'success',
      showToast: true
    })
  }, 6000)
}