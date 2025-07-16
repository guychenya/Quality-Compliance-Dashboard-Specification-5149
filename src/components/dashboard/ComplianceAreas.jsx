import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiShield, FiTrendingUp, FiAlertTriangle, FiCheckCircle } = FiIcons

const ComplianceAreas = () => {
  const areas = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      compliance: 95,
      status: 'excellent',
      lastAudit: '2024-01-15',
      nextAudit: '2024-07-15',
      findings: 2
    },
    {
      id: 2,
      name: 'FDA Regulations',
      compliance: 88,
      status: 'good',
      lastAudit: '2024-01-10',
      nextAudit: '2024-04-10',
      findings: 3
    },
    {
      id: 3,
      name: 'Environmental',
      compliance: 92,
      status: 'excellent',
      lastAudit: '2024-01-08',
      nextAudit: '2024-06-08',
      findings: 1
    },
    {
      id: 4,
      name: 'Safety Standards',
      compliance: 78,
      status: 'needs_attention',
      lastAudit: '2024-01-05',
      nextAudit: '2024-03-05',
      findings: 5
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'text-success-600 bg-success-100'
      case 'good':
        return 'text-primary-600 bg-primary-100'
      case 'needs_attention':
        return 'text-warning-600 bg-warning-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return FiCheckCircle
      case 'good':
        return FiTrendingUp
      case 'needs_attention':
        return FiAlertTriangle
      default:
        return FiShield
    }
  }

  const getComplianceColor = (compliance) => {
    if (compliance >= 90) return 'text-success-600'
    if (compliance >= 80) return 'text-primary-600'
    if (compliance >= 70) return 'text-warning-600'
    return 'text-danger-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Compliance Areas</h2>
      
      <div className="space-y-4">
        {areas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getStatusColor(area.status)}`}>
                  <SafeIcon icon={getStatusIcon(area.status)} className="h-4 w-4" />
                </div>
                <h3 className="font-medium text-gray-900">{area.name}</h3>
              </div>
              <div className={`text-2xl font-bold ${getComplianceColor(area.compliance)}`}>
                {area.compliance}%
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Compliance Rate</span>
                <span>{area.compliance}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    area.compliance >= 90 ? 'bg-success-500' :
                    area.compliance >= 80 ? 'bg-primary-500' :
                    area.compliance >= 70 ? 'bg-warning-500' : 'bg-danger-500'
                  }`}
                  style={{ width: `${area.compliance}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Last Audit: {area.lastAudit}</span>
              <span>Next: {area.nextAudit}</span>
              <span className="text-danger-600">{area.findings} Findings</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          View All Areas
        </button>
      </div>
    </motion.div>
  )
}

export default ComplianceAreas