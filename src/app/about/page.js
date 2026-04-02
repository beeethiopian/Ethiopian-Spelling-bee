"use client";

import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-gradient-to-r from-[#0B2C5F] to-[#0E3A7A] text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 border-l-4 border-[#F2C23B]">
            <span className="font-medium">{toastMessage}</span>
            <button onClick={() => setShowToast(false)} className="text-white/70 hover:text-white">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">🇪🇹</span>
            <span className="text-white/90 text-sm font-medium">Ethiopia's Leading Literacy Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">About</span>
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent"> ESB</span>
          </h1>
          
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            We are more than a competition. We are a national educational movement committed to 
            shaping a generation of young Ethiopians who can think clearly, speak confidently, and lead with purpose.
          </p>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-12 w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
              📖 Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0B2C5F" }}>
              Ethiopian Spelling <span style={{ color: "#D4A017" }}>Bee (ESB)</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ESB is Ethiopia's leading student literacy platform dedicated to developing vocabulary mastery, 
              reading culture, communication skills, and student confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are more than a competition. We are a national educational movement committed to shaping 
              a generation of young Ethiopians who can think clearly, speak confidently, and lead with purpose.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A] rounded-2xl p-8 shadow-2xl">
              <div className="text-center text-white">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Our Belief</h3>
                <p className="text-white/90 italic">"Community pride starts with children. When we invest in literacy, we invest in the future of Ethiopia."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2C23B]/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0B2C5F" }}>Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To empower students across Ethiopia through structured literacy programs that strengthen:
              </p>
              <div className="space-y-3">
                {["Reading culture", "Vocabulary development", "Writing excellence", "Communication & confidence"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F2C23B] flex items-center justify-center text-xs text-[#0B2C5F] font-bold">✓</div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 italic">
                We believe that literacy is the foundation of all learning—and every child deserves the opportunity to excel.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2C23B]/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0B2C5F" }}>Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-lg">
                Building a Generation That Leads With Confidence
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                To build an internationally competitive generation of Ethiopian students equipped with the skills, 
                confidence, and discipline to succeed in education and beyond.
              </p>
              <div className="bg-[#0B2C5F]/5 rounded-lg p-4">
                <p className="text-[#D4A017] font-bold text-center">"Confidence is the new GPA"</p>
                <p className="text-gray-600 text-sm text-center mt-2">When students believe in themselves, they unlock their full potential.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
            ⚡ What We Do
          </div>
          <h2 className="text-4xl font-bold" style={{ color: "#0B2C5F" }}>
            Our <span style={{ color: "#D4A017" }}>Programs</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">ESB delivers a structured, nationwide literacy ecosystem</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🏆", title: "National Spelling Bee Program", desc: "Annual competition bringing together top spellers nationwide" },
            { icon: "🏫", title: "School-Based Literacy Programs", desc: "Integrated programs within schools across Ethiopia" },
            { icon: "📚", title: "Vocabulary & Reading Development", desc: "Structured vocabulary building and reading programs" },
            { icon: "🌍", title: "Pathways to International Platforms", desc: "Opportunities to compete on global stages" }
          ].map((program, i) => (
            <div key={i} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-4xl mb-3">{program.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#0B2C5F" }}>{program.title}</h3>
              <p className="text-gray-600 text-sm">{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#F2C23B" }}>
              📊 Our Impact
            </div>
            <h2 className="text-4xl font-bold text-white">
              Making a <span style={{ color: "#F2C23B" }}>Difference</span>
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">Building one of the largest literacy platforms in Africa</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "600,000+", label: "Students Reached", detail: "in Addis Ababa" },
              { number: "13+", label: "Cities", detail: "across Ethiopia" },
              { number: "700+", label: "Words Exposure", detail: "for advancing students" },
              { number: "50+", label: "Partnerships", detail: "with schools & bureaus" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#F2C23B] mb-2">{stat.number}</div>
                <div className="text-white font-semibold">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Spelling Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#0B2C5F" }}>
              Beyond <span style={{ color: "#D4A017" }}>Spelling</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At ESB, spelling is just the beginning. Our programs develop confidence, discipline, 
              public speaking, leadership, and academic excellence.
            </p>
            <div className="bg-gradient-to-r from-[#F2C23B20] to-transparent p-6 rounded-xl">
              <p className="text-2xl font-bold text-[#D4A017] mb-2">"Confidence is the new GPA."</p>
              <p className="text-gray-600">Students who are not only prepared for exams — but prepared for life.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Confidence", "Discipline", "Public Speaking", "Leadership", "Academic Excellence", "Critical Thinking"].map((skill, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all">
                <div className="text-[#F2C23B] text-xl mb-1">✓</div>
                <span className="font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Our People / Team Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
            👥 Our People
          </div>
          <h2 className="text-4xl font-bold" style={{ color: "#0B2C5F" }}>
            A Team Driven by <span style={{ color: "#D4A017" }}>Purpose</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Powered by a passionate team of educators, leaders, coordinators, and volunteers united by one mission
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Abiye Tekle */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="/images/leadership/Abiye_Tekle.jpeg" 
                alt="Abiye Tekle - Founder & CEO"
                className="relative w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/128x128?text=Abiye+Tekle";
                }}
              />
            </div>
            <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Abiye Tekle</h3>
            <p className="text-[#D4A017] font-semibold text-sm mb-2">Founder & Managing Director (CEO)</p>
            <p className="text-gray-600 text-sm">Visionary leader building Ethiopia's largest student literacy platform and expanding its impact across Africa.</p>
          </div>

          {/* Tefera Tibebu */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="/images/leadership/Tefera_Tibebu.jpeg" 
                alt="Tefera Tibebu - Deputy Managing Director"
                className="relative w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/128x128?text=Tefera+Tibebu";
                }}
              />
            </div>
            <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Tefera Tibebu</h3>
            <p className="text-[#D4A017] font-semibold text-sm mb-2">Deputy Managing Director</p>
            <p className="text-gray-600 text-sm">Leads operations, school partnerships, and program execution across multiple cities.</p>
          </div>

          {/* Iyasu Taye */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] to-[#D4A017] rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="/images/leadership/Iyasu_Taye.jpeg" 
                alt="Iyasu Taye - Director of National Coordination"
                className="relative w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/128x128?text=Iyasu+Taye";
                }}
              />
            </div>
            <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Iyasu Taye</h3>
            <p className="text-[#D4A017] font-semibold text-sm mb-2">Director of National Coordination</p>
            <p className="text-gray-600 text-sm">Oversees national coordination, program alignment, and institutional partnerships.</p>
          </div>
        </div>

        {/* Regional & Support Teams */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4" style={{ color: "#0B2C5F" }}>📍 National & Regional Coordination</h3>
            <div className="flex flex-wrap gap-2">
              {["City Coordinators", "Regional Leaders", "School Representatives", "Volunteer Teams"].map((item, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4" style={{ color: "#0B2C5F" }}>🎓 Educators & Professionals</h3>
            <div className="flex flex-wrap gap-2">
              {["Judges", "Pronouncers", "Academic Advisors", "EELPA Members"].map((item, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div className="mt-8 bg-gradient-to-r from-[#0B2C5F] to-[#0E3A7A] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Excellence with humility", "Discipline with purpose", "Collaboration over competition", "Service to students above all"].map((value, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm">✨ {value}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🤝</div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Join the Movement
          </h2>
          <p className="text-xl mb-8 text-[#0B2C5F]/80">
            Whether you are a school, parent, student, sponsor, or partner, you have a role to play in shaping the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: "#0B2C5F", color: "#F2C23B" }}>
                Become a Partner
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
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}
