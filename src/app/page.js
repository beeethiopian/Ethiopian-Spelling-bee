"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
            <span className="text-white/90 text-sm font-medium">Since 2014</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Ethiopian</span>
            <br />
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent">
              Spelling Bee 🇪🇹
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Empowering students through language, confidence, and academic excellence — 
            where champions are born.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 hover:scale-105"
                style={{ borderColor: "#F2C23B", color: "#F2C23B" }}
              >
                Learn More →
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">600,000+</div>
              <div className="text-white/70 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">25+</div>
              <div className="text-white/70 text-sm">Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">13+</div>
              <div className="text-white/70 text-sm">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#F2C23B]">3</div>
              <div className="text-white/70 text-sm">National Events</div>
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
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F2C23B] flex items-center justify-center">✓</div>
                  <span>Build confidence & communication skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F2C23B] flex items-center justify-center">✓</div>
                  <span>Enhance vocabulary & language mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F2C23B] flex items-center justify-center">✓</div>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A] rounded-2xl p-8 shadow-2xl">
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
      
      {/* LEADERSHIP TEAM PREVIEW */}
      <section className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              👥 Our Leaders
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0B2C5F" }}>
              Meet Our <span style={{ color: "#D4A017" }}>Leadership</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Driven by purpose, committed to excellence — the team behind Ethiopia's literacy revolution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Abiye Tekle */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/leadership/abiye_tekle.jpeg" 
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
                <button className="text-sm font-semibold transition-all hover:gap-2 flex items-center justify-center gap-1 mx-auto" style={{ color: "#0B2C5F" }}>
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
                  src="/images/leadership/tefera_tibebu.jpeg" 
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
                <button className="text-sm font-semibold transition-all hover:gap-2 flex items-center justify-center gap-1 mx-auto" style={{ color: "#0B2C5F" }}>
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
                  src="/images/leadership/iyasu_taye.jpeg" 
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
                <button className="text-sm font-semibold transition-all hover:gap-2 flex items-center justify-center gap-1 mx-auto" style={{ color: "#0B2C5F" }}>
                  Learn More 
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/leadership">
              <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                Meet Our Full Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW - With Your Competition Photos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              📸 Best Moments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#0B2C5F" }}>
              Competition <span style={{ color: "#D4A017" }}>Highlights</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our top 6 best moments from ESB competitions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src="/images/competition-1.jpeg" 
                alt="ESB Competition 1"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">🏆 Championship Final</p>
                <p className="text-sm text-[#F2C23B]">Addis Ababa 2024</p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src="/images/competition-2.jpeg" 
                alt="ESB Competition 2"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">🎓 Winners Ceremony</p>
                <p className="text-sm text-[#F2C23B]">Awarding Champions</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src="/images/competition-3.jpeg" 
                alt="ESB Competition 3"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">🤝 Group Photo</p>
                <p className="text-sm text-[#F2C23B]">All Participants</p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src="/images/competition-4.jpeg" 
                alt="ESB Competition 4"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">👥 Audience Cheering</p>
                <p className="text-sm text-[#F2C23B]">Full House Support</p>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src="/images/competition-5.jpeg" 
                alt="ESB Competition 5"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">🎉 Celebration Moment</p>
                <p className="text-sm text-[#F2C23B]">Joy & Excitement</p>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <img 
                src="/images/competition-6.jpeg" 
                alt="ESB Competition 6"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold text-lg">📚 Intense Spelling Round</p>
                <p className="text-sm text-[#F2C23B]">Students on Stage</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                View Full Gallery
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION - ESB Gold Theme */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg...')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <span className="text-[#0B2C5F] font-semibold">🚀 Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Ready to Join ESB?
          </h2>

          <p className="text-xl mb-8 text-[#0B2C5F]/80 max-w-2xl mx-auto">
            Be part of a growing community of young learners and future leaders.
            Contact us to learn how you can get involved!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                style={{ backgroundColor: "#0B2C5F", color: "#F2C23B" }}
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
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}