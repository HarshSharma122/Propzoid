"use client"

import React, { useState, ChangeEvent, FormEvent, JSX } from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  Gift, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  MessageCircle,
  Send,
  Zap,
  Shield,
  TrendingUp,
  Loader2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

// Type Definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ToastState {
  show: boolean;
  type: 'success' | 'error' | '';
  message: string;
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Pricing: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<ToastState>({ show: false, type: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    return newErrors;
  };

  const showToast = (type: 'success' | 'error', message: string): void => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('error', 'Please fix the errors in the form');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        showToast('success', 'You\'re on the list! We\'ll reach out to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Auto hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit. Please try again.';
      showToast('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const benefits: Benefit[] = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Early Access",
      description: "Be first in line when we launch"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Founder's Benefits",
      description: "Special pricing locked in forever"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Priority Support",
      description: "VIP treatment from day one"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Shape the Product",
      description: "Your feedback guides our development"
    }
  ];

  const spotsLeft: number = 100;

  return (
    <div id='pricing' className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-20 right-4 z-50 animate-slideIn">
          <div className={`
            flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg
            ${toast.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}
          `}>
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
            <span className={`text-sm font-medium ${toast.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
              {toast.message}
            </span>
            <button 
              onClick={() => setToast({ show: false, type: '', message: '' })}
              className="ml-4 text-gray-400 hover:text-gray-600"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full mb-6 border border-yellow-200">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">Early Stage • Limited Seats</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            We&apos;re Just <span className="text-[#CC7F3B]">Getting Started</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No pricing yet - we&apos;re focused on building the best platform for property owners. 
            Book your seat now and be part of our founding members.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Info */}
          <div className="space-y-8">
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-[#CC7F3B] mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial/Quote */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <MessageCircle className="w-8 h-8 text-[#CC7F3B] mb-3 opacity-50" />
              <p className="text-gray-700 italic mb-4">
                &quot;We believe in delivering value first. That&apos;s why we&apos;re not setting prices until we&apos;re confident 
                we can exceed your expectations. Join us early and help shape something amazing.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#CC7F3B] rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-900">PropZoid Team</p>
                  <p className="text-sm text-gray-500">Building for property owners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Book Your Founder&apos;s Seat
                  </h2>
                  <p className="text-gray-600">
                    No payment required. We&apos;ll reach out when we&apos;re ready to start.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="+1 (555) 000-0000"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CC7F3B] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your property needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#CC7F3B] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#A05F2A] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={loading ? "Submitting form" : "Secure your spot"}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span>Secure Your Spot</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    No credit card required. We&apos;ll contact you before we start working on your property.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  You&apos;re on the List! 🎉
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for joining as a founding member. We&apos;ll reach out to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#CC7F3B] font-medium hover:underline"
                >
                  Book another seat
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Happens Next?
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900">Book Your Seat</p>
                <p className="text-sm text-gray-500">Fill the form above</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900">We&apos;ll Reach Out</p>
                <p className="text-sm text-gray-500">Personal consultation</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900">Start Working</p>
                <p className="text-sm text-gray-500">We handle everything</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#CC7F3B] text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <p className="font-semibold text-gray-900">Get Results</p>
                <p className="text-sm text-gray-500">Watch leads come in</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have questions? {" "}
            <Link href="/contact" className="text-[#CC7F3B] font-medium hover:underline inline-flex items-center gap-1">
              Chat with us <Send className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Pricing;