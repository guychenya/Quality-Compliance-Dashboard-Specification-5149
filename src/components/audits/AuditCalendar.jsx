import React from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiChevronLeft, FiChevronRight, FiCalendar } = FiIcons

const AuditCalendar = () => {
  const currentMonth = "June 2024"
  
  // Calendar data - simulating a month view
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    // First day of June 2024 is a Saturday (index 5)
    const dayNumber = i - 5 + 1
    return {
      dayNumber: dayNumber > 0 && dayNumber <= 30 ? dayNumber : null,
      isCurrentMonth: dayNumber > 0 && dayNumber <= 30,
      events: []
    }
  })
  
  // Add some sample audit events
  calendarDays[9].events.push({ // June 5
    id: 1,
    title: 'Supplier Quality Audit',
    type: 'external',
    time: '9:00 AM'
  })
  
  calendarDays[14].events.push({ // June 10
    id: 2,
    title: 'FDA Compliance Review',
    type: 'external',
    time: '10:30 AM'
  })
  
  calendarDays[19].events.push({ // June 15
    id: 3,
    title: 'ISO 9001 Internal Audit',
    type: 'internal',
    time: '11:00 AM'
  })
  
  calendarDays[26].events.push({ // June 22
    id: 4,
    title: 'GMP Compliance Assessment',
    type: 'internal',
    time: '2:00 PM'
  })
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  const getEventColor = (type) => {
    return type === 'internal' 
      ? 'bg-purple-100 text-purple-800 border-purple-200' 
      : 'bg-indigo-100 text-indigo-800 border-indigo-200'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200"
    >
      <div className="p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">{currentMonth}</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <SafeIcon icon={FiChevronLeft} className="h-5 w-5 text-gray-600" />
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-100 text-sm text-gray-600">
              Today
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <SafeIcon icon={FiChevronRight} className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Weekday Headers */}
          {weekdays.map((day, index) => (
            <div 
              key={index}
              className="text-center text-sm font-medium text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-[100px] border rounded-lg p-1 ${
                day.isCurrentMonth 
                  ? 'bg-white border-gray-200' 
                  : 'bg-gray-50 border-gray-100 text-gray-400'
              }`}
            >
              {/* Day Number */}
              <div className="text-right p-1 font-medium">
                {day.dayNumber}
              </div>
              
              {/* Events */}
              <div className="mt-1 space-y-1">
                {day.events.map(event => (
                  <div 
                    key={event.id}
                    className={`text-xs p-1 rounded border ${getEventColor(event.type)}`}
                  >
                    <div className="font-medium truncate">{event.title}</div>
                    <div>{event.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default AuditCalendar