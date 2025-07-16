import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import DocumentsList from './DocumentsList'
import DocumentUpload from './DocumentUpload'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiUpload, FiFilter, FiSearch } = FiIcons

const DocumentsPage = () => {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'quality_manual', label: 'Quality Manual' },
    { value: 'sops', label: 'Standard Operating Procedures' },
    { value: 'audit_reports', label: 'Audit Reports' },
    { value: 'training', label: 'Training Materials' },
    { value: 'regulatory', label: 'Regulatory Documents' }
  ]
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Page Header with Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Document Management</h1>
                <p className="text-gray-600">Organize, store and manage compliance documentation</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SafeIcon icon={FiSearch} className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documents..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-60"
                  />
                </div>
                
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                
                <button className="py-2 px-4 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center space-x-2">
                  <SafeIcon icon={FiFilter} className="h-4 w-4" />
                  <span>More Filters</span>
                </button>
                
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiUpload} className="h-4 w-4" />
                  <span>Upload</span>
                </button>
              </div>
            </div>
            
            {/* Documents List */}
            <DocumentsList 
              searchQuery={searchQuery} 
              filterCategory={filterCategory} 
            />
            
            {/* Upload Modal */}
            {showUploadModal && (
              <DocumentUpload onClose={() => setShowUploadModal(false)} />
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default DocumentsPage