"use client";

import { useState } from "react";
import Link from "next/link";

export default function LeadershipPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Leadership Data - 9 Members (7 Men, 2 Women)
  const leadershipData = [
    {
      id: 1,
      name: "Abiye Tekle",
      position: "Founder & Managing Director (CEO)",
      category: "Executive Leadership",
      gender: "male",
      bio: "Visionary leader behind ESB, committed to building Ethiopia's largest student literacy platform and expanding its impact across Africa.",
      image: "/images/leadership/abiye_tekle.jpeg",
      showFullInfo: true
    },
    {
      id: 2,
      name: "Tefera Tibebu",
      position: "Deputy Managing Director",
      category: "Executive Leadership",
      gender: "male",
      bio: "Leads operations, school partnerships, and program execution across multiple cities in Ethiopia.",
      image: "/images/leadership/tefera_tibebu.jpeg",
      showFullInfo: true
    },
    {
      id: 3,
      name: "Iyasu Taye",
      position: "Director of National Coordination",
      category: "Executive Leadership",
      gender: "male",
      bio: "Oversees national coordination, program alignment, and institutional partnerships across Ethiopia.",
      image: "/images/leadership/iyasu_taye.jpeg",
      showFullInfo: true
    },
    {
      id: 4,
      name: "Aschalew Shewarega",
      position: "Government Education Bureaus Liaison",
      image: "/images/leadership/aschalew_shewarega.jpeg",
      showFullInfo: false
    },
    {
      id: 5,
      name: "Fasil Eshetu",
      image: "/images/leadership/fasil_eshetu.jpeg",
      position: "Regional Coordinator at Hawassa City",
      showFullInfo: false
    },
    {
      id: 6,
      name: "Noah Gadara Williams",
      position: "Regional Coordinator at Shashemene City",
      image: "/images/leadership/noah_gadara_williams.jpeg",
      showFullInfo: false
    },
    {
      id: 7,
      name: "Wengel Ayenew",
      position: "Spokeswoman & Liaison",
      image: "/images/leadership/wengel_ayenew.jpeg",
      showFullInfo: false
    },
    {
      id: 8,
      name: "Tadilo Muhabaw",
      image: "/images/leadership/tadilo_muhabaw.jpeg",
      position: "Regional Coordinator at Woldiya City",
      showFullInfo: false
    },
    {
      id: 9,
      name: "Wubete Tegegne",
      position: "Finance and Payroll",
      image: "/images/leadership/wubete_tegegne.jpeg",
      showFullInfo: false
    }
  ];

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setSelectedImage(leadershipData[index]);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (currentIndex < leadershipData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(leadershipData[newIndex]);
    } else {
      showNotification("👥 This is the last team member");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(leadershipData[newIndex]);
    } else {
      showNotification("👥 This is the first team member");
    }
  };

  // Keyboard navigation
  if (typeof window !== 'undefined') {
    window.onkeydown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeFullscreen();
    };
  }

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
            <span className="text-2xl">👥</span>
            <span className="text-white/90 text-sm font-medium">Meet Our Team</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Our</span>
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent"> Leadership</span>
          </h1>
          
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            A team driven by purpose, committed to excellence, and dedicated to shaping the future of education in Ethiopia.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <div className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              👥 9 Leaders
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              🏆 7 Men • 2 Women
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-12 w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Leadership Grid Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Meet the <span style={{ color: "#D4A017" }}>Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate educators, visionary leaders, and dedicated professionals working together to transform literacy in Ethiopia
          </p>
        </div>

        {/* Display all leaders in a single responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {leadershipData.map((leader, index) => (
            <div
              key={leader.id}
              onClick={() => openFullscreen(index)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-80 bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x400?text=${leader.name.split(' ')[0]}+${leader.name.split(' ')[1]}`;
                  }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-[#0B2C5F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Info Section */}
              <div className="p-6 text-center">
                {/* Category - Only for first 3 */}
                {leader.showFullInfo && (
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                    {leader.category}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1" style={{ color: "#0B2C5F" }}>{leader.name}</h3>
                <p className="text-[#D4A017] font-semibold text-sm mb-3">{leader.position}</p>
                {/* Bio - Only for first 3 */}
                {leader.showFullInfo && (
                  <p className="text-gray-600 text-sm line-clamp-2">{leader.bio}</p>
                )}
                <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1">
                  <span>🔍 Click to view profile</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: "#F2C23B20", color: "#F2C23B" }}>
              💫 Our Culture
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What Drives <span style={{ color: "#F2C23B" }}>Us</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our leadership team is united by a shared set of core values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "✨", title: "Excellence with Humility", desc: "Striving for greatness while staying grounded" },
              { icon: "🎯", title: "Discipline with Purpose", desc: "Focused action towards meaningful goals" },
              { icon: "🤝", title: "Collaboration over Competition", desc: "Working together for greater impact" },
              { icon: "🎓", title: "Service to Students Above All", desc: "Every decision prioritizes student success" }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-[#0B2C5F]/80">
            Be part of Ethiopia's literacy revolution. Together, we can shape the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: "#0B2C5F", color: "#F2C23B" }}>
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-10 text-white hover:text-[#F2C23B] transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-10 text-white hover:text-[#F2C23B] transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-10 text-white hover:text-[#F2C23B] transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentIndex + 1} / {leadershipData.length}
          </div>

          {/* Main Content */}
          <div
            className="relative max-w-5xl max-h-[90vh] mx-4 bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 bg-gradient-to-br from-[#0B2C5F] to-[#0E3A7A] flex items-center justify-center p-8">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-[#F2C23B]"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/256x256?text=${selectedImage.name.split(' ')[0]}`;
                  }}
                />
              </div>
              
              {/* Info Section */}
              <div className="md:w-1/2 p-8">
                {/* Category - Only for first 3 */}
                {selectedImage.showFullInfo && (
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "#F2C23B20", color: "#D4A017" }}>
                    {selectedImage.category}
                  </div>
                )}
                <h2 className="text-3xl font-bold mb-2" style={{ color: "#0B2C5F" }}>{selectedImage.name}</h2>
                <p className="text-[#D4A017] font-semibold text-lg mb-4">{selectedImage.position}</p>
                
                {/* Bio - Only for first 3 */}
                {selectedImage.showFullInfo && (
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedImage.bio}</p>
                )}
                
                {/* Contact Information - Only for first 3 */}
                {selectedImage.showFullInfo && selectedImage.social && (
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3" style={{ color: "#0B2C5F" }}>Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>📧</span>
                        <a href={`mailto:${selectedImage.social.email}`} className="hover:text-[#D4A017] transition-colors">
                          {selectedImage.social.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm flex gap-4">
            <span>← → Navigate</span>
            <span>ESC Close</span>
          </div>
        </div>
      )}

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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}