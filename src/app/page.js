"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="min-h-screen">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-gradient-to-r from-[#0B2C5F] to-[#0E3A7A] text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 border-l-4 border-[#F2C23B]">
            <div className="w-2 h-2 bg-[#F2C23B] rounded-full animate-pulse"></div>
            <span className="font-medium">{toastMessage}</span>
            <button onClick={() => setShowToast(false)} className="text-white/70 hover:text-white">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Floating Sticky CTA (Non-functional, conversion-focused) */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40 animate-bounce-slow">
        <button
          onClick={() => showNotification("🎉 Join the Program form will open soon!")}
          className="px-6 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-2"
          style={{
            background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)",
            color: "#0B2C5F"
          }}
        >
          <span className="text-xl">🏆</span>
          <span>Join ESB Now</span>
        </button>
      </div>

            {/* HERO SECTION - ESB Theme */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0B2C5F" }}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F2C23B] rounded-full animate-ping"></span>
            <span className="text-white/90 text-sm font-medium">Since 2011 (2005 E.C)</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Ethiopian</span>
            <br />
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent">
              Spelling Bee 🇪🇹
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ethiopia's largest literacy movement — empowering over 600,000 students nationwide. 
            Building confidence, leadership, and academic excellence through the power of language.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => showNotification("🎉 Join the Program form will open soon!")}
              className="group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden shadow-xl"
              style={{
                background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)",
                color: "#0B2C5F"
              }}
            >
              <span className="relative flex items-center gap-2">
                🏆 Register Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <Link href="/about">
              <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 hover:scale-105 hover:shadow-lg"
                style={{ borderColor: "#F2C23B", color: "#F2C23B" }}
              >
                Learn More →
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">600,000+</div>
              <div className="text-white/70 text-sm">Students Nationwide</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">1400+</div>
              <div className="text-white/70 text-sm">Partner Schools</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">13+</div>
              <div className="text-white/70 text-sm">Major Cities</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">7</div>
              <div className="text-white/70 text-sm">National Events</div>
            </div>
          </div>

                    {/* Partner Schools Showcase */}
          <div className="mt-12 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <span className="text-[#F2C23B] text-xl">🏫</span>
                <span className="text-white/80 text-sm font-medium">Pantokrator International Academy</span>
              </div>
              <div className="w-px h-6 bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#F2C23B] text-xl">🏛️</span>
                <span className="text-white/80 text-sm font-medium">Addis Ababa Education Bureau</span>
              </div>
              <div className="w-px h-6 bg-white/20 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#F2C23B] text-xl">🌱</span>
                <span className="text-white/80 text-sm font-medium">FreSeed School of Transformation, Hawassa</span>
              </div>
            </div>
            <p className="text-white/50 text-xs mt-4">Partner Schools Across Ethiopia</p>
          </div>
        </div>
      </section>

      {/* AUTHORITY & CREDIBILITY SECTION - Modern Trust Layout */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              🏛️ Official Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
              Trusted by Ethiopia's <span style={{ color: "#D4A017" }}>Leading Institutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Officially certified and recognized by national and continental education authorities
            </p>
          </div>

          {/* Two-Tier Structure */}
          <div className="space-y-12">
            {/* Featured Certification - Large Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
                  {/* Certificate Image Area */}
                  <div className="flex-1 w-full">
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center border border-gray-200">
                      {/* Certificate Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          ⭐ Official Certification
                        </div>
                      </div>
                      
                      {/* Certificate Image */}
                      <div className="text-center w-full">
                        <div className="max-w-xs mx-auto mb-4">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#F2C23B]/20 to-[#D4A017]/20 rounded-lg blur-sm"></div>
                            <Image
                              src="/images/certificates/aaeb-certificate.jpeg"
                              alt="Addis Ababa Education Bureau Certificate"
                              width={400}
                              height={300}
                              className="relative w-full h-auto object-contain rounded-lg shadow-md"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        </div>
                        <p className="text-gray-700 font-semibold text-lg mt-4">Certificate of Recognition</p>
                        <p className="text-gray-500 text-sm">Addis Ababa Education Bureau</p>
                        <p className="text-xs text-gray-400 mt-1">Official accreditation • 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 rounded-full mb-4 text-xs font-semibold" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                      Certified Partner
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                      Certified by Addis Ababa Education Bureau
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      ESB is officially recognized as a premier educational program, meeting the highest standards of academic excellence and student development.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#D4A017]">✓</span> Government Approved
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#D4A017]">✓</span> National Standard
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#D4A017]">✓</span> Quality Assured
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Institutions - Logos Grid */}
            <div>
              <div className="text-center mb-8">
                <p className="text-gray-500 text-sm uppercase tracking-wide">Supported & Recognized By</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Ministry of Education Logo */}
                <div className="group cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-2 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#F2C23B]/30 flex items-center justify-center min-h-[140px]">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 relative">
                        <Image
                          src="/images/logos/moe-logo.jpg"
                          alt="African Spelling Bee Federation"
                          width={96}
                          height={96}
                          className="object-contain transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                          e.target.style.display = 'none';
                          const container = e.target.closest('.relative');
                          if (container) {
                            const fallback = document.createElement('div');
                            fallback.className = 'text-4xl text-center';
                            fallback.textContent = '🌍';
                            container.appendChild(fallback);
                          }
                        }}
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800">Ministry of Education</h3>
                      <p className="text-xs text-gray-500 mt-1">Federal Democratic Republic of Ethiopia</p>
                    </div>
                  </div>
                </div>

                {/* Dire Dawa Administrative Bureau */}
                <div className="group cursor-pointer">
                  <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#F2C23B]/30 flex items-center justify-center min-h-[140px]">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 relative">
                        <Image
                          src="/images/logos/dire-dawa-education-logo.png"
                          alt="African Spelling Bee Federation"
                          width={96}
                          height={96}
                          className="object-contain transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                          e.target.style.display = 'none';
                          const container = e.target.closest('.relative');
                          if (container) {
                            const fallback = document.createElement('div');
                            fallback.className = 'text-4xl text-center';
                            fallback.textContent = '🌍';
                            container.appendChild(fallback);
                          }
                        }}
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800">Dire Dawa Administrative Bureau</h3>
                      <p className="text-xs text-gray-500 mt-1">Federal Democratic Republic of Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* ACHIEVEMENT CERTIFICATES SECTION */}
      <section className="py-16" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              🏆 Our Achievements
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
              Recognized for <span style={{ color: "#D4A017" }}>Excellence</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prestigious certifications and awards that validate our commitment to quality education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Certificate 1 */}
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full h-48 mb-4 flex-shrink-0">
                  <Image
                    src="/images/certificates/4th-ddea-award.jpeg"
                    alt="4th Annual DDEA Humanitarian Award"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0B2C5F" }}>4th Annual DDEA Humanitarian Award USA</h3>
                  <p className="text-gray-600 text-sm mb-2">Certificate of Recognition</p>
                  <div className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                    Official Partner
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full h-48 mb-4 flex-shrink-0">
                  <Image
                    src="/images/certificates/ddea-award.jpeg"
                    alt="DDEA Humanitarian Award"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0B2C5F" }}>DDEA Humanitarian Award USA</h3>
                  <p className="text-gray-600 text-sm mb-2">Certificate of Recognition</p>
                  <div className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                    International Recognition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED SECTION - Enhanced Conversion Focus */}
      <section className="py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-4 animate-pulse" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              🤝 Limited Opportunities Available
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
              Get <span style={{ color: "#D4A017" }}>Involved Today</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join Ethiopia's literacy revolution — spots are filling fast for the 2025 season
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Register a School */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-3 py-1 rounded-bl-lg">
                Limited Spots
              </div>
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#F2C23B20] to-[#D4A01720] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#0B2C5F" }}>Register a School</h3>
              <p className="text-gray-600 mb-4">
                Bring ESB to your institution. Give your students the opportunity to compete nationally.
              </p>
              <div className="text-left mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> Nationwide recognition
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> Teacher training included
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> 10+ years of proven impact
                </div>
              </div>
              <button 
                onClick={() => showNotification("📋 School registration form will open soon!")}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full relative overflow-hidden group/btn"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                <span className="relative z-10">Register School →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Join as a Student */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-3 py-1 rounded-bl-lg">
                Now Open
              </div>
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#F2C23B20] to-[#D4A01720] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#0B2C5F" }}>Join as a Student</h3>
              <p className="text-gray-600 mb-4">
                Become part of Ethiopia's largest spelling community. Compete, learn, and shine.
              </p>
              <div className="text-left mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> Build lifelong confidence
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> Win scholarships & prizes
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> National stage experience
                </div>
              </div>
              <button 
                onClick={() => showNotification("📝 Student registration form will open soon!")}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full relative overflow-hidden group/btn"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                <span className="relative z-10">Join Now →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Become a Sponsor */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-3 py-1 rounded-bl-lg">
                Partner Benefits
              </div>
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#F2C23B20] to-[#D4A01720] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#0B2C5F" }}>Become a Sponsor</h3>
              <p className="text-gray-600 mb-4">
                Partner with ESB to empower the next generation of Ethiopian leaders.
              </p>
              <div className="text-left mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> 600k+ student reach
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> Premium brand visibility
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A017]">✓</span> CSR recognition
                </div>
              </div>
              <button 
                onClick={() => showNotification("💼 Sponsorship information will be shared soon!")}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full relative overflow-hidden group/btn"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                <span className="relative z-10">Partner With Us →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION - New for Trust */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              💬 Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0B2C5F" }}>
              What <span style={{ color: "#D4A017" }}>Participants Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#F2C23B] text-4xl mb-3">"</div>
              <p className="text-gray-700 mb-4 italic">ESB transformed my daughter's confidence. She's now a different child - more articulate, confident, and ambitious.</p>
              <div className="font-bold text-[#0B2C5F]">- Parent of 8th Grade Champion</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#F2C23B] text-4xl mb-3">"</div>
              <p className="text-gray-700 mb-4 italic">Our school has seen remarkable improvement in English performance since joining ESB. Highly recommended!</p>
              <div className="font-bold text-[#0B2C5F]">- School Principal, Addis Ababa</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#F2C23B] text-4xl mb-3">"</div>
              <p className="text-gray-700 mb-4 italic">The most well-organized academic competition in Ethiopia. Professional, fair, and truly developmental.</p>
              <div className="font-bold text-[#0B2C5F]">- Ministry of Education Official</div>
            </div>
          </div>
        </div>
      </section>

      {/* NATIONAL & CONTINENTAL VISION SECTION - Compressed slightly */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#F2C23B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D4A017] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full mb-6" style={{ backgroundColor: "#F2C23B20", color: "#F2C23B" }}>
            🌍 From Ethiopia to Africa
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Building Africa's <span style={{ color: "#F2C23B" }}>Largest Literacy Movement</span>
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Starting in Ethiopia, we're creating a blueprint for spelling excellence across the continent.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="border border-white/20 rounded-xl p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-2">🇪🇹</div>
              <h3 className="text-lg font-bold text-white mb-1">National Impact</h3>
              <p className="text-white/70 text-xs">Reaching every region of Ethiopia</p>
            </div>
            <div className="border border-white/20 rounded-xl p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="text-lg font-bold text-white mb-1">Continental Vision</h3>
              <p className="text-white/70 text-xs">Expanding across Africa</p>
            </div>
            <div className="border border-white/20 rounded-xl p-5 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="text-lg font-bold text-white mb-1">Global Recognition</h3>
              <p className="text-white/70 text-xs">Preparing international champions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW - Enhanced */}
      <section className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                ⚡ About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0B2C5F" }}>
                What is <span style={{ color: "#D4A017" }}>ESB?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ethiopian Spelling Bee is a premier platform designed to help students
                improve their English spelling skills, vocabulary, and public speaking 
                confidence while fostering academic excellence and healthy competition.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-[#F2C23B] flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">✓</div>
                  <span>Build confidence & communication skills</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-[#F2C23B] flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">✓</div>
                  <span>Enhance vocabulary & language mastery</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-[#F2C23B] flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">✓</div>
                  <span>Win scholarships & recognition</span>
                </div>
              </div>
              <Link href="/about">
                <button className="group flex items-center gap-2 font-semibold transition-all hover:gap-3" style={{ color: "#0B2C5F" }}>
                  Learn More About ESB
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-2xl opacity-20 blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join the Journey</h3>
                  <p className="text-white/80">Become part of Ethiopia's most exciting spelling competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SPONSOR PARTNERSHIP SECTION */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#0B2C5F] to-[#0E3A7A] rounded-3xl p-10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="text-center">
              <div className="inline-block px-4 py-1 rounded-full mb-5" style={{ backgroundColor: "#F2C23B20", color: "#F2C23B" }}>
                💼 Corporate Partnership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                Partner With <span style={{ color: "#F2C23B" }}>ESB</span>
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Join Ethiopia's most impactful educational initiative. Support the next generation of leaders.
              </p>
              <div className="grid md:grid-cols-3 gap-5 mb-7">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-1">📊</div>
                  <h3 className="font-bold text-white text-sm">Brand Visibility</h3>
                  <p className="text-white/70 text-xs">Reach 600,000+ nationwide</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-1">🤝</div>
                  <h3 className="font-bold text-white text-sm">Community Impact</h3>
                  <p className="text-white/70 text-xs">Direct educational contribution</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-1">🏅</div>
                  <h3 className="font-bold text-white text-sm">CSR Excellence</h3>
                  <p className="text-white/70 text-xs">Nationally recognized program</p>
                </div>
              </div>
              <button 
                onClick={() => showNotification("📧 Partnership opportunities will be shared soon!")}
                className="px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#F2C23B", color: "#0B2C5F" }}
              >
                Become a Partner →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM PREVIEW - Compressed slightly */}
      <section className="py-16" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              👥 Our Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0B2C5F" }}>
              Meet Our <span style={{ color: "#D4A017" }}>Leadership</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
              Driven by purpose, committed to excellence — the team behind Ethiopia's literacy revolution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Abiye Tekle */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/leadership/Abiye_Tekle.jpeg" 
                  alt="Abiye Tekle - Founder & CEO"
                  className="relative w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/144x144?text=Abiye+Tekle";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Abiye Tekle</h3>
              <p className="text-[#D4A017] font-semibold text-sm mb-3">Founder & Managing Director (CEO)</p>
              <p className="text-gray-600 text-sm mb-4">
                Visionary leader building Ethiopia's largest student literacy platform and expanding its impact across Africa.
              </p>
              <Link href="/leadership">
                <button className="text-sm font-semibold transition-all hover:gap-2 flex items-center justify-center gap-1 mx-auto hover:text-[#D4A017]" style={{ color: "#0B2C5F" }}>
                  Learn More 
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Tefera Tibebu */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/leadership/Tefera_Tibebu.jpeg" 
                  alt="Tefera Tibebu - Deputy Managing Director"
                  className="relative w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/144x144?text=Tefera+Tibebu";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Tefera Tibebu</h3>
              <p className="text-[#D4A017] font-semibold text-sm mb-3">Deputy Managing Director</p>
              <p className="text-gray-600 text-sm mb-4">
                Leads operations, school partnerships, and program execution across multiple cities in Ethiopia.
              </p>
              <Link href="/leadership">
                <button className="text-sm font-semibold transition-all hover:gap-2 flex items-center justify-center gap-1 mx-auto hover:text-[#D4A017]" style={{ color: "#0B2C5F" }}>
                  Learn More 
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Iyasu Taye */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/leadership/Iyasu_Taye.jpeg" 
                  alt="Iyasu Taye - Director of National Coordination"
                  className="relative w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/144x144?text=Iyasu+Taye";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Iyasu Taye</h3>
              <p className="text-[#D4A017] font-semibold text-sm mb-3">Director of National Coordination</p>
              <p className="text-gray-600 text-sm mb-4">
                Oversees national coordination, program alignment, and institutional partnerships across Ethiopia.
              </p>
              <Link href="/leadership">
                <button className="text-sm font-semibold transition-all hover:gap-2 flex items-center justify-center gap-1 mx-auto hover:text-[#D4A017]" style={{ color: "#0B2C5F" }}>
                  Learn More 
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/leadership">
              <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                Meet Our Full Team
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TOP CHAMPIONS SECTION - Featured Champions */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              👑 Champions Spotlight
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0B2C5F" }}>
              Our <span style={{ color: "#D4A017" }}>National Champions</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
              Celebrating excellence and dedication — Ethiopia's brightest spelling stars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Champion 1 - Senior */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <Image 
                        src="/images/comp-5.jpeg" 
                        alt="Hemon Afework - Senior National Champion"
                        fill
                        className="object-cover rounded-full border-4 border-[#F2C23B] shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Crown Badge */}
                  <div className="absolute top-4 right-4 bg-[#F2C23B] text-[#0B2C5F] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">👑</span>
                  </div>
                  {/* Gold Ribbon */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/80 to-transparent p-6">
                    <div className="text-center">
                      <div className="inline-block bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-3 py-1 rounded-full mb-2">
                        Senior Category Champion
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">Hemon Afework</h3>
                      <p className="text-[#F2C23B] text-sm font-semibold">ESB National Champion 2024</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#D4A017]">1st</div>
                      <div className="text-xs text-gray-500">National Rank</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#D4A017]">🏆</div>
                      <div className="text-xs text-gray-500">Gold Medal</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#D4A017]">📚</div>
                      <div className="text-xs text-gray-500">Senior Division</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Champion 2 - Junior */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <Image 
                        src="/images/comp-6.jpeg" 
                        alt="Kal Tesfaye - Junior National Champion"
                        fill
                        className="object-cover rounded-full border-4 border-[#F2C23B] shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Crown Badge */}
                  <div className="absolute top-4 right-4 bg-[#F2C23B] text-[#0B2C5F] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">👑</span>
                  </div>
                  {/* Gold Ribbon */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/80 to-transparent p-6">
                    <div className="text-center">
                      <div className="inline-block bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-3 py-1 rounded-full mb-2">
                        Junior Category Champion
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">Kal Tesfaye</h3>
                      <p className="text-[#F2C23B] text-sm font-semibold">ESB National Champion 2024</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#D4A017]">1st</div>
                      <div className="text-xs text-gray-500">National Rank</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#D4A017]">🏆</div>
                      <div className="text-xs text-gray-500">Gold Medal</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#D4A017]">⭐</div>
                      <div className="text-xs text-gray-500">Junior Division</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* GALLERY PREVIEW - Enhanced Storytelling */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-10">
      <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
        📸 Best Moments
      </div>
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0B2C5F" }}>
        Competition <span style={{ color: "#D4A017" }}>Highlights</span>
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">Our top moments from ESB competitions</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
      {/* Photo 1 */}
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gray-100">
        <div className="relative w-full pt-[75%]">
          <Image 
            src="/images/comp-1.jpeg" 
            alt="ESB Competition 1"
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-semibold text-base">🏆 EFTAH HABTAMU</p>
          <p className="text-xs text-[#F2C23B]">7th Grader • Pantokrator International School</p>
        </div>
      </div>

      {/* Photo 2 */}
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gray-100">
        <div className="relative w-full pt-[75%]">
          <Image 
            src="/images/comp-2.jpeg" 
            alt="ESB Competition 2"
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-semibold text-base">🏆 LEALEM WASHUN</p>
          <p className="text-xs text-[#F2C23B]">8th Grader • Private School</p>
        </div>
      </div>

      {/* Photo 3 */}
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gray-100">
        <div className="relative w-full pt-[75%]">
          <Image 
            src="/images/comp-3.jpeg" 
            alt="ESB Competition 3"
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-semibold text-base">🏆 BENIYAS TAGEL</p>
          <p className="text-xs text-[#F2C23B]">Grade 2 • Betelhem Youth Academy</p>
        </div>
      </div>

      {/* Photo 4 */}
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gray-100">
        <div className="relative w-full pt-[75%]">
          <Image 
            src="/images/comp-4.jpeg" 
            alt="ESB Competition 4"
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-semibold text-base">🏆 KANA HAILEEYESSUS</p>
          <p className="text-xs text-[#F2C23B]">Grade 4 • RISPINS International School</p>
        </div>
      </div>
    </div>

    <div className="text-center mt-10">
      <Link href="/gallery">
        <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto"
          style={{ backgroundColor: "#0B2C5F", color: "white" }}
        >
          View Full Gallery
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* CTA SECTION - ESB Gold Theme with Register Now Button */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-pulse">
            <span className="text-[#0B2C5F] font-semibold">🚀 Limited Opportunities Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Ready to Join ESB?
          </h2>

          <p className="text-xl mb-8 text-[#0B2C5F]/80 max-w-2xl mx-auto">
            Be part of a growing community of young learners and future leaders.
            Contact us to learn how you can get involved!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => showNotification("📝 Registration form will open soon!")}
              className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              style={{ backgroundColor: "#0B2C5F", color: "#F2C23B" }}
            >
              Register Now
            </button>
            
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 hover:shadow-xl"
                style={{ borderColor: "#0B2C5F", color: "#0B2C5F", backgroundColor: "white" }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
