import React from 'react'
import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const AuditFindings = () => {
  const data = [
    { month: 'Jan', critical: 2, major: 5, minor: 8 },
    { month: 'Feb', critical: 1, major: 6, minor: 7 },
    { month: 'Mar', critical: 0, major: 4, minor: 9 },
    { month: 'Apr', critical: 1, major: 3, minor: 6 },
    { month: 'May', critical: 0, major: 2, minor: 5 },
    { month: 'Jun', critical: 0, major: 3, minor: 4 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Audit Findings by Severity</h2>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" fontSize={12} />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            />
            <Legend />
            <Bar
              dataKey="critical"
              stackId="findings"
              fill="#ef4444"
              name="Critical"
            />
            <Bar
              dataKey="major"
              stackId="findings"
              fill="#f97316"
              name="Major"
            />
            <Bar
              dataKey="minor"
              stackId="findings"
              fill="#facc15"
              name="Minor"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="bg-red-50 p-3 rounded-lg border border-red-100">
          <div className="text-sm text-gray-600">Critical</div>
          <div className="text-xl font-bold text-red-600">4</div>
          <div className="text-xs text-gray-500">Total findings</div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
          <div className="text-sm text-gray-600">Major</div>
          <div className="text-xl font-bold text-orange-600">23</div>
          <div className="text-xs text-gray-500">Total findings</div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
          <div className="text-sm text-gray-600">Minor</div>
          <div className="text-xl font-bold text-yellow-600">39</div>
          <div className="text-xs text-gray-500">Total findings</div>
        </div>
      </div>
    </motion.div>
  )
}

export default AuditFindings