import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiClock, FiCheckCircle, FiCalendar, FiAlertTriangle } = FiIcons

const AuditStats = () => {
  const stats = [
    {
      title: 'Scheduled',
      count: 8,
      icon: FiCalendar,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'In Progress',
      count: 3,
      icon: FiClock,
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Completed',
      count: 24,
      icon: FiCheckCircle,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Findings',
      count: 37,
      icon: FiAlertTriangle,
      color: 'bg-red-50 text-red-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.count}</h3>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>
              <SafeIcon icon={stat.icon} className="h-6 w-6" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default AuditStats