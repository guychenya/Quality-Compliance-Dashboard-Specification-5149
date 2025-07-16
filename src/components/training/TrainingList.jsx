import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const {
  FiCheckCircle,
  FiClock,
  FiAlertTriangle,
  FiCalendar,
  FiPlay,
  FiFileText,
  FiUser,
  FiEye
} = FiIcons

const TrainingList = ({ searchQuery, filterCategory, filterStatus }) => {
  const trainings = [
    {
      id: 1,
      title: 'ISO 9001:2015 Quality Management System',
      description: 'Learn the fundamentals of ISO 9001:2015 quality management system requirements and implementation.',
      category: 'quality',
      status: 'completed',
      completionDate: '2024-05-10',
      dueDate: '2024-05-15',
      assignedTo: 'Demo User',
      duration: '2 hours',
      format: 'video'
    },
    {
      id: 2,
      title: 'GMP Compliance Training',
      description: 'Comprehensive training on Good Manufacturing Practices (GMP) compliance requirements.',
      category: 'compliance',
      status: 'in_progress',
      completionDate: null,
      dueDate: '2024-06-15',
      assignedTo: 'Demo User',
      duration: '3 hours',
      format: 'video'
    },
    {
      id: 3,
      title: 'Laboratory Safety Procedures',
      description: 'Training on essential safety procedures and protocols for laboratory environments.',
      category: 'safety',
      status: 'not_started',
      completionDate: null,
      dueDate: '2024-06-20',
      assignedTo: 'Demo User',
      duration: '1.5 hours',
      format: 'document'
    },
    {
      id: 4,
      title: 'Internal Auditor Training',
      description: 'Learn how to conduct effective internal quality audits and report findings.',
      category: 'quality',
      status: 'overdue',
      completionDate: null,
      dueDate: '2024-05-01',
      assignedTo: 'Demo User',
      duration: '4 hours',
      format: 'video'
    },
    {
      id: 5,
      title: 'Data Integrity in Quality Systems',
      description: 'Understanding the principles and practices of maintaining data integrity in quality systems.',
      category: 'technical',
      status: 'completed',
      completionDate: '2024-04-20',
      dueDate: '2024-04-30',
      assignedTo: 'Demo User',
      duration: '2.5 hours',
      format: 'document'
    }
  ]
  
  // Apply filters
  const filteredTrainings = trainings.filter(training => {
    const matchesSearch = searchQuery === '' || 
      training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      training.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = filterCategory === 'all' || 
      training.category === filterCategory
    
    const matchesStatus = filterStatus === 'all' || 
      training.status === filterStatus
    
    return matchesSearch && matchesCategory && matchesStatus
  })
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return FiCheckCircle
      case 'in_progress': return FiClock
      case 'overdue': return FiAlertTriangle
      case 'not_started': return FiCalendar
      default: return FiCalendar
    }
  }
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50'
      case 'in_progress': return 'text-yellow-600 bg-yellow-50'
      case 'overdue': return 'text-red-600 bg-red-50'
      case 'not_started': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }
  
  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in_progress': return 'In Progress'
      case 'overdue': return 'Overdue'
      case 'not_started': return 'Not Started'
      default: return 'Unknown'
    }
  }
  
  const getFormatIcon = (format) => {
    return format === 'video' ? FiPlay : FiFileText
  }
  
  const getCategoryName = (category) => {
    const categories = {
      compliance: 'Compliance',
      quality: 'Quality',
      safety: 'Safety',
      technical: 'Technical'
    }
    return categories[category] || category
  }
  
  const getCategoryColor = (category) => {
    const colors = {
      compliance: 'bg-purple-100 text-purple-800 border-purple-200',
      quality: 'bg-blue-100 text-blue-800 border-blue-200',
      safety: 'bg-red-100 text-red-800 border-red-200',
      technical: 'bg-gray-100 text-gray-800 border-gray-200'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {filteredTrainings.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">No training courses match your search criteria.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTrainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3">
                        <SafeIcon 
                          icon={getFormatIcon(training.format)} 
                          className="h-5 w-5 text-gray-600" 
                        />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{training.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{training.description}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(training.category)}`}>
                        {getCategoryName(training.category)}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(training.status)}`}>
                        <SafeIcon icon={getStatusIcon(training.status)} className="h-3 w-3 mr-1" />
                        {getStatusText(training.status)}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <SafeIcon icon={FiUser} className="h-3 w-3 mr-1" />
                        {training.assignedTo}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex flex-col items-end">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm text-gray-500">
                        <SafeIcon icon={FiClock} className="h-4 w-4 inline mr-1" />
                        {training.duration}
                      </span>
                      <button className="p-2 text-primary-600 hover:text-primary-800 hover:bg-primary-50 rounded-full transition-colors">
                        <SafeIcon icon={FiEye} className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="h-4 w-4 text-gray-500 mr-1" />
                      <span className={`text-sm ${
                        training.status === 'overdue' ? 'text-red-600 font-medium' : 'text-gray-500'
                      }`}>
                        Due: {training.dueDate}
                      </span>
                    </div>
                    {training.status === 'completed' && (
                      <div className="text-xs text-green-600 mt-1">
                        Completed: {training.completionDate}
                      </div>
                    )}
                  </div>
                </div>
                
                {training.status === 'in_progress' && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-primary-600 font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                )}
              </div>
              
              {training.status !== 'completed' && (
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end rounded-b-xl">
                  <button className={`px-4 py-1.5 rounded-lg text-white text-sm ${
                    training.status === 'in_progress' 
                      ? 'bg-primary-600 hover:bg-primary-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}>
                    {training.status === 'in_progress' ? 'Continue' : 'Start Training'}
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {filteredTrainings.length} of {trainings.length} training courses
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Previous
          </button>
          <button className="px-3 py-1 bg-primary-50 text-primary-600 border border-primary-200 rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default TrainingList