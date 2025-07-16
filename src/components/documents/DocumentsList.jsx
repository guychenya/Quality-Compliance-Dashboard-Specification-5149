import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { 
  FiFile, 
  FiFileText,
  FiImage, 
  FiDownload, 
  FiEye, 
  FiEdit2, 
  FiTrash2,
  FiCalendar,
  FiUser
} = FiIcons

const DocumentsList = ({ searchQuery, filterCategory }) => {
  const documents = [
    {
      id: 1,
      name: 'Quality Manual v2.3',
      type: 'PDF',
      size: '2.4 MB',
      category: 'quality_manual',
      uploadDate: '2024-05-15',
      uploadedBy: 'John Smith',
      version: '2.3',
      status: 'current'
    },
    {
      id: 2,
      name: 'ISO 9001 Audit Report Q1 2024',
      type: 'PDF',
      size: '1.8 MB',
      category: 'audit_reports',
      uploadDate: '2024-04-10',
      uploadedBy: 'Sarah Johnson',
      version: '1.0',
      status: 'current'
    },
    {
      id: 3,
      name: 'Training Records Q1 2024',
      type: 'Excel',
      size: '856 KB',
      category: 'training',
      uploadDate: '2024-04-05',
      uploadedBy: 'Mike Wilson',
      version: '1.0',
      status: 'current'
    },
    {
      id: 4,
      name: 'SOP-001 Manufacturing Process',
      type: 'PDF',
      size: '1.2 MB',
      category: 'sops',
      uploadDate: '2024-03-22',
      uploadedBy: 'Lisa Chen',
      version: '3.1',
      status: 'under_review'
    },
    {
      id: 5,
      name: 'FDA Compliance Certificate 2024',
      type: 'PDF',
      size: '1.5 MB',
      category: 'regulatory',
      uploadDate: '2024-02-18',
      uploadedBy: 'Robert Taylor',
      version: '1.0',
      status: 'current'
    },
    {
      id: 6,
      name: 'Equipment Calibration Records',
      type: 'Excel',
      size: '1.1 MB',
      category: 'quality_manual',
      uploadDate: '2024-03-15',
      uploadedBy: 'Emma Davis',
      version: '2.0',
      status: 'current'
    }
  ]
  
  // Apply filters
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchQuery === '' || 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = filterCategory === 'all' || 
      doc.category === filterCategory
    
    return matchesSearch && matchesCategory
  })
  
  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf': return FiFileText
      case 'excel': return FiFile
      case 'image': return FiImage
      default: return FiFile
    }
  }
  
  const getStatusBadge = (status) => {
    switch (status) {
      case 'current':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600">Current</span>
      case 'under_review':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-600">Under Review</span>
      case 'archived':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-600">Archived</span>
      default:
        return null
    }
  }
  
  const getCategoryName = (categoryValue) => {
    const categories = {
      quality_manual: 'Quality Manual',
      sops: 'Standard Operating Procedures',
      audit_reports: 'Audit Reports',
      training: 'Training Materials',
      regulatory: 'Regulatory Documents'
    }
    return categories[categoryValue] || categoryValue
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Uploaded
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDocuments.map((doc, index) => (
              <motion.tr 
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                      <SafeIcon icon={getFileIcon(doc.type)} className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {doc.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {doc.type} • Version {doc.version}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {getCategoryName(doc.category)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                      {doc.uploadDate}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <SafeIcon icon={FiUser} className="h-3 w-3 mr-1" />
                      {doc.uploadedBy}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{doc.size}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(doc.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <SafeIcon icon={FiEye} className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600">
                      <SafeIcon icon={FiDownload} className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-600">
                      <SafeIcon icon={FiEdit2} className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <SafeIcon icon={FiTrash2} className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No documents found matching your search criteria.</p>
        </div>
      )}
      
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing {filteredDocuments.length} of {documents.length} documents
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary-50 text-primary-600 border border-primary-200 rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default DocumentsList