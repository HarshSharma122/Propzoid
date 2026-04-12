import React from 'react'

const Overview = () => {
  // Sample data - replace with actual API data
  const stats = {
    totalProperties: 24,
    activeProperties: 18,
    soldProperties: 6,
    totalLeads: 147,
    hotLeads: 32,
    warmLeads: 68,
    coldLeads: 47,
    totalCampaigns: 8
  }

  const recentActivities = [
    { id: 1, type: 'lead', message: 'John Doe requested a site visit', time: '5 minutes ago', status: 'hot' },
    { id: 2, type: 'property', message: 'New property listing added - 3BHK Apartment', time: '1 hour ago', status: 'success' },
    { id: 3, type: 'lead', message: 'Sarah Smith converted to client', time: '3 hours ago', status: 'warm' },
    { id: 4, type: 'campaign', message: 'Summer Sale campaign started', time: '5 hours ago', status: 'active' },
    { id: 5, type: 'property', message: 'Property sold - Luxury Villa', time: '1 day ago', status: 'sold' },
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your properties today.</p>
        </div>

        {/* Property Stats Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Property Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Properties</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.totalProperties}</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <span className="text-xl">🏘️</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Active Properties</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeProperties}</p>
                </div>
                <div className="bg-green-100 rounded-full p-3">
                  <span className="text-xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Sold Properties</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.soldProperties}</p>
                </div>
                <div className="bg-purple-100 rounded-full p-3">
                  <span className="text-xl">🏆</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Campaigns</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.totalCampaigns}</p>
                </div>
                <div className="bg-orange-100 rounded-full p-3">
                  <span className="text-xl">📢</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Stats Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Lead Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.totalLeads}</p>
                </div>
                <div className="bg-gray-100 rounded-full p-3">
                  <span className="text-xl">👥</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-5 shadow-sm border border-red-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-600 text-sm">Hot Leads</p>
                  <p className="text-2xl font-bold text-red-600">{stats.hotLeads}</p>
                  <p className="text-xs text-red-500 mt-1">High priority</p>
                </div>
                <div className="bg-red-100 rounded-full p-3">
                  <span className="text-xl">🔥</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-5 shadow-sm border border-yellow-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 text-sm">Warm Leads</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.warmLeads}</p>
                  <p className="text-xs text-yellow-500 mt-1">Medium priority</p>
                </div>
                <div className="bg-yellow-100 rounded-full p-3">
                  <span className="text-xl">🌟</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 shadow-sm border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm">Cold Leads</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.coldLeads}</p>
                  <p className="text-xs text-blue-500 mt-1">Nurture needed</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <span className="text-xl">❄️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
              <button className="text-sm text-[#CC7F3B] hover:text-[#b06d2e] font-medium">
                View All →
              </button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex-shrink-0">
                      {activity.type === 'lead' && <span className="text-xl">👤</span>}
                      {activity.type === 'property' && <span className="text-xl">🏠</span>}
                      {activity.type === 'campaign' && <span className="text-xl">📢</span>}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-sm font-medium">{activity.message}</p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                    <div>
                      {activity.status === 'hot' && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">Hot Lead</span>
                      )}
                      {activity.status === 'warm' && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">Warm Lead</span>
                      )}
                      {activity.status === 'success' && (
                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Success</span>
                      )}
                      {activity.status === 'active' && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">Active</span>
                      )}
                      {activity.status === 'sold' && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">Sold</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-[#CC7F3B] text-white px-4 py-3 rounded-lg hover:bg-[#b06d2e] transition-colors font-medium">
            + Add New Property
          </button>
          <button className="bg-white text-gray-700 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
            📞 View All Leads
          </button>
          <button className="bg-white text-gray-700 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
            📊 Generate Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overview