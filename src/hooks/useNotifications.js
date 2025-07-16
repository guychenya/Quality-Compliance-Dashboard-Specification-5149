import { useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'

// This hook manages application notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)
  
  // Update unread count when notifications change
  useEffect(() => {
    const count = notifications.filter(notification => !notification.read).length
    setUnreadCount(count)
  }, [notifications])
  
  // Add a new notification
  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date(),
      read: false,
      ...notification
    }
    
    setNotifications(prev => [newNotification, ...prev])
    
    // Optionally show toast for important notifications
    if (notification.showToast) {
      switch (notification.type) {
        case 'success':
          toast.success(notification.message || notification.title)
          break
        case 'error':
          toast.error(notification.message || notification.title)
          break
        case 'warning':
          toast.custom((t) => (
            <div className={`bg-yellow-50 text-yellow-800 p-3 rounded-md shadow-md ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
              <div className="font-bold">{notification.title}</div>
              <div>{notification.message}</div>
            </div>
          ))
          break
        default:
          toast(notification.message || notification.title)
      }
    }
    
    return newNotification.id
  }, [])
  
  // Mark a notification as read
  const markAsRead = useCallback((id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    )
  }, [])
  
  // Mark all notifications as read
  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    )
  }, [])
  
  // Remove a notification
  const removeNotification = useCallback((id) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    )
  }, [])
  
  // Clear all notifications
  const clearNotifications = useCallback(() => {
    setNotifications([])
  }, [])
  
  return {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearNotifications
  }
}

export default useNotifications