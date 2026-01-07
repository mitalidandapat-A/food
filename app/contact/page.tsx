import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Contact Us - Restaurant Food Delivery",
  description: "Get in touch with us for any questions, feedback, or support. We're here to help!",
  keywords: ["contact", "support", "feedback", "help", "restaurant"],
};

const Contactpage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">

      <div className="bg-linear-to-r from-red-600 to-orange-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
            <p className="text-lg md:text-xl text-red-100">
              We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
              <Phone className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Call Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Have a question? Give us a call.
            </p>
            <a 
              href="tel:+1234567890" 
              className="text-center text-red-600 font-bold hover:text-red-700 transition block"
            >
              +91 856-123-4567
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
              <Mail className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Email Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Send us an email and we will get back to you.
            </p>
            <a 
              href="mailto:support@restaurant.com" 
              className="text-center text-orange-600 font-bold hover:text-orange-700 transition block"
            >
              support@restaurant.com
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
              <MapPin className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Visit Us</h3>
            <p className="text-gray-600 text-center mb-4">
              Come visit us at our location.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-red-600 font-bold hover:text-red-700 transition block"
            >
              123 Food Street, City
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
            
            <form className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="h-12 px-4 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="h-12 px-4 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 "
                  className="h-12 px-4 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="h-12 px-4 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Message
                </Label>
                <textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-red-500 focus:ring-red-500 transition rounded-lg resize-none focus:outline-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
          <div className="space-y-8">
        
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="text-red-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>11:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-orange-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Need Quick Help?</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Check out our frequently asked questions or chat with our support team for instant assistance.
              </p>
              
              <div className="space-y-3">
                <Link 
                  href="/faq"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg text-center transition"
                >
                  View FAQ
                </Link>
                <button 
                  className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold py-3 px-4 rounded-lg transition"
                >
                  Start Live Chat
                </button>
              </div>
            </div>
            <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-lg border-2 border-red-200 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest offers and promotions on social media.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition">
                  𝕏
                </a>
                <a href="#" className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition">
                  in
                </a>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contactpage;