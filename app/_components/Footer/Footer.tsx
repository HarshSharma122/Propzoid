"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Mail, 
  Phone, 
  MapPin, 
  
  Send,
  ArrowRight,
  Heart,
  Shield,
  HelpCircle,
  FileText,
  Star
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">
                <span className="text-[#CC7F3B]">Prop</span>Zoid
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                Transform your property listings into lead-generating machines. 
                We help property owners get more qualified leads without the expensive ad costs.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CC7F3B] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                Dehardun <br />
                  uttrakhand, 248007
                </span>
              </div>



              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CC7F3B] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 9520611838</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CC7F3B] flex-shrink-0" />
                <span className="text-gray-400 text-sm">harsh444577@gmail.com</span>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "How It Works", href: "#steps" },
                { name: "Pricing", href: "#pricing" },
                { name: "Contact", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#CC7F3B] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} PropZoid. All rights reserved.
              <span className="mx-2">•</span>
              <span className="flex items-center gap-1 inline-flex">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for property owners
              </span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#CC7F3B] text-sm transition-colors flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CC7F3B] text-sm transition-colors flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CC7F3B] text-sm transition-colors flex items-center gap-1">
                <HelpCircle className="w-4 h-4" />
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;