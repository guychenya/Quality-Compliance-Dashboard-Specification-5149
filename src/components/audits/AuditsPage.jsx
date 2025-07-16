import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import AuditsList from './AuditsList'
import AuditCalendar from './AuditCalendar'
import AuditStats from './AuditStats'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiPlus, FiFilter, FiCalendar, FiList } = FiIcons

const AuditsPage = () => {
  const [viewMode, setViewMode] = useState('list')
  const [filterStatus, setFilterStatus] = useState('all')
  
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
                <h1 className="text-2xl font-bold text-gray-900">Audits Management</h1>
                <p className="text-gray-600">Schedule, track and manage audit activities</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-1">
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <SafeIcon icon={FiList} className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('calendar')}
                    className={`p-2 rounded-md ${viewMode === 'calendar' ? 'bg-primary-50 text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <SafeIcon icon={FiCalendar} className="h-5 w-5" />
                  </button>
                </div>
                
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Status</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                
                <button className="py-2 px-4 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center space-x-2">
                  <SafeIcon icon={FiFilter} className="h-4 w-4" />
                  <span>More Filters</span>
                </button>
                
                <button className="py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center space-x-2">
                  <SafeIcon icon={FiPlus} className="h-4 w-4" />
                  <span>New Audit</span>
                </button>
              </div>
            </div>
            
            {/* Audit Stats */}
            <AuditStats />
            
            {/* Audit Content */}
            {viewMode === 'list' ? (
              <AuditsList filterStatus={filterStatus} />
            ) : (
              <AuditCalendar />
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default AuditsPage