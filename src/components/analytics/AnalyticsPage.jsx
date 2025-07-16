import React from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import ComplianceTrendChart from './ComplianceTrendChart'
import AuditFindings from './AuditFindings'
import PerformanceMetrics from './PerformanceMetrics'
import DepartmentalCompliance from './DepartmentalCompliance'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiFilter, FiDownload, FiRefreshCw } = FiIcons

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = React.useState('last6Months')
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Page Header with Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-gray-600">Comprehensive quality metrics and performance analytics</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="last30Days">Last 30 Days</option>
                    <option value="last3Months">Last 3 Months</option>
                    <option value="last6Months">Last 6 Months</option>
                    <option value="lastYear">Last Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                
                <button className="py-2 px-4 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center space-x-2">
                  <SafeIcon icon={FiFilter} className="h-4 w-4" />
                  <span>Filters</span>
                </button>
                
                <button className="py-2 px-4 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center space-x-2">
                  <SafeIcon icon={FiDownload} className="h-4 w-4" />
                  <span>Export</span>
                </button>
                
                <button className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50">
                  <SafeIcon icon={FiRefreshCw} className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComplianceTrendChart />
              <AuditFindings />
            </div>
            
            {/* Additional Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PerformanceMetrics />
              <DepartmentalCompliance />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default AnalyticsPage