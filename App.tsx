import React from 'react';
import { ArrowRight, Store, Package, Users, TrendingUp, MessageCircle, CheckCircle, Briefcase, Star, Zap, Award, BarChart3 } from 'lucide-react';

function App() {
  const [hoveredPlan, setHoveredPlan] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/Untitled-1-01.jpg.jpeg" alt="Splendi.Media" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Pricing</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">How It Works</a>
              <a href="#why-us" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Why Us</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <p className="text-teal-600 font-semibold text-lg mb-4 flex items-center gap-2">
                  <Zap size={20} />
                  Elevate Your Retail Game
                </p>
                <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
                  Transform Your
                  <span className="block bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Retail Empire
                  </span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light max-w-xl">
                  Elevate your store's presence both online and offline. We manage everything from social campaigns to marketplace setup to bookkeeping.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing" className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  View Plans
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a href="#services" className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 font-bold">
                  Explore Services
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-black text-teal-600">500+</p>
                  <p className="text-gray-600 text-sm font-medium">Stores Grown</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-blue-600">300%</p>
                  <p className="text-gray-600 text-sm font-medium">Avg Growth</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-amber-600">24/7</p>
                  <p className="text-gray-600 text-sm font-medium">Support Ready</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -z-10"></div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-teal-500/20 to-teal-100 group-hover:from-teal-500/40 group-hover:to-teal-200 p-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                      <TrendingUp className="text-teal-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
                      <h3 className="font-bold text-gray-900 text-lg">Growth</h3>
                      <p className="text-gray-600 text-sm mt-2">Accelerate sales</p>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-100 group-hover:from-blue-500/40 group-hover:to-blue-200 p-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                      <MessageCircle className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
                      <h3 className="font-bold text-gray-900 text-lg">Marketing</h3>
                      <p className="text-gray-600 text-sm mt-2">Reach customers</p>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-100 group-hover:from-amber-500/40 group-hover:to-amber-200 p-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                      <Package className="text-amber-700 mb-3 group-hover:scale-110 transition-transform" size={32} />
                      <h3 className="font-bold text-gray-900 text-lg">Setup</h3>
                      <p className="text-gray-600 text-sm mt-2">Get online fast</p>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-green-500/20 to-green-100 group-hover:from-green-500/40 group-hover:to-green-200 p-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
                      <Briefcase className="text-green-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
                      <h3 className="font-bold text-gray-900 text-lg">Management</h3>
                      <p className="text-gray-600 text-sm mt-2">End-to-end care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-semibold text-sm mb-4">THREE POWERFUL SERVICES</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Comprehensive solutions tailored to transform your retail business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                  <Store className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Online Presence & Foot Fall
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  Boost your retail store's visibility both online and offline. We run targeted social media campaigns that drive engagement and increase local customer foot traffic.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Social media marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Local SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Store foot traffic growth</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                  <Package className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Marketplace Setup
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  Get your business online with professional setup of all essential marketplace and e-commerce accounts. Start selling immediately.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Google Merchant Center</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Shopify store configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Shipping management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-500 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:blur-2xl transition-all"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Virtual Manager
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  Complete end-to-end account handling from marketing to bookkeeping. Your dedicated virtual manager handling everything.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Marketing management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Bookkeeping & finances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">Daily operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-4">TRANSPARENT PRICING</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Plans That Grow With You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Choose the perfect plan for your retail business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div
              onMouseEnter={() => setHoveredPlan('starter')}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-2xl transition-all duration-500 ${hoveredPlan === 'starter' ? 'ring-2 ring-teal-500' : 'border border-gray-200'} bg-white overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-500/10 transition-opacity ${hoveredPlan === 'starter' ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 text-sm mb-6">Perfect for new retailers</p>

                <div className="mb-8">
                  <span className="text-5xl font-black text-teal-600">$999</span>
                  <span className="text-gray-600 ml-2">/month</span>
                  <p className="text-gray-600 text-sm mt-2">Billed monthly</p>
                </div>

                <a href="mailto:contact@splendi.media" className="w-full inline-flex items-center justify-center bg-teal-50 text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 font-bold mb-8">
                  Get Started
                </a>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-sm">INCLUDES:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Social media setup & management (2 platforms)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Google Merchant Center setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Email support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Monthly performance reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Plan (Highlighted) */}
            <div
              onMouseEnter={() => setHoveredPlan('professional')}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-2xl transition-all duration-500 transform ${hoveredPlan === 'professional' ? 'scale-105 ring-2 ring-blue-500 shadow-2xl' : 'ring-2 ring-blue-500 shadow-xl'} bg-gradient-to-br from-blue-50 to-cyan-50`}
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm flex items-center gap-2">
                <Star size={16} />
                POPULAR
              </div>
              <div className="p-8 pt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 text-sm mb-6">Ideal for growth-focused stores</p>

                <div className="mb-8">
                  <span className="text-5xl font-black text-blue-600">$2,499</span>
                  <span className="text-gray-600 ml-2">/month</span>
                  <p className="text-gray-600 text-sm mt-2">Billed monthly</p>
                </div>

                <a href="mailto:contact@splendi.media" className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold mb-8 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </a>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-sm">INCLUDES EVERYTHING IN STARTER, PLUS:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Complete marketplace setup (Shopify, Amazon, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">All 5 social media platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Shipping account setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Weekly strategy calls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">SEO & local listing optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div
              onMouseEnter={() => setHoveredPlan('enterprise')}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-2xl transition-all duration-500 ${hoveredPlan === 'enterprise' ? 'ring-2 ring-amber-500' : 'border border-gray-200'} bg-white overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-500/10 transition-opacity ${hoveredPlan === 'enterprise' ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm mb-6">Complete virtual manager service</p>

                <div className="mb-8">
                  <span className="text-5xl font-black text-amber-600">$5,999</span>
                  <span className="text-gray-600 ml-2">/month</span>
                  <p className="text-gray-600 text-sm mt-2">Billed monthly</p>
                </div>

                <a href="mailto:contact@splendi.media" className="w-full inline-flex items-center justify-center bg-amber-50 text-amber-600 border-2 border-amber-600 px-6 py-3 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 font-bold mb-8">
                  Schedule Call
                </a>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-sm">EVERYTHING IN PROFESSIONAL, PLUS:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Full bookkeeping & accounting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">24/7 priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Custom strategy & growth planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">Monthly ROI analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-600 mb-8">All plans include:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <Award className="text-teal-600" size={28} />
                <p className="text-sm font-semibold text-gray-700">Quality Assurance</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="text-blue-600" size={28} />
                <p className="text-sm font-semibold text-gray-700">Fast Setup</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BarChart3 className="text-amber-600" size={28} />
                <p className="text-sm font-semibold text-gray-700">Analytics</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MessageCircle className="text-green-600" size={28} />
                <p className="text-sm font-semibold text-gray-700">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm mb-4">OUR PROCESS</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              From Consultation to Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              A transparent, results-driven process designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative text-center">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black shadow-lg hover:shadow-xl transition-all hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consult</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We discuss your business goals, current challenges, and growth objectives
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
            </div>

            <div className="relative text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black shadow-lg hover:shadow-xl transition-all hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategize</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom strategy tailored to your specific business needs and market
              </p>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-amber-500"></div>
            </div>

            <div className="relative text-center">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black shadow-lg hover:shadow-xl transition-all hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execute</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We implement and manage everything with precision and expertise
              </p>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-1 bg-gradient-to-r from-amber-600 to-green-500"></div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-black shadow-lg hover:shadow-xl transition-all hover:scale-110">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thrive</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Watch your business accelerate and scale beyond expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-semibold text-sm mb-4">WHY SPLENDI.MEDIA</span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Built for Your Success
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                We bring clarity, creativity, and growth to every partnership. Our expertise transforms retail businesses into thriving online success stories.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-3 flex-shrink-0">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Proven Results</h3>
                    <p className="text-gray-600 text-sm">Track record of increasing both online sales and store foot traffic for 500+ retailers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">End-to-End Service</h3>
                    <p className="text-gray-600 text-sm">From setup to daily management, we handle everything so you can focus on your customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-3 flex-shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Dedicated Support</h3>
                    <p className="text-gray-600 text-sm">Personal attention and responsive communication available 24/7 for our premium plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 via-blue-600 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-10 flex items-center gap-2">
                    <Star className="w-8 h-8" />
                    Our Core Values
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                      <h4 className="text-2xl font-bold mb-2">Clarity</h4>
                      <p className="text-white/90 text-sm leading-relaxed">Clear communication and transparent processes in everything we do</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                      <h4 className="text-2xl font-bold mb-2">Creativity</h4>
                      <p className="text-white/90 text-sm leading-relaxed">Innovative strategies that make your brand stand out in the market</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                      <h4 className="text-2xl font-bold mb-2">Growth</h4>
                      <p className="text-white/90 text-sm leading-relaxed">Measurable results that drive your business forward consistently</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-500 via-blue-600 to-cyan-600 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join 500+ retail stores already growing with Splendi.Media. Let's discuss how we can help you grow your online presence, set up your marketplaces, and manage your business end-to-end.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@splendi.media" className="inline-flex items-center justify-center bg-white text-teal-600 px-10 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold group text-lg">
                  Get in Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                </a>
                <a href="tel:+1234567890" className="inline-flex items-center justify-center border-3 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 font-bold hover:scale-105 text-lg">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800">
            <div className="md:col-span-2">
              <img src="/Untitled-1-01.jpg.jpeg" alt="Splendi.Media" className="h-12 mb-6 brightness-0 invert" />
              <p className="text-teal-400 font-semibold mb-3 text-lg">
                Clarity | Creativity | Growth
              </p>
              <p className="text-gray-400 leading-relaxed">
                Empowering retail businesses with comprehensive digital solutions that drive real, measurable growth.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-teal-400 transition-colors font-medium">Services</a></li>
                <li><a href="#pricing" className="hover:text-teal-400 transition-colors font-medium">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-teal-400 transition-colors font-medium">How It Works</a></li>
                <li><a href="#why-us" className="hover:text-teal-400 transition-colors font-medium">Why Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="font-medium">contact@splendi.media</li>
                <li className="font-medium">+1 (234) 567-890</li>
                <li>
                  <a href="#contact" className="text-teal-400 hover:text-teal-300 transition-colors font-medium">Schedule a Call</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Splendi.Media. All rights reserved. | Clarity | Creativity | Growth</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
