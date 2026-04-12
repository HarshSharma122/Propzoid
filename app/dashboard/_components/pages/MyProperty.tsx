"use client"

import React, { useState } from 'react'

const MyProperty = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      type: "Apartment",
      price: "₹1.2 Cr",
      location: "Andheri West, Mumbai",
      bedrooms: 3,
      bathrooms: 2,
      area: "1250 sq ft",
      status: "Available",
      image: "🏢",
      description: "Modern apartment with premium amenities"
    },
    {
      id: 2,
      title: "Independent House",
      type: "House",
      price: "₹2.5 Cr",
      location: "Whitefield, Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: "2200 sq ft",
      status: "Sold",
      image: "🏠",
      description: "Spacious house with garden"
    },
    {
      id: 3,
      title: "Commercial Office Space",
      type: "Commercial",
      price: "₹3.8 Cr",
      location: "Connaught Place, Delhi",
      bedrooms: 0,
      bathrooms: 2,
      area: "1800 sq ft",
      status: "Available",
      image: "🏭",
      description: "Prime location office space"
    }
  ])

  const [formData, setFormData] = useState({
    title: "",
    type: "Apartment",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    image: "🏢"
  })

  const propertyTypes = ["Apartment", "House", "Villa", "Commercial", "Land", "Studio"]

  const handleInputChange = (e:any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAddProperty = (e:any) => {
    e.preventDefault()
    const newProperty = {
      id: properties.length + 1,
      ...formData,
      price: `₹${formData.price}`,
      status: "Available",
      bedrooms: parseInt(formData.bedrooms) || 0,
      bathrooms: parseInt(formData.bathrooms) || 0,
    }
    setProperties([...properties, newProperty])
    setShowAddModal(false)
    setFormData({
      title: "",
      type: "Apartment",
      price: "",
      location: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      description: "",
      image: "🏢"
    })
  }

  const getStatusColor = (status:any) => {
    return status === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Properties</h1>
            <p className="text-gray-600">Manage all your property listings</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors flex items-center gap-2"
          >
            <span className="text-xl">+</span> Add New Property
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Total Properties</p>
            <p className="text-2xl font-bold text-gray-800">{properties.length}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Available</p>
            <p className="text-2xl font-bold text-green-600">
              {properties.filter(p => p.status === "Available").length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Sold</p>
            <p className="text-2xl font-bold text-red-600">
              {properties.filter(p => p.status === "Sold").length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-500 text-sm">Total Value</p>
            <p className="text-2xl font-bold text-[#CC7F3B]">
              ₹{properties.reduce((sum, p) => sum + parseInt(p.price.replace(/[^0-9]/g, '')), 0).toLocaleString()} Cr
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-r from-[#CC7F3B] to-[#e0964b] flex items-center justify-center">
                <span className="text-6xl">{property.image}</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status}
                  </span>
                </div>
                <p className="text-[#CC7F3B] font-bold text-xl mb-2">{property.price}</p>
                <p className="text-gray-500 text-sm mb-2">📍 {property.location}</p>
                <div className="flex gap-3 text-sm text-gray-600 mb-2">
                  <span>🛏️ {property.bedrooms} Beds</span>
                  <span>🚿 {property.bathrooms} Baths</span>
                  <span>📐 {property.area}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{property.description}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-50 text-red-600 px-3 py-1 rounded-lg text-sm hover:bg-red-100 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Property Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Add New Property</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleAddProperty} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    placeholder="e.g., Luxury 3BHK Apartment"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    >
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (in Cr) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                      placeholder="e.g., 1.2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    placeholder="e.g., Andheri West, Mumbai"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <input
                      type="number"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area *</label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                      placeholder="e.g., 1250 sq ft"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    placeholder="Describe the property..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Icon</label>
                  <select
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                  >
                    <option value="🏢">🏢 Apartment</option>
                    <option value="🏠">🏠 House</option>
                    <option value="🏭">🏭 Commercial</option>
                    <option value="🏘️">🏘️ Villa</option>
                    <option value="🌾">🌾 Land</option>
                    <option value="🏢">🏢 Studio</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors"
                  >
                    Add Property
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

export default MyProperty