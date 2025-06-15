'use client'

import { Input } from 'antd';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react';

const Signup = () => {
  //string state variables
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-md">
          {/* Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 transition-all duration-500 hover:shadow-3xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                Sign Up
              </h1>
              <p className="text-gray-600">
                Sign up to get started with your account
              </p>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Input.Password
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Sign Up
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Switch Form */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?
                <Link
                  href={'/login'}
                  className="ml-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>

            {/* Terms */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-60"></div>
        </div>
      </div>
    </>
  )
}

export default Signup