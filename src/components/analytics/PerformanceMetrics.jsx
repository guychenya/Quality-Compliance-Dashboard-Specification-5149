import React from 'react'
import { motion } from 'framer-motion'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiInfo } = FiIcons

const PerformanceMetrics = () => {
  const data = [
    { subject: 'Documentation', current: 85, target: 95 },
    { subject: 'Training', current: 87, target: 90 },
    { subject: 'Process Adherence', current: 92, target: 95 },
    { subject: 'Corrective Actions', current: 78, target: 85 },
    { subject: 'Risk Management', current: 82, target: 90 },
    { subject: 'Customer Satisfaction', current: 88, target: 90 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Performance Metrics</h2>
        
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <SafeIcon icon={FiInfo} className="h-5 w-5" />
        </button>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="70%">
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#4b5563' }} />
            <Radar
              name="Current"
              dataKey="current"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              fillOpacity={0.4}
            />
            <Radar
              name="Target"
              dataKey="target"
              stroke="#16a34a"
              fill="#16a34a"
              fillOpacity={0.1}
              strokeDasharray="5 5"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">Current Performance</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full border border-green-500"></div>
          <span className="text-sm text-gray-600">Target Performance</span>
        </div>
      </div>
    </motion.div>
  )
}

export default PerformanceMetrics