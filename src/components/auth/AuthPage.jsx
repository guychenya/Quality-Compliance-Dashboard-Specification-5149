import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiShield, FiTrendingUp, FiUsers, FiAward } = FiIcons

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const features = [
    {
      icon: FiShield,
      title: 'Compliance Monitoring',
      description: 'Real-time tracking of quality compliance metrics'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting capabilities'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Seamless collaboration across departments'
    },
    {
      icon: FiAward,
      title: 'Audit Management',
      description: 'Comprehensive audit tracking and management'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 flex">
      {/* Left Panel - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 flex-col justify-center">
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              Quality Compliance Dashboard
            </h1>
            <p className="text-xl mb-12 text-primary-100">
              Streamline your quality management processes with our comprehensive compliance monitoring solution.
            </p>
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <SafeIcon icon={feature.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-primary-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        {isLogin ? (
          <LoginForm onToggleForm={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggleForm={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  )
}

export default AuthPage