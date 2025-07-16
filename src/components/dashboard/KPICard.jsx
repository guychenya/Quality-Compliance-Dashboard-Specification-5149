import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'

const KPICard = ({ title, value, change, changeType, icon, color, trend }) => {
  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-success-50 text-success-700 border-success-200',
      red: 'bg-danger-50 text-danger-700 border-danger-200',
      blue: 'bg-primary-50 text-primary-700 border-primary-200',
      orange: 'bg-warning-50 text-warning-700 border-warning-200',
    }
    return colors[color] || colors.blue
  }

  const getChangeColor = (changeType) => {
    return changeType === 'increase' ? 'text-success-600' : 'text-danger-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${getColorClasses(color)}`}>
          <SafeIcon icon={icon} className="h-6 w-6" />
        </div>
        {trend && (
          <div className="flex items-center space-x-1">
            <div className="w-12 h-8 bg-gray-50 rounded flex items-center justify-center">
              <div className="text-xs text-gray-500">📈</div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-2">
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <div className="text-3xl font-bold text-gray-900">{value}</div>
      </div>
      
      {change && (
        <div className="flex items-center">
          <span className={`text-sm font-medium ${getChangeColor(changeType)}`}>
            {changeType === 'increase' ? '↗' : '↘'} {change}
          </span>
          <span className="text-gray-500 text-sm ml-2">from last month</span>
        </div>
      )}
    </motion.div>
  )
}

export default KPICard