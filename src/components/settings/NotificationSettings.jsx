import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiSave } = FiIcons

const NotificationSettings = () => {
  const [settings, setSettings] = React.useState({
    auditScheduled: true,
    auditReminder: true,
    auditCompleted: true,
    documentUploaded: true,
    documentReviewed: false,
    documentExpiring: true,
    findingCreated: true,
    findingAssigned: true,
    findingOverdue: true,
    complianceAlert: true,
    weeklyReport: true,
    monthlyReport: false,
    emailNotifications: true,
    browserNotifications: false
  })
  
  const handleChange = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    })
  }
  
  const notificationGroups = [
    {
      title: 'Audits',
      items: [
        { id: 'auditScheduled', label: 'New audit scheduled' },
        { id: 'auditReminder', label: 'Audit reminder (24h before)' },
        { id: 'auditCompleted', label: 'Audit completed' }
      ]
    },
    {
      title: 'Documents',
      items: [
        { id: 'documentUploaded', label: 'New document uploaded' },
        { id: 'documentReviewed', label: 'Document reviewed or approved' },
        { id: 'documentExpiring', label: 'Document expiring soon' }
      ]
    },
    {
      title: 'Findings & CAPAs',
      items: [
        { id: 'findingCreated', label: 'New finding created' },
        { id: 'findingAssigned', label: 'Finding assigned to you' },
        { id: 'findingOverdue', label: 'Finding overdue' },
        { id: 'complianceAlert', label: 'Compliance threshold alert' }
      ]
    },
    {
      title: 'Reports',
      items: [
        { id: 'weeklyReport', label: 'Weekly summary report' },
        { id: 'monthlyReport', label: 'Monthly compliance report' }
      ]
    }
  ]
  
  const deliveryMethods = [
    { id: 'emailNotifications', label: 'Email Notifications' },
    { id: 'browserNotifications', label: 'Browser Notifications' }
  ]
  
  const handleSave = () => {
    console.log('Notification settings saved:', settings)
    // In a real app, we would save the settings to the server here
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Settings</h2>
      
      {/* Notification Preferences */}
      <div className="space-y-8">
        {/* Delivery Methods */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Methods</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            {deliveryMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{method.label}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={settings[method.id]}
                    onChange={() => handleChange(method.id)}
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    settings[method.id] ? 'bg-primary-600' : 'bg-gray-300'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${
                      settings[method.id] ? 'transform translate-x-5' : ''
                    }`}></div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Notification Groups */}
        {notificationGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-medium text-gray-900 mb-4">{group.title}</h3>
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              {group.items.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={settings[item.id]}
                      onChange={() => handleChange(item.id)}
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors ${
                      settings[item.id] ? 'bg-primary-600' : 'bg-gray-300'
                    }`}>
                      <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ${
                        settings[item.id] ? 'transform translate-x-5' : ''
                      }`}></div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="flex justify-end pt-4">
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <SafeIcon icon={FiSave} className="h-4 w-4 mr-2" />
            Save Preferences
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default NotificationSettings