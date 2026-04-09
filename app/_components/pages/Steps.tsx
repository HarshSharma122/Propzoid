import React from 'react';
import { UserPlus, Home, BarChart3, Share2, Thermometer, Users } from 'lucide-react';
import Link from 'next/link';

const Steps = () => {
  const steps = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Create Your Account",
      description: "Sign up in minutes and set up your profile to start managing your properties.",
      color: "bg-[#CC7F3B]"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Create Property Page",
      description: "Build a stunning page for your property with photos, details, and pricing.",
      color: "bg-[#CC7F3B]"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Track Everything",
      description: "Monitor visitor traffic, leads, and engagement in real-time.",
      color: "bg-[#CC7F3B]"
    }
  ];

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Visitor Tracking",
      description: "See exactly how many people visit your property page"
    },
    {
      icon: <Thermometer className="w-5 h-5" />,
      title: "Lead Temperature",
      description: "Track if leads are Hot, Warm, or Cold"
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Share Anywhere",
      description: "Get a unique link to share across all platforms"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Complete Analytics",
      description: "Everything you need to manage your property"
    }
  ];

  return (
    <div id='steps' className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-[#CC7F3B]">Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your property in front of the right buyers with our simple 3-step process
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`${step.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6`}>
                  {step.icon}
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Can <span className="text-[#CC7F3B]">Track & Share</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#CC7F3B] mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Temperature Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Smart Lead Temperature Tracking
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-50 px-6 py-3 rounded-full border border-red-200">
              <span className="text-red-600 font-semibold">🔥 Hot Leads</span>
              <span className="text-gray-600 text-sm ml-2">Ready to buy</span>
            </div>
            <div className="bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
              <span className="text-orange-600 font-semibold">🌤️ Warm Leads</span>
              <span className="text-gray-600 text-sm ml-2">Showing interest</span>
            </div>
            <div className="bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
              <span className="text-blue-600 font-semibold">❄️ Cold Leads</span>
              <span className="text-gray-600 text-sm ml-2">Just browsing</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#CC7F3B] to-[#A05F2A] rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Showcase Your Property?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join thousands of property owners who trust us with their listings
          </p>
          <Link href="/contact">
          <button className="bg-white text-[#CC7F3B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
         Book Seat Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Steps;