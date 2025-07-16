import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiPlus, FiEdit2, FiTrash2, FiSave } = FiIcons

const OrganizationSettings = () => {
  const [orgName, setOrgName] = React.useState('Acme Pharmaceutical, Inc.')
  const [editingOrgName, setEditingOrgName] = React.useState(false)
  
  const departments = [
    { id: 1, name: 'Quality Assurance', members: 12 },
    { id: 2, name: 'Manufacturing', members: 28 },
    { id: 3, name: 'Regulatory Affairs', members: 8 },
    { id: 4, name: 'Research & Development', members: 15 },
    { id: 5, name: 'Operations', members: 20 },
    { id: 6, name: 'Management', members: 6 }
  ]
  
  const [newDepartment, setNewDepartment] = React.useState('')
  const [showAddDepartment, setShowAddDepartment] = React.useState(false)
  
  const handleSaveOrgName = () => {
    // In a real app, we would update the organization name here
    setEditingOrgName(false)
  }
  
  const handleAddDepartment = () => {
    if (newDepartment.trim()) {
      console.log('Adding department:', newDepartment)
      // In a real app, we would add the department here
      setNewDepartment('')
      setShowAddDepartment(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Organization Settings</h2>
      
      {/* Organization Name */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Organization Details</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            
            {editingOrgName ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="block flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button 
                  onClick={handleSaveOrgName}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center"
                >
                  <SafeIcon icon={FiSave} className="h-4 w-4 mr-2" />
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="text-gray-900 font-medium">{orgName}</div>
                <button 
                  onClick={() => setEditingOrgName(true)}
                  className="text-primary-600 hover:text-primary-700"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization ID
            </label>
            <div className="text-gray-900 font-medium">ORG-123456789</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subscription Plan
            </label>
            <div className="flex items-center">
              <span className="text-gray-900 font-medium">Enterprise</span>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Departments */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Departments</h3>
          
          <button 
            onClick={() => setShowAddDepartment(true)}
            className="px-3 py-1 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm flex items-center"
          >
            <SafeIcon icon={FiPlus} className="h-4 w-4 mr-1" />
            Add Department
          </button>
        </div>
        
        {showAddDepartment && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Add New Department</h4>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
                placeholder="Department name"
                className="block flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                onClick={handleAddDepartment}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center"
              >
                Add
              </button>
              <button 
                onClick={() => setShowAddDepartment(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Members
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dept.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dept.members} members
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <button className="text-primary-600 hover:text-primary-700">
                        <SafeIcon icon={FiEdit2} className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <SafeIcon icon={FiTrash2} className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Data Management */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Data Management</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
            <h4 className="font-medium text-red-800 mb-2">Danger Zone</h4>
            <p className="text-sm text-red-600 mb-4">
              These actions cannot be undone. Please be certain.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Export Organization Data</p>
                  <p className="text-xs text-gray-500">Download all your organization's data</p>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm">
                  Export Data
                </button>
              </div>
              
              <div className="border-t border-red-200 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Delete Organization</p>
                  <p className="text-xs text-gray-500">Permanently delete this organization and all its data</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default OrganizationSettings