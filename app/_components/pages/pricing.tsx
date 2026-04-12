"use client"

import React from 'react';
import { 
  CheckCircle2, 
  Home, 
  Users, 
  Megaphone, 
  BarChart3, 
  Headphones, 
  Zap,
  Shield,
  Clock,
  ArrowRight,
  Sparkles,
  TrendingUp,
  MessageCircle,
  Calendar,
  FileText,
  Smartphone,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  const features = [
    {
      category: "Property Management",
      items: [
        { name: "Unlimited Property Listings", icon: Home },
        { name: "Premium Property Showcase", icon: Sparkles },
        { name: "Virtual Tour Integration", icon: Globe },
        { name: "Automated Property Updates", icon: Clock }
      ]
    },
    {
      category: "Lead Management",
      items: [
        { name: "Unlimited Leads Tracking", icon: Users },
        { name: "Hot/Warm/Cold Lead Scoring", icon: TrendingUp },
        { name: "Automated Lead Assignment", icon: Zap },
        { name: "Lead Analytics Dashboard", icon: BarChart3 }
      ]
    },
    {
      category: "Marketing & Campaigns",
      items: [
        { name: "Ad Campaign Management", icon: Megaphone },
        { name: "Multi-Platform Integration", icon: Smartphone },
        { name: "Performance Analytics", icon: BarChart3 },
        { name: "Email & SMS Campaigns", icon: MessageCircle }
      ]
    },
    {
      category: "Support & Features",
      items: [
        { name: "24/7 Priority Support", icon: Headphones },
        { name: "Data Export & Reports", icon: FileText },
        { name: "Calendar & Schedule Management", icon: Calendar },
        { name: "Advanced Security Features", icon: Shield }
      ]
    }
  ];

  const benefits = [
    "No hidden fees",
    "Cancel anytime",
    "Free updates",
    "No setup cost",
    "Secure payment",
    "30-day money back"
  ];

  return (
    <div id="pricing" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#CC7F3B]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#CC7F3B]" />
            <span className="text-[#CC7F3B] font-medium text-sm">Simple & Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Everything You Need for{' '}
            <span className="text-[#CC7F3B]">₹999/month</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One plan. All features included. No surprises.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#CC7F3B]/20 overflow-hidden hover:shadow-3xl transition-all duration-300">
            {/* Popular Badge */}
            <div className="bg-[#CC7F3B] text-white text-center py-2">
              <span className="text-sm font-medium flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                MOST POPULAR CHOICE FOR PROPERTY OWNERS
                <Zap className="w-4 h-4" />
              </span>
            </div>

            <div className="p-8 md:p-12">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">₹999</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-500 mt-2">Billed monthly. Cancel anytime.</p>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <button className="w-full bg-[#CC7F3B] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#b06d2e] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  No credit card required for 7-day free trial
                </p>
              </div>

              {/* Benefits Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {benefits.map((benefit, index) => (
                  <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#CC7F3B] rounded-full"></div>
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.items.map((feature, featureIdx) => {
                        const Icon = feature.icon;
                        return (
                          <div key={featureIdx} className="flex items-center gap-3 text-gray-700">
                            <div className="flex-shrink-0 w-5 h-5 text-[#CC7F3B]">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm">{feature.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              What You Get vs. Traditional Services
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-[#CC7F3B] uppercase">PropZoid</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Traditional Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-[#CC7F3B]">₹999</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">₹5,000 - ₹50,000+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Property Listings</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Unlimited</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Lead Management</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Advanced</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ Basic</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Ad Campaigns</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Included</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ Extra Cost</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Analytics Dashboard</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Real-time</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 24/7 Priority</td>
                  <td className="px-6 py-4 text-center text-red-500">✗ Business Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help you make the right decision
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-[#CC7F3B] font-medium hover:underline"
          >
            Contact Our Sales Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-500">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-5 h-5" />
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Headphones className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;