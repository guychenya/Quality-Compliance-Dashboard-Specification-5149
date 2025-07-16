import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiUpload, FiX, FiFile, FiCheckCircle } = FiIcons

const DocumentUpload = ({ onClose }) => {
  const [fileUploaded, setFileUploaded] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState('')
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFileName(file.name)
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB')
      setFileUploaded(true)
    }
  }
  
  const onSubmit = (data) => {
    console.log('Form submitted:', { ...data, fileName })
    // In a real app, we would upload the file to the server here
    setTimeout(() => {
      onClose()
    }, 500)
  }
  
  const categories = [
    { value: 'quality_manual', label: 'Quality Manual' },
    { value: 'sops', label: 'Standard Operating Procedures' },
    { value: 'audit_reports', label: 'Audit Reports' },
    { value: 'training', label: 'Training Materials' },
    { value: 'regulatory', label: 'Regulatory Documents' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-lg"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Upload Document</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <SafeIcon icon={FiX} className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* File Upload Area */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Document File
              </label>
              
              {!fileUploaded ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <SafeIcon icon={FiUpload} className="h-10 w-10 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600">
                      <span className="text-primary-600 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, Word, Excel or image files up to 10MB
                    </p>
                  </label>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg">
                      <SafeIcon icon={FiFile} className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">{fileName}</p>
                      <p className="text-xs text-gray-500">{fileSize}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Document Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Name
                </label>
                <input
                  type="text"
                  {...register('documentName', { required: 'Document name is required' })}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.documentName && (
                  <p className="mt-1 text-sm text-red-600">{errors.documentName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  {...register('category', { required: 'Category is required' })}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Version
                </label>
                <input
                  type="text"
                  {...register('version', { required: 'Version is required' })}
                  placeholder="e.g. 1.0"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.version && (
                  <p className="mt-1 text-sm text-red-600">{errors.version.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...register('description')}
                  rows={3}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!fileUploaded}
                className={`px-4 py-2 rounded-lg text-white ${fileUploaded ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Upload Document
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DocumentUpload