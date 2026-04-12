'use client'

import React, { useState } from 'react'

const Campaign = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample properties data
  const properties = [
    { id: 1, name: "Luxury 3BHK Apartment", location: "Andheri West, Mumbai", price: "₹1.2 Cr" },
    { id: 2, name: "Independent House", location: "Whitefield, Bangalore", price: "₹2.5 Cr" },
    { id: 3, name: "Commercial Office Space", location: "Connaught Place, Delhi", price: "₹3.8 Cr" },
    { id: 4, name: "Beachfront Villa", location: "Goa", price: "₹5.5 Cr" },
    { id: 5, name: "2BHK Affordable Flat", location: "Noida", price: "₹75 Lacs" }
  ]

  // Sample campaigns data
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Luxury Apartment Summer Sale",
      propertyId: 1,
      propertyName: "Luxury 3BHK Apartment",
      platforms: ["Facebook", "Instagram"],
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      budget: "₹50,000",
      status: "Active",
      impressions: 24500,
      clicks: 1250,
      leads: 45,
      createdAt: "2024-01-01"
    },
    {
      id: 2,
      name: "Bangalore House Campaign",
      propertyId: 2,
      propertyName: "Independent House",
      platforms: ["Google", "Facebook"],
      startDate: "2024-01-10",
      endDate: "2024-02-10",
      budget: "₹75,000",
      status: "Active",
      impressions: 18200,
      clicks: 980,
      leads: 32,
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      name: "Commercial Space Promotion",
      propertyId: 3,
      propertyName: "Commercial Office Space",
      platforms: ["LinkedIn", "Google"],
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      budget: "₹1,00,000",
      status: "Completed",
      impressions: 32100,
      clicks: 2100,
      leads: 67,
      createdAt: "2023-12-01"
    }
  ])

  const [newCampaign, setNewCampaign] = useState({
    name: "",
    propertyId: "",
    platforms: [],
    startDate: "",
    endDate: "",
    budget: "",
    targetAudience: "",
    dailyBudget: ""
  })

  const platforms = ["Facebook", "Instagram", "Google", "LinkedIn", "Twitter", "YouTube"]
  const targetAudiences = [
    "First Time Buyers",
    "Investors", 
    "Luxury Seekers",
    "Family Buyers",
    "Young Professionals",
    "Retirees"
  ]

  // const handlePlatformToggle = (platform) => {
  //   if (newCampaign.platforms.includes(platform)) {
  //     setNewCampaign({
  //       ...newCampaign,
  //       platforms: newCampaign.platforms.filter(p => p !== platform)
  //     })
  //   } else {
  //     setNewCampaign({
  //       ...newCampaign,
  //       platforms: [...newCampaign.platforms, platform]
  //     })
  //   }
  // }

  const handleCreateCampaign = (e:any) => {
    e.preventDefault()
    const property = properties.find(p => p.id === parseInt(newCampaign.propertyId))!
    const campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      propertyId: parseInt(newCampaign.propertyId),
      propertyName: property.name,
      platforms: newCampaign.platforms,
      startDate: newCampaign.startDate,
      endDate: newCampaign.endDate,
      budget: `₹${parseInt(newCampaign.budget).toLocaleString()}`,
      status: "Active",
      impressions: 0,
      clicks: 0,
      leads: 0,
      createdAt: new Date().toISOString().split('T')[0]
    }
    setCampaigns([...campaigns, campaign])
    setShowCreateModal(false)
    setNewCampaign({
      name: "",
      propertyId: "",
      platforms: [],
      startDate: "",
      endDate: "",
      budget: "",
      targetAudience: "",
      dailyBudget: ""
    })
  }

  const getStatusColor = (status:any) => {
    switch(status) {
      case "Active": return "bg-green-100 text-green-700"
      case "Completed": return "bg-gray-100 text-gray-700"
      case "Scheduled": return "bg-blue-100 text-blue-700"
      case "Paused": return "bg-yellow-100 text-yellow-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  // const getPlatformIcon = (platform:) => {
  //   const icons = {
  //     Facebook: "📘",
  //     Instagram: "📸",
  //     Google: "🔍",
  //     LinkedIn: "💼",
  //     Twitter: "🐦",
  //     YouTube: "▶️"
  //   }
  //   return icons[platform] || "📱"
  // }

  const filteredCampaigns = filterStatus === "all" 
    ? campaigns 
    : campaigns.filter(c => c.status === filterStatus)

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Ad Campaigns</h1>
            <p className="text-gray-600">Create and manage advertising campaigns for your properties</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors flex items-center gap-2"
          >
            <span className="text-xl">+</span> Create Campaign
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Active Campaigns</p>
            <p className="text-2xl font-bold text-green-600">
              {campaigns.filter(c => c.status === "Active").length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Total Impressions</p>
            <p className="text-2xl font-bold text-blue-600">
              {campaigns.reduce((sum, c) => sum + c.impressions, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Total Clicks</p>
            <p className="text-2xl font-bold text-purple-600">
              {campaigns.reduce((sum, c) => sum + c.clicks, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <p className="text-gray-500 text-sm">Leads Generated</p>
            <p className="text-2xl font-bold text-[#CC7F3B]">
              {campaigns.reduce((sum, c) => sum + c.leads, 0)}
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-2">
            {["all", "Active", "Completed", "Scheduled", "Paused"].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status.toLowerCase())}
                className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                  filterStatus === status.toLowerCase()
                    ? "bg-[#CC7F3B] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status === "all" ? "All Campaigns" : status}
              </button>
            ))}
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-800">{campaign.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-600">🏠 {campaign.propertyName}</p>
                </div>

                {/* <div className="flex flex-wrap gap-2 mb-3">
                  {campaign.platforms.map(platform => (
                    <span key={platform} className="px-2 py-1 bg-gray-100 rounded-lg text-xs flex items-center gap-1">
                      <span>{getPlatformIcon(platform)}</span> {platform}
                    </span>
                  ))}
                </div> */}

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Budget:</span>
                    <span className="font-medium">{campaign.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-xs">
                      {campaign.startDate} to {campaign.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Performance:</span>
                    <span className="text-xs">
                      👁️ {campaign.impressions.toLocaleString()} | 
                      🖱️ {campaign.clicks} | 
                      📞 {campaign.leads}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                     
                      setShowDetailsModal(true)
                    }}
                    className="flex-1 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                  >
                    View Stats
                  </button>
                  {campaign.status === "Active" && (
                    <button className="flex-1 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-lg text-sm hover:bg-yellow-100 transition-colors">
                      Pause
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Campaign Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Create New Campaign</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleCreateCampaign} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name *</label>
                  <input
                    type="text"
                    required
                    value={newCampaign.name}
                    onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    placeholder="e.g., Summer Sale 2024"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Property *</label>
                  <select
                    required
                    value={newCampaign.propertyId}
                    onChange={(e) => setNewCampaign({...newCampaign, propertyId: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                  >
                    <option value="">Select a property</option>
                    {properties.map(prop => (
                      <option key={prop.id} value={prop.id}>
                        {prop.name} - {prop.location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Platforms *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {platforms.map(platform => (
                      <label key={platform} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          
                          className="w-4 h-4 text-[#CC7F3B]"
                        />
                        <span>{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                    <input
                      type="date"
                      required
                      value={newCampaign.startDate}
                      onChange={(e) => setNewCampaign({...newCampaign, startDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                    <input
                      type="date"
                      required
                      value={newCampaign.endDate}
                      onChange={(e) => setNewCampaign({...newCampaign, endDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Budget (₹) *</label>
                    <input
                      type="number"
                      required
                      value={newCampaign.budget}
                      onChange={(e) => setNewCampaign({...newCampaign, budget: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                      placeholder="e.g., 50000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Daily Budget (₹)</label>
                    <input
                      type="number"
                      value={newCampaign.dailyBudget}
                      onChange={(e) => setNewCampaign({...newCampaign, dailyBudget: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
                  <select
                    value={newCampaign.targetAudience}
                    onChange={(e) => setNewCampaign({...newCampaign, targetAudience: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                  >
                    <option value="">Select target audience</option>
                    {targetAudiences.map(audience => (
                      <option key={audience} value={audience}>{audience}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Campaign Summary</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>📊 Estimated daily reach: {newCampaign.budget ? Math.floor(parseInt(newCampaign.budget) / 30).toLocaleString() : 0}+ users</p>
                    <p>🎯 Platform selection: {newCampaign.platforms.length} platforms</p>
                    <p>📅 Campaign duration: 0 days</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e]"
                  >
                    Launch Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Campaign Details Modal */}
        {/* {showDetailsModal && selectedCampaign && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full">
              <div className="border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Campaign Performance</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">{selectedCampaign.name}</h3>
                  <p className="text-gray-500">🏠 {selectedCampaign.propertyName}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600">Impressions</p>
                    <p className="text-xl font-bold text-blue-600">{selectedCampaign.impressions.toLocaleString()}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600">Clicks</p>
                    <p className="text-xl font-bold text-purple-600">{selectedCampaign.clicks}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600">CTR</p>
                    <p className="text-xl font-bold text-green-600">
                      {selectedCampaign.impressions ? ((selectedCampaign.clicks / selectedCampaign.impressions) * 100).toFixed(2) : 0}%
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-600">Leads</p>
                    <p className="text-xl font-bold text-orange-600">{selectedCampaign.leads}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Platforms:</span>
                    <span>{selectedCampaign.platforms.join(", ")}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Campaign Period:</span>
                    <span>{selectedCampaign.startDate} to {selectedCampaign.endDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Total Budget:</span>
                    <span className="font-medium">{selectedCampaign.budget}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Cost per Lead:</span>
                    <span>
                      ₹{selectedCampaign.leads ? Math.floor(parseInt(selectedCampaign.budget.replace(/[^0-9]/g, '')) / selectedCampaign.leads).toLocaleString() : 0}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCampaign.status)}`}>
                      {selectedCampaign.status}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t">
                  <button className="flex-1 bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e]">
                    Edit Campaign
                  </button>
                  <button className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Campaign