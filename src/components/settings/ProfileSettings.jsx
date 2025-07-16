import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiUser, FiCamera, FiSave } = FiIcons

// Demo user data
const demoUser = {
  user_metadata: {
    full_name: 'Demo User',
    department: 'Quality Assurance',
    job_title: 'Quality Manager',
    phone: '+1 (555) 123-4567',
    bio: 'Quality management professional with 10+ years of experience in pharmaceutical manufacturing.'
  },
  email: 'demo@example.com'
}

const ProfileSettings = () => {
  const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
    defaultValues: {
      fullName: demoUser.user_metadata.full_name,
      email: demoUser.email,
      department: demoUser.user_metadata.department,
      jobTitle: demoUser.user_metadata.job_title,
      phone: demoUser.user_metadata.phone,
      bio: demoUser.user_metadata.bio
    }
  })
  
  const onSubmit = (data) => {
    console.log('Profile update:', data)
    // In a real app, we would update the user profile here
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Photo */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center">
              <SafeIcon icon={FiUser} className="h-12 w-12 text-primary-600" />
            </div>
            <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-gray-300 shadow-sm">
              <SafeIcon icon={FiCamera} className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">Profile Photo</h3>
            <p className="text-sm text-gray-500 mt-1">
              Upload a photo to personalize your account.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                disabled
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Contact administrator to change your email address.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                {...register('department', { required: 'Department is required' })}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="quality_assurance">Quality Assurance</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="regulatory_affairs">Regulatory Affairs</option>
                <option value="research_development">Research & Development</option>
                <option value="operations">Operations</option>
                <option value="management">Management</option>
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                {...register('jobTitle')}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                {...register('phone')}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              {...register('bio')}
              rows={4}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={!isDirty}
            className={`inline-flex items-center px-4 py-2 rounded-lg text-white ${
              isDirty ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            <SafeIcon icon={FiSave} className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default ProfileSettings