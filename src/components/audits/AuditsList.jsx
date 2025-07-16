import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { 
  FiCalendar, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiUser, 
  FiFileText,
  FiEye,
  FiEdit,
  FiMoreVertical
} = FiIcons

const AuditsList = ({ filterStatus }) => {
  const audits = [
    {
      id: 1,
      title: 'ISO 9001:2015 Internal Audit',
      auditType: 'Internal',
      date: '2024-06-15',
      department: 'Manufacturing',
      status: 'scheduled',
      auditor: 'John Smith',
      findings: 0
    },
    {
      id: 2,
      title: 'FDA Compliance Review',
      auditType: 'External',
      date: '2024-06-10',
      department: 'Quality Assurance',
      status: 'in_progress',
      auditor: 'Sarah Johnson',
      findings: 0
    },
    {
      id: 3,
      title: 'Environmental Compliance Audit',
      auditType: 'Internal',
      date: '2024-05-28',
      department: 'Operations',
      status: 'completed',
      auditor: 'Mike Wilson',
      findings: 3
    },
    {
      id: 4,
      title: 'Supplier Quality Audit - ABC Suppliers',
      auditType: 'External',
      date: '2024-05-20',
      department: 'Procurement',
      status: 'completed',
      auditor: 'Lisa Chen',
      findings: 5
    },
    {
      id: 5,
      title: 'GMP Compliance Assessment',
      auditType: 'Internal',
      date: '2024-06-22',
      department: 'Production',
      status: 'scheduled',
      auditor: 'Robert Taylor',
      findings: 0
    }
  ]

  const filteredAudits = filterStatus === 'all' 
    ? audits 
    : audits.filter(audit => audit.status === filterStatus)
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return FiCheckCircle
      case 'in_progress': return FiClock
      case 'scheduled': return FiCalendar
      default: return FiAlertCircle
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50'
      case 'in_progress': return 'text-yellow-600 bg-yellow-50'
      case 'scheduled': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in_progress': return 'In Progress'
      case 'scheduled': return 'Scheduled'
      default: return 'Unknown'
    }
  }

  const getAuditTypeColor = (type) => {
    return type === 'Internal' 
      ? 'text-purple-600 bg-purple-50 border-purple-200' 
      : 'text-indigo-600 bg-indigo-50 border-indigo-200'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Audit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Auditor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Findings
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAudits.map((audit, index) => (
              <motion.tr 
                key={audit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                      <SafeIcon icon={FiFileText} className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {audit.title}
                      </div>
                      <div className="mt-1">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getAuditTypeColor(audit.auditType)}`}>
                          {audit.auditType}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                    {audit.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{audit.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiUser} className="h-4 w-4 mr-1" />
                    {audit.auditor}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(audit.status)}`}>
                    <SafeIcon icon={getStatusIcon(audit.status)} className="h-3 w-3 mr-1" />
                    {getStatusText(audit.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {audit.status === 'completed' ? (
                    <div className="text-sm font-medium text-gray-900">{audit.findings}</div>
                  ) : (
                    <div className="text-sm text-gray-500">—</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <SafeIcon icon={FiEye} className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <SafeIcon icon={FiEdit} className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <SafeIcon icon={FiMoreVertical} className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing {filteredAudits.length} of {audits.length} audits
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary-50 text-primary-600 border border-primary-200 rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AuditsList