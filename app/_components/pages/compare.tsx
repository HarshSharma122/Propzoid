import React from 'react';
import { Check, X, Zap, Headphones, FileSpreadsheet, TrendingUp, DollarSign, Users, PhoneCall } from 'lucide-react';

const Compare = () => {
  const comparisonData = [
    {
      feature: "Ad Costs",
      propzoid: "Included in package",
      others: "Expensive paid ads required",
      propzoidValue: true
    },
    {
      feature: "Lead Quality",
      propzoid: "High-quality verified leads",
      others: "Low quality, unverified leads",
      propzoidValue: true
    },
    {
      feature: "Platform Pricing",
      propzoid: "Affordable & transparent",
      others: "High platform fees",
      propzoidValue: true
    },
    {
      feature: "Instagram/Facebook Ads",
      propzoid: "We run ads for you",
      others: "You manage on your own",
      propzoidValue: true
    },
    {
      feature: "Customer Support",
      propzoid: "24/7 Dedicated Support",
      others: "Limited or no support",
      propzoidValue: true
    },
    {
      feature: "Lead Delivery",
      propzoid: "Excel & WhatsApp",
      others: "Manual checking required",
      propzoidValue: true
    },
    {
      feature: "Lead Tracking",
      propzoid: "Advanced analytics",
      others: "Basic or none",
      propzoidValue: true
    },
    {
      feature: "Multi-platform Ads",
      propzoid: "Facebook + Instagram",
      others: "Single platform only",
      propzoidValue: true
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "More Leads",
      description: "Our multi-platform ad strategy drives 3x more qualified leads",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Save Money",
      description: "No expensive ad costs - everything's included in one package",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#CC7F3B]/10 rounded-full mb-4">
            <span className="text-[#CC7F3B] font-semibold">Why Choose Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PropZoid vs <span className="text-gray-400">Others</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why property owners are switching to PropZoid for better leads and lower costs
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#CC7F3B] to-[#A05F2A]">
                  <th className="px-6 py-6 text-left text-white font-semibold text-lg w-1/3">
                    Features
                  </th>
                  <th className="px-6 py-6 text-center text-white font-semibold text-lg border-l border-white/20">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5" />
                      <span>PropZoid</span>
                    </div>
                  </th>
                  <th className="px-6 py-6 text-center text-white/80 font-semibold text-lg border-l border-white/20">
                    Other Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-5 text-gray-800 font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-5 text-center border-l border-gray-100">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item.propzoid}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center border-l border-gray-100">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-400" />
                        <span className="text-gray-500">{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`${benefit.color} rounded-2xl p-8 border border-gray-100`}>
              <div className={`${benefit.iconColor} mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Everything You Need to Succeed
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#CC7F3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Multi-Platform Ad Strategy</h4>
                    <p className="text-gray-300">We run optimized ads on both Instagram and Facebook to maximize your reach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#CC7F3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileSpreadsheet className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Instant Lead Delivery</h4>
                    <p className="text-gray-300">Get all leads delivered directly to WhatsApp and Excel sheets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#CC7F3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Qualified Leads Only</h4>
                    <p className="text-gray-300">We pre-qualify every lead to ensure you only talk to serious buyers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <PhoneCall className="w-12 h-12 text-[#CC7F3B] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">24/7 Dedicated Support</h3>
                <p className="text-gray-300 mb-6">
                  Our team is always available to help you with any questions or concerns
                </p>
                <div className="flex items-center justify-center gap-2 text-[#CC7F3B]">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Support Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Get More Qualified Leads?
          </h3>
          <p className="text-gray-600 mb-8">
            Join hundreds of property owners who've made the switch to PropZoid
          </p>
          <button className="bg-[#CC7F3B] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#A05F2A] transition-colors shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compare;