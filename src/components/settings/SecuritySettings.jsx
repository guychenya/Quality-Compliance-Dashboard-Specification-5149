import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiLock, FiAlertTriangle, FiEye, FiEyeOff } = FiIcons

const SecuritySettings = () => {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const newPassword = watch('newPassword')
  
  const onSubmit = (data) => {
    console.log('Password change submitted:', data)
    // In a real app, we would update the password here
  }
  
  const sessions = [
    {
      device: 'Chrome on Windows',
      location: 'New York, USA',
      ip: '192.168.1.1',
      lastActive: '2 minutes ago',
      current: true
    },
    {
      device: 'Safari on iPhone',
      location: 'Boston, USA',
      ip: '203.0.113.1',
      lastActive: '2 days ago',
      current: false
    }
  ]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
      
      {/* Password Change */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                {...register('currentPassword', { required: 'Current password is required' })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <SafeIcon 
                  icon={showCurrentPassword ? FiEyeOff : FiEye} 
                  className="h-5 w-5 text-gray-400 hover:text-gray-600" 
                />
              </button>
            </div>
            {errors.currentPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.currentPassword.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                {...register('newPassword', { 
                  required: 'New password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <SafeIcon 
                  icon={showNewPassword ? FiEyeOff : FiEye} 
                  className="h-5 w-5 text-gray-400 hover:text-gray-600" 
                />
              </button>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.newPassword.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === newPassword || 'Passwords do not match'
                })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <SafeIcon 
                  icon={showConfirmPassword ? FiEyeOff : FiEye} 
                  className="h-5 w-5 text-gray-400 hover:text-gray-600" 
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
      
      {/* Active Sessions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Active Sessions</h3>
        
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-full">
                  <SafeIcon icon={FiLock} className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {session.device}
                    {session.current && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Current
                      </span>
                    )}
                  </p>
                  <div className="text-sm text-gray-500">
                    <span>{session.location}</span>
                    <span className="mx-1">•</span>
                    <span>{session.ip}</span>
                    <span className="mx-1">•</span>
                    <span>Last active {session.lastActive}</span>
                  </div>
                </div>
              </div>
              
              {!session.current && (
                <button className="text-sm text-red-600 hover:text-red-800">
                  Terminate
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
          <SafeIcon icon={FiAlertTriangle} className="h-4 w-4" />
          <span>If you see any sessions you don't recognize, terminate them and change your password immediately.</span>
        </div>
      </div>
      
      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 mt-1">
              Add an extra layer of security to your account
            </p>
          </div>
          
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Enable
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default SecuritySettings