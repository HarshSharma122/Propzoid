"use client"
import React, { useState } from 'react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  
  // Profile Settings State
  const [profileData, setProfileData] = useState({
    fullName: "Harsh Sharma",
    email: "harsh.sharma@example.com",
    phone: "+91 98765 43210",
    companyName: "Sharma Real Estate",
    gstNumber: "27AAAAA1234A1Z",
    address: "Andheri West, Mumbai - 400053",
    bio: "Experienced real estate professional with 8+ years in property management and sales.",
    profileImage: "HS"
  })

  // Security Settings State
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
    emailNotifications: true,
    loginAlerts: true
  })

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    newLeadNotifications: true,
    propertyInquiries: true,
    campaignUpdates: true,
    weeklyReports: true,
    marketingEmails: false,
    smsAlerts: true
  })

  // Business Settings State
  const [businessSettings, setBusinessSettings] = useState({
    currency: "INR",
    timezone: "IST (UTC+5:30)",
    dateFormat: "DD/MM/YYYY",
    commissionRate: "2.5",
    defaultLeadStatus: "New",
    autoAssignLeads: false
  })

  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleProfileUpdate = (e:any) => {
    e.preventDefault()
    setIsEditing(false)
    setSuccessMessage("Profile updated successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  const handlePasswordChange = (e:any) => {
    e.preventDefault()
    if (securityData.newPassword !== securityData.confirmPassword) {
      setPasswordError("New passwords do not match")
      return
    }
    if (securityData.newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters")
      return
    }
    setPasswordError("")
    setShowPasswordModal(false)
    setSecurityData({
      ...securityData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    })
    setSuccessMessage("Password changed successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  // const handleNotificationToggle = (setting) => {
  //   setNotificationSettings({
  //     ...notificationSettings,
  //     [setting]: !notificationSettings[setting]
  //   })
  //   setSuccessMessage("Notification settings updated!")
  //   setTimeout(() => setSuccessMessage(""), 3000)
  // }

  const handleBusinessSettingChange = (key:any, value:any) => {
    setBusinessSettings({
      ...businessSettings,
      [key]: value
    })
    setSuccessMessage("Business settings updated!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "business", label: "Business", icon: "🏢" },
    { id: "billing", label: "Billing", icon: "💳" }
  ]

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and settings</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200">
            {successMessage}
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-[#CC7F3B] border-b-2 border-[#CC7F3B]"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-[#CC7F3B] hover:text-[#b06d2e] text-sm font-medium"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                >
                  Cancel
                </button>
              )}
            </div>

            <form onSubmit={handleProfileUpdate}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#CC7F3B] to-[#e0964b] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {profileData.profileImage}
                </div>
                {isEditing && (
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
                  >
                    Change Photo
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.companyName}
                      onChange={(e) => setProfileData({...profileData, companyName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.companyName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.gstNumber}
                      onChange={(e) => setProfileData({...profileData, gstNumber: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.gstNumber}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.address}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  ) : (
                    <p className="text-gray-800">{profileData.bio}</p>
                  )}
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex gap-3">
                  <button
                    type="submit"
                    className="bg-[#CC7F3B] text-white px-6 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === "security" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Password</h2>
              <button
                onClick={() => setShowPasswordModal(true)}
                className="bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e] transition-colors"
              >
                Change Password
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Two-Factor Authentication</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800">Enable 2FA for additional security</p>
                  <p className="text-sm text-gray-500">Get a verification code on your phone</p>
                </div>
                <button
                  onClick={() => setSecurityData({...securityData, twoFactorAuth: !securityData.twoFactorAuth})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    securityData.twoFactorAuth ? "bg-[#CC7F3B]" : "bg-gray-300"
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securityData.twoFactorAuth ? "translate-x-6" : "translate-x-1"
                  }`} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Security Alerts</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-800">Email notifications for new logins</p>
                    <p className="text-sm text-gray-500">Get alerted when someone logs into your account</p>
                  </div>
                  <button
                    onClick={() => setSecurityData({...securityData, loginAlerts: !securityData.loginAlerts})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      securityData.loginAlerts ? "bg-[#CC7F3B]" : "bg-gray-300"
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      securityData.loginAlerts ? "translate-x-6" : "translate-x-1"
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === "notifications" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              {Object.entries(notificationSettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div>
                    <p className="text-gray-800 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm text-gray-500">
                      {key === "newLeadNotifications" && "Get notified when new leads are added"}
                      {key === "propertyInquiries" && "Receive alerts for property inquiries"}
                      {key === "campaignUpdates" && "Updates about your ad campaigns"}
                      {key === "weeklyReports" && "Weekly performance summary reports"}
                      {key === "marketingEmails" && "Promotional emails and offers"}
                      {key === "smsAlerts" && "SMS notifications for important updates"}
                    </p>
                  </div>
                  <button
                  
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? "bg-[#CC7F3B]" : "bg-gray-300"
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Business Settings */}
        {activeTab === "business" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Business Preferences</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                <select
                  value={businessSettings.currency}
                  onChange={(e) => handleBusinessSettingChange("currency", e.target.value)}
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                <select
                  value={businessSettings.timezone}
                  onChange={(e) => handleBusinessSettingChange("timezone", e.target.value)}
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                >
                  <option value="IST (UTC+5:30)">IST (UTC+5:30)</option>
                  <option value="EST (UTC-5:00)">EST (UTC-5:00)</option>
                  <option value="PST (UTC-8:00)">PST (UTC-8:00)</option>
                  <option value="GMT (UTC+0:00)">GMT (UTC+0:00)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                <select
                  value={businessSettings.dateFormat}
                  onChange={(e) => handleBusinessSettingChange("dateFormat", e.target.value)}
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={businessSettings.commissionRate}
                  onChange={(e) => handleBusinessSettingChange("commissionRate", e.target.value)}
                  className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-gray-800">Auto-assign Leads</p>
                  <p className="text-sm text-gray-500">Automatically assign leads to available agents</p>
                </div>
                <button
                  onClick={() => handleBusinessSettingChange("autoAssignLeads", !businessSettings.autoAssignLeads)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    businessSettings.autoAssignLeads ? "bg-[#CC7F3B]" : "bg-gray-300"
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    businessSettings.autoAssignLeads ? "translate-x-6" : "translate-x-1"
                  }`} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Billing Settings */}
        {activeTab === "billing" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Plan</h2>
              <div className="bg-gradient-to-r from-[#CC7F3B] to-[#e0964b] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Professional Plan</h3>
                <p className="mb-4">Unlimited properties, leads, and campaigns</p>
                <p className="text-3xl font-bold">₹2,999<span className="text-lg">/month</span></p>
              </div>
              <button className="mt-4 w-full border-2 border-[#CC7F3B] text-[#CC7F3B] px-4 py-2 rounded-lg hover:bg-[#CC7F3B] hover:text-white transition-colors">
                Upgrade Plan
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Methods</h2>
              <div className="border rounded-lg p-4 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💳</span>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <button className="text-red-600 text-sm">Remove</button>
                </div>
              </div>
              <button className="w-full border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                + Add Payment Method
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Billing History</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">January 2024</p>
                    <p className="text-sm text-gray-500">Professional Plan</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹2,999</p>
                    <button className="text-sm text-[#CC7F3B]">Download Invoice</button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">December 2023</p>
                    <p className="text-sm text-gray-500">Professional Plan</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹2,999</p>
                    <button className="text-sm text-[#CC7F3B]">Download Invoice</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Change Password Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Change Password</h2>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handlePasswordChange} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      required
                      value={securityData.currentPassword}
                      onChange={(e) => setSecurityData({...securityData, currentPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      required
                      value={securityData.newPassword}
                      onChange={(e) => setSecurityData({...securityData, newPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      required
                      value={securityData.confirmPassword}
                      onChange={(e) => setSecurityData({...securityData, confirmPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#CC7F3B] focus:border-[#CC7F3B]"
                    />
                  </div>
                  {passwordError && (
                    <p className="text-red-600 text-sm">{passwordError}</p>
                  )}
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPasswordModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#CC7F3B] text-white px-4 py-2 rounded-lg hover:bg-[#b06d2e]"
                  >
                    Update Password
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

export default Settings