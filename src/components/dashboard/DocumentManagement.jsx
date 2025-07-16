import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiFile, FiDownload, FiEye, FiCalendar, FiUser, FiPlus } = FiIcons

const DocumentManagement = () => {
  const [documents] = useState([
    {
      id: 1,
      name: 'Quality Manual v2.3',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      uploadedBy: 'John Smith',
      category: 'Quality Management',
      status: 'current'
    },
    {
      id: 2,
      name: 'ISO 9001 Audit Report',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '2024-01-14',
      uploadedBy: 'Sarah Johnson',
      category: 'Audit Reports',
      status: 'current'
    },
    {
      id: 3,
      name: 'Training Records Q1',
      type: 'Excel',
      size: '856 KB',
      uploadDate: '2024-01-12',
      uploadedBy: 'Mike Wilson',
      category: 'Training',
      status: 'current'
    },
    {
      id: 4,
      name: 'SOP-001 Manufacturing',
      type: 'PDF',
      size: '1.2 MB',
      uploadDate: '2024-01-10',
      uploadedBy: 'Lisa Chen',
      category: 'Standard Operating Procedures',
      status: 'under_review'
    }
  ])

  const getFileIcon = (type) => {
    return FiFile // Simplified - could expand based on file type
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'text-success-600 bg-success-50'
      case 'under_review':
        return 'text-warning-600 bg-warning-50'
      case 'expired':
        return 'text-danger-600 bg-danger-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'current':
        return 'Current'
      case 'under_review':
        return 'Under Review'
      case 'expired':
        return 'Expired'
      default:
        return 'Unknown'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Document Management</h2>
        <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
          <SafeIcon icon={FiPlus} className="h-4 w-4 mr-2" />
          Upload Document
        </button>
      </div>
      
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <SafeIcon icon={getFileIcon(doc.type)} className="h-5 w-5 text-gray-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-gray-900">{doc.name}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                      {getStatusText(doc.status)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{doc.type} • {doc.size}</span>
                    <span className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                      {doc.uploadDate}
                    </span>
                    <span className="flex items-center">
                      <SafeIcon icon={FiUser} className="h-4 w-4 mr-1" />
                      {doc.uploadedBy}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-1">
                    {doc.category}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <SafeIcon icon={FiEye} className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <SafeIcon icon={FiDownload} className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          View All Documents
        </button>
      </div>
    </motion.div>
  )
}

export default DocumentManagement