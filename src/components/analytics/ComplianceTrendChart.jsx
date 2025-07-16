import React from 'react'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts'

const ComplianceTrendChart = () => {
  const data = [
    { month: 'Jan', iso9001: 92, fda: 88, environmental: 90, safety: 78 },
    { month: 'Feb', iso9001: 94, fda: 89, environmental: 92, safety: 80 },
    { month: 'Mar', iso9001: 91, fda: 87, environmental: 93, safety: 82 },
    { month: 'Apr', iso9001: 93, fda: 90, environmental: 91, safety: 85 },
    { month: 'May', iso9001: 95, fda: 92, environmental: 94, safety: 87 },
    { month: 'Jun', iso9001: 96, fda: 93, environmental: 95, safety: 89 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Compliance Trend by Area</h2>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-600">ISO 9001</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600">FDA</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
            <span className="text-xs text-gray-600">Environmental</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <span className="text-xs text-gray-600">Safety</span>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" fontSize={12} />
            <YAxis
              stroke="#666"
              fontSize={12}
              domain={[70, 100]}
              ticks={[70, 75, 80, 85, 90, 95, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            />
            <Legend />
            <ReferenceLine y={90} stroke="#16a34a" strokeDasharray="3 3" label={{ position: 'right', value: 'Target (90%)', fill: '#16a34a', fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey="iso9001"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              name="ISO 9001"
            />
            <Line
              type="monotone"
              dataKey="fda"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
              name="FDA"
            />
            <Line
              type="monotone"
              dataKey="environmental"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
              name="Environmental"
            />
            <Line
              type="monotone"
              dataKey="safety"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
              name="Safety"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ComplianceTrendChart