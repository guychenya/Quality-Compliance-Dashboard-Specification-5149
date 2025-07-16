import React from 'react'
import { motion } from 'framer-motion'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import KPICard from './KPICard'
import RecentAudits from './RecentAudits'
import ComplianceAreas from './ComplianceAreas'
import DocumentManagement from './DocumentManagement'
import ComplianceChart from './ComplianceChart'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiTrendingUp, FiAlertTriangle, FiUsers, FiFileText } = FiIcons

const Dashboard = () => {
  const kpis = [
    {
      title: 'Overall Compliance Rate',
      value: '92.5%',
      change: '+2.1%',
      changeType: 'increase',
      icon: FiTrendingUp,
      color: 'green',
      trend: true
    },
    {
      title: 'Open CAPAs',
      value: '14',
      change: '-3',
      changeType: 'decrease',
      icon: FiAlertTriangle,
      color: 'orange',
      trend: false
    },
    {
      title: 'Training Completion',
      value: '87%',
      change: '+5%',
      changeType: 'increase',
      icon: FiUsers,
      color: 'blue',
      trend: true
    },
    {
      title: 'Audit Findings',
      value: '23',
      change: '+2',
      changeType: 'increase',
      icon: FiFileText,
      color: 'red',
      trend: false
    }
  ]

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
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => (
                <KPICard key={index} {...kpi} />
              ))}
            </div>
            
            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComplianceChart />
              <RecentAudits />
            </div>
            
            {/* Detailed Information Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComplianceAreas />
              <DocumentManagement />
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard