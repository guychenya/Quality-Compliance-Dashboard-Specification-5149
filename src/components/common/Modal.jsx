import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiX } = FiIcons

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  size = 'md',
  closeOnOutsideClick = true
}) => {
  const handleOutsideClick = (e) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose()
    }
  }
  
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`bg-white rounded-xl shadow-xl w-full ${sizeClasses[size]} overflow-hidden`}
          >
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                >
                  <SafeIcon icon={FiX} className="h-6 w-6" />
                </button>
              </div>
            )}
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {children}
            </div>
            
            {footer && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal