import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiTrendingUp, FiTrendingDown } = FiIcons

const DepartmentalCompliance = () => {
  const departments = [
    {
      name: 'Quality Assurance',
      compliance: 96.2,
      change: '+2.1%',
      trend: 'up',
      lastMonth: 94.1
    },
    {
      name: 'Manufacturing',
      compliance: 89.5,
      change: '+1.5%',
      trend: 'up',
      lastMonth: 88.0
    },
    {
      name: 'Regulatory Affairs',
      compliance: 93.8,
      change: '-0.7%',
      trend: 'down',
      lastMonth: 94.5
    },
    {
      name: 'Research & Development',
      compliance: 87.3,
      change: '+3.2%',
      trend: 'up',
      lastMonth: 84.1
    },
    {
      name: 'Operations',
      compliance: 91.6,
      change: '+0.8%',
      trend: 'up',
      lastMonth: 90.8
    }
  ]

  const getComplianceColor = (compliance) => {
    if (compliance >= 95) return 'text-success-600'
    if (compliance >= 90) return 'text-primary-600'
    if (compliance >= 80) return 'text-warning-600'
    return 'text-danger-600'
  }

  const getBarColor = (compliance) => {
    if (compliance >= 95) return 'bg-success-500'
    if (compliance >= 90) return 'bg-primary-500'
    if (compliance >= 80) return 'bg-warning-500'
    return 'bg-danger-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Departmental Compliance</h2>
      
      <div className="space-y-5">
        {departments.map((dept, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-gray-900">{dept.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`text-sm ${dept.trend === 'up' ? 'text-success-600' : 'text-danger-600'}`}>
                  <SafeIcon icon={dept.trend === 'up' ? FiTrendingUp : FiTrendingDown} className="h-4 w-4 inline mr-1" />
                  {dept.change}
                </span>
                <span className={`font-bold text-lg ${getComplianceColor(dept.compliance)}`}>
                  {dept.compliance}%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${dept.compliance}%` }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`h-2 rounded-full ${getBarColor(dept.compliance)}`}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Average Compliance</span>
          <span className="text-lg font-bold text-primary-600">91.7%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
          <div className="bg-primary-500 h-1 rounded-full" style={{ width: '91.7%' }} />
        </div>
      </div>
    </motion.div>
  )
}

export default DepartmentalCompliance