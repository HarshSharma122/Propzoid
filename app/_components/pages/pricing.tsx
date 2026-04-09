"use client"

import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  Gift, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  MessageCircle,
  Send,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission here
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Early Access",
      description: "Be first in line when we launch"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Founder's Benefits",
      description: "Special pricing locked in forever"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Priority Support",
      description: "VIP treatment from day one"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Shape the Product",
      description: "Your feedback guides our development"
    }
  ];

  const spotsLeft =100; // Example number

  return (
    <div id='pricing' className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full mb-6 border border-yellow-200">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">Early Stage • Limited Seats</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            We're Just <span className="text-[#CC7F3B]">Getting Started</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No pricing yet - we're focused on building the best platform for property owners. 
            Book your seat now and be part of our founding members.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Info */}
          <div className="space-y-8">
        

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-[#CC7F3B] mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial/Quote */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <MessageCircle className="w-8 h-8 text-[#CC7F3B] mb-3 opacity-50" />
              <p className="text-gray-700 italic mb-4">
                "We believe in delivering value first. That's why we're not setting prices until we're confident 
                we can exceed your expectations. Join us early and help shape something amazing."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#CC7F3B] rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-900">PropZoid Team</p>
                  <p className="text-sm text-gray-500">Building for property owners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Book Your Founder's Seat
                  </h2>
                  <p className="text-gray-600">
                    No payment required. We'll reach out when we're ready to start.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                      <option value="luxury">Luxury</option>
                      <option value="multiple">Multiple Properties</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your property needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#CC7F3B] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#A05F2A] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <span>Secure Your Spot</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    No credit card required. We'll contact you before we start working on your property.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  You're on the List! 🎉
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for joining as a founding member. We'll reach out to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#CC7F3B] font-medium hover:underline"
                >
                  Book another seat
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Happens Next?
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Book Your Seat</p>
                <p className="text-sm text-gray-500">Fill the form above</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">We'll Reach Out</p>
                <p className="text-sm text-gray-500">Personal consultation</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Start Working</p>
                <p className="text-sm text-gray-500">We handle everything</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Get Results</p>
                <p className="text-sm text-gray-500">Watch leads come in</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have questions? {" "}
            <Link href="" className="text-[#CC7F3B] font-medium hover:underline inline-flex items-center gap-1">
              Chat with us <Send className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;