import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiCalendar, FiCheckCircle, FiAlertCircle, FiClock } = FiIcons

const RecentAudits = () => {
  const audits = [
    {
      id: 1,
      title: 'ISO 9001:2015 Internal Audit',
      date: '2024-01-15',
      status: 'completed',
      findings: 2,
      department: 'Manufacturing',
      auditor: 'John Smith'
    },
    {
      id: 2,
      title: 'FDA Compliance Review',
      date: '2024-01-10',
      status: 'in_progress',
      findings: 0,
      department: 'Quality Assurance',
      auditor: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Environmental Compliance Audit',
      date: '2024-01-08',
      status: 'completed',
      findings: 1,
      department: 'Operations',
      auditor: 'Mike Wilson'
    },
    {
      id: 4,
      title: 'Supplier Quality Audit',
      date: '2024-01-05',
      status: 'scheduled',
      findings: 0,
      department: 'Procurement',
      auditor: 'Lisa Chen'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return FiCheckCircle
      case 'in_progress':
        return FiClock
      case 'scheduled':
        return FiCalendar
      default:
        return FiAlertCircle
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success-600 bg-success-50'
      case 'in_progress':
        return 'text-warning-600 bg-warning-50'
      case 'scheduled':
        return 'text-primary-600 bg-primary-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in_progress':
        return 'In Progress'
      case 'scheduled':
        return 'Scheduled'
      default:
        return 'Unknown'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Audits</h2>
      
      <div className="space-y-4">
        {audits.map((audit, index) => (
          <motion.div
            key={audit.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-gray-900">{audit.title}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(audit.status)}`}>
                    <SafeIcon icon={getStatusIcon(audit.status)} className="h-3 w-3 mr-1" />
                    {getStatusText(audit.status)}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                    {audit.date}
                  </span>
                  <span>{audit.department}</span>
                  <span>Auditor: {audit.auditor}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {audit.findings} Findings
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          View All Audits
        </button>
      </div>
    </motion.div>
  )
}

export default RecentAudits