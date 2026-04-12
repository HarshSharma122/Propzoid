import { LogOut } from 'lucide-react'
import React from 'react'

const Aside = () => {
    const userName = "Harsh Sharma"
    
    const navItems = [
        { name: "Overview", icon: "📊" , link:"/dashboard"},
        { name: "My Property", icon: "🏠"  , link:"/dashboard/myProperty"},
        { name: "Leads manager", icon: "📞",  link:"/dashboard/Leads" },
        { name: "Ad Campaigns", icon: "📢",  link:"/dashboard/Campaign" },
        { name: "Settings", icon: "⚙️",  link:"/dashboard/Settings" }
    ]

    return (
        <div className='lg:flex flex-col hidden w-50 mx-3 my-2 rounded-md h-screen bg-[#fdfdfd] border-r shadow-sm fixed left-0 top-0'>
            {/* User Profile Section */}
            <section className='px-4 py-6 border-b'>
                <div className='flex items-center gap-3'>
                    <div className='bg-gradient-to-br from-[#CC7F3B] to-[#e0964b] text-white font-medium border rounded-full w-10 h-10 flex items-center justify-center'>
                        {userName.charAt(0)}{userName.split(' ')[1]?.charAt(0) || userName.charAt(6)}
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-800'>{userName}</h3>
                        <p className='text-xs text-gray-500'>Property Owner</p>
                    </div>
                </div>
            </section>

            {/* Navigation Menu */}
            <div className="flex-1 px-3 py-6">
                <nav className="">
                    {navItems.map((item, index) => (
                        <li key={index} className='list-none'>
                            <a href={item.link} className='flex items-center gap-2 px-3 py-2.5 text-[14px] text-[#3e3b3b] rounded-lg hover:bg-[#f5f5f5] hover:text-[#CC7F3B] transition-colors duration-200 cursor-pointer group'>
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </nav>
            </div>

            {/* Optional Footer Section */}
            <div className="px-4 py-4 border-t">
                <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 cursor-pointer">
                    <span className="text-lg"><LogOut className='w-4 h-4'/></span>
                    <span className="font-medium">Log out</span>
                </div>
            </div>
        </div>
    )
}

export default Aside