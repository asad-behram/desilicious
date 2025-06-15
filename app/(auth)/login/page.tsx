'use client'

import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Input } from 'antd';
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  //string variables
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
            {/* Header */};;
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                Login
              </h1>
              <p className="text-gray-600">
                Sign in to your account to continue
              </p>
            </div>

            <div className="space-y-2 mb-4">
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

            <div className="space-y-2 mb-4">
              <div className="relative">
                <Input.Password
                  iconRender={visible => visible ? <EyeOff /> : <Eye />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="*****"
                />
                <button
                  type="button"
                  // onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {/* {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />} */}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center space-x-2">
              </label>
              <a
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?
                <Link
                href='/signup'
                  className="ml-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login