import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiAward, FiClock, FiAlertTriangle, FiCalendar } = FiIcons

const TrainingStats = () => {
  const stats = [
    {
      title: 'Training Completion',
      count: '87%',
      subtext: '5% increase',
      icon: FiAward,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'In Progress',
      count: '14',
      subtext: '3 courses',
      icon: FiClock,
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Overdue',
      count: '5',
      subtext: '2 critical',
      icon: FiAlertTriangle,
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Upcoming',
      count: '8',
      subtext: 'Next 30 days',
      icon: FiCalendar,
      color: 'bg-green-50 text-green-600'
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
              <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
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

export default TrainingStats