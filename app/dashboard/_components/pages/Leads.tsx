"use client"

import React, { useState } from 'react'

const Leads = () => {
  const [selectedProperty, setSelectedProperty] = useState("all")
  const [showLeadModal, setShowLeadModal] = useState(false)
  const [selectedLead, setSelectedLead] = useState(null)
  const [showAddLeadModal, setShowAddLeadModal] = useState(false)

  // Sample properties data
  const properties = [
    { id: 1, name: "Luxury 3BHK Apartment", location: "Andheri West, Mumbai" },
    { id: 2, name: "Independent House", location: "Whitefield, Bangalore" },
    { id: 3, name: "Commercial Office Space", location: "Connaught Place, Delhi" },
    { id: 4, name: "Beachfront Villa", location: "Goa" },
    { id: 5, name: "2BHK Affordable Flat", location: "Noida" }
  ]

  // Sample leads data
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Rahul Mehta",
      email: "rahul.mehta@email.com",
      phone: "+91 98765 43210",
      propertyId: 1,
      propertyName: "Luxury 3BHK Apartment",
      leadType: "Hot",
      status: "New",
      message: "Interested in immediate purchase",
      date: "2024-01-15",
      time: "10:30 AM"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      propertyId: 1,
      propertyName: "Luxury 3BHK Apartment",
      leadType: "Warm",
      status: "Contacted",
      message: "Would like to schedule a site visit",
      date: "2024-01-14",
      time: "2:15 PM"
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit.kumar@email.com",
      phone: "+91 76543 21098",
      propertyId: 2,
      propertyName: "Independent House",
      leadType: "Hot",
      status: "Negotiation",
      message: "Ready for negotiation on price",
      date: "2024-01-13",
      time: "11:00 AM"
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha.gupta@email.com",
      phone: "+91 65432 10987",
      propertyId: 3,
      propertyName: "Commercial Office Space",
      leadType: "Cold",
      status: "New",
      message: "Just browsing, need more information",
      date: "2024-01-12",
      time: "4:45 PM"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 98765 12345",
      propertyId: 4,
      propertyName: "Beachfront Villa",
      leadType: "Hot",
      status: "Site Visit Scheduled",
      message: "Very interested, coming for site visit tomorrow",
      date: "2024-01-11",
      time: "9:00 AM"
    }
  ])

  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    phone: "",
    propertyId: "",
    leadType: "Warm",
    message: ""
  })

  const getLeadTypeColor = (type:any) => {
    switch(type) {
      case "Hot": return "bg-red-100 text-red-700"
      case "Warm": return "bg-yellow-100 text-yellow-700"
      case "Cold": return "bg-blue-100 text-blue-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status:any) => {
    switch(status) {
      case "New": return "bg-purple-100 text-purple-700"
      case "Contacted": return "bg-blue-100 text-blue-700"
      case "Negotiation": return "bg-orange-100 text-orange-700"
      case "Site Visit Scheduled": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const filteredLeads = selectedProperty === "all" 
    ? leads 
    : leads.filter(lead => lead.propertyId === parseInt(selectedProperty))

  const getLeadsCountByProperty = (propertyId:any) => {
    return leads.filter(lead => lead.propertyId === propertyId).length
  }

  const getLeadsByType = (propertyId:any, type:any) => {
    return leads.filter(lead => lead.propertyId === propertyId && lead.leadType === type).length
  }

  // const handleAddLead = (e:any) => {
  //   e.preventDefault()
  //   const property = properties.find(p => p.id === parseInt(newLead.propertyId))
  //   const lead = {
  //     id: leads.length + 1,
  //     ...newLead,
  //     propertyName: property.name,
  //     status: "New",
  //     date: new Date().toISOString().split('T')[0],
  //     time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  //   }
  //   setLeads([...leads, lead])
  //   setShowAddLeadModal(false)
  //   setNewLead({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     propertyId: "",
  //     leadType: "Warm",
  //     message: ""
  //   })
  // }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Leads Manager</h1>
          <p className="text-gray-600">Track and manage property inquiries</p>
        </div>

        {/* Property-wise Lead Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {properties.map(property => (
            <div 
              key={property.id}
              
              className={`bg-white rounded-lg p-4 shadow-sm border-2 cursor-pointer transition-all ${
             
                   "border-transparent hover:border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">{property.name}</h3>
                  <p className="text-xs text-gray-500">{property.location}</p>
                </div>
                <span className="bg-[#CC7F3B] text-white px-2 py-1 rounded-full text-xs font-bold">
                  {getLeadsCountByProperty(property.id)} Leads
                </span>
              </div>
              <div className="flex gap-2 text-xs mt-2">
                <span className="px-2 py-1 bg-red-50 text-red-600 rounded">🔥 Hot: {getLeadsByType(property.id, "Hot")}</span>
                <span className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded">🌟 Warm: {getLeadsByType(property.id, "Warm")}</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">❄️ Cold: {getLeadsByType(property.id, "Cold")}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center flex-wrap gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedProperty("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedProperty === "all" 
                  ? "bg-[#CC7F3B] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Properties
            </button>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Lead Types</option>
              <option>Hot</option>
              <option>Warm</option>
              <option>Cold</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Status</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Negotiation</option>
              <option>Site Visit Scheduled</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddLeadModal(true)}
            className="bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors flex items-center gap-2"
          >
            <span className="text-xl">+</span> Add New Lead
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.message.substring(0, 30)}...</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{lead.email}</div>
                      <div className="text-sm text-gray-500">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{lead.propertyName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLeadTypeColor(lead.leadType)}`}>
                        {lead.leadType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{lead.date}</div>
                      <div className="text-xs text-gray-500">{lead.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => {
                        
                          setShowLeadModal(true)
                        }}
                        className="text-[#CC7F3B] hover:text-[#b06d2e] text-sm font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Details Modal */}
        {/* {showLeadModal && selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full">
              <div className="border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Lead Details</h2>
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500">Full Name</label>
                    <p className="font-medium text-gray-800">{selectedLead.name}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Email Address</label>
                    <p className="font-medium text-gray-800">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Phone Number</label>
                    <p className="font-medium text-gray-800">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Lead Type</label>
                    <p className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLeadTypeColor(selectedLead.leadType)}`}>
                      {selectedLead.leadType}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Property</label>
                    <p className="font-medium text-gray-800">{selectedLead.propertyName}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Status</label>
                    <p className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedLead.status)}`}>
                      {selectedLead.status}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs text-gray-500">Message/Query</label>
                    <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">{selectedLead.message}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Date Received</label>
                    <p className="text-gray-800">{selectedLead.date}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500">Time</label>
                    <p className="text-gray-800">{selectedLead.time}</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors">
                    Update Status
                  </button>
                  <button className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* Add Lead Modal */}
        {showAddLeadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Add New Lead</h2>
                <button
                  onClick={() => setShowAddLeadModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <form  className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={newLead.name}
                      onChange={(e) => setNewLead({...newLead, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={newLead.email}
                      onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={newLead.phone}
                      onChange={(e) => setNewLead({...newLead, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Property *</label>
                    <select
                      required
                      value={newLead.propertyId}
                      onChange={(e) => setNewLead({...newLead, propertyId: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    >
                      <option value="">Select Property</option>
                      {properties.map(prop => (
                        <option key={prop.id} value={prop.id}>{prop.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lead Type *</label>
                    <select
                      value={newLead.leadType}
                      onChange={(e) => setNewLead({...newLead, leadType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    >
                      <option value="Hot">Hot Lead</option>
                      <option value="Warm">Warm Lead</option>
                      <option value="Cold">Cold Lead</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message/Query</label>
                  <textarea
                   
                    value={newLead.message}
                    onChange={(e) => setNewLead({...newLead, message: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    placeholder="Enter lead's message or requirements..."
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddLeadModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e]"
                  >
                    Add Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Leads