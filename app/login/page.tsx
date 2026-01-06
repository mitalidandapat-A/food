import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Login - Restaurant Food Delivery",
  description: "Login to your account to order delicious food online",
};

const Loginpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <Card className="w-full max-w-md shadow-2xl border-0 backdrop-blur-sm bg-white/95 relative z-10">
        
        <CardHeader className="space-y-4 pb-8">
          
          <div className="flex justify-center mb-2">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-linear-to-br from-red-500 to-orange-500 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo2.png"
                  alt="Restaurant Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Welcome Back!
            </CardTitle>
            <CardDescription className="text-base md:text-lg text-gray-600">
              Login to continue your food journey
            </CardDescription>
          </div>

          <div className="text-center pt-2">
            <p className="text-sm text-gray-600">
              Do not have an account?{" "}
              <Link 
                href="/signup" 
                className="text-red-600 font-semibold hover:text-red-700 hover:underline transition"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <Mail size={16} className="text-red-500" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="h-12 px-4 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label 
                  htmlFor="password" 
                  className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                >
                  <Lock size={16} className="text-red-500" />
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-red-600 hover:text-red-700 hover:underline font-medium transition"
                >
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                placeholder="Enter your password"
                className="h-12 px-4 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                Remember me for 30 days
              </Label>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-6">
          
          <Button
            type="submit"
            className="w-full h-12 bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Login to Account
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full h-12 border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-3 rounded-lg group"
          >
            <div className="w-5 h-5 relative">
              <Image 
                src="/images/googe.jpg" 
                alt="Google" 
                width={20} 
                height={20}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-gray-700 group-hover:text-red-600 transition">
              Login with Google
            </span>
          </Button>
          <div className="text-center pt-4 pb-2">
            <p className="text-sm text-gray-600">
              Having trouble logging in?{" "}
              <Link 
                href="/contact" 
                className="text-red-600 font-semibold hover:text-red-700 hover:underline transition"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </CardFooter>

      </Card>
    </div>
  )
}

export default Loginpage;