"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Auto-redirect after 10 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2C5F] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4A017] rounded-full blur-3xl opacity-5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <span className="text-4xl opacity-20">🔤</span>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-fast">
        <span className="text-4xl opacity-20">📖</span>
      </div>
      <div className="absolute top-40 right-20 animate-float-medium">
        <span className="text-3xl opacity-15">🏆</span>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow">
        <span className="text-3xl opacity-15">✨</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        
        {/* 404 Number with Animation */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-[#0B2C5F] via-[#F2C23B] to-[#D4A017] bg-clip-text text-transparent animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#F2C23B]/10 rounded-full blur-2xl animate-ping"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#F2C23B20] backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">🔍</span>
            <span className="text-[#D4A017] text-sm font-medium">Page Not Found</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Oops! This word isn't in our dictionary
          </h1>
          
          <p className="text-gray-600 text-lg mb-6">
            The page you're looking for seems to have been spelled incorrectly or doesn't exist.
            But don't worry, every great speller makes mistakes!
          </p>

          {/* Fun Facts */}
          <div className="bg-white rounded-xl p-4 mb-8 shadow-md">
            <p className="text-sm text-gray-500">
              💡 <span className="font-semibold">Did you know?</span> The longest word in English has 189,819 letters!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <button className="group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-2xl w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] animate-gradient-x"></div>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <span className="relative flex items-center justify-center gap-2 text-[#0B2C5F]">
                🏠 Back to Home
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Link>

          <Link href="/gallery">
            <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 w-full sm:w-auto"
              style={{ borderColor: "#0B2C5F", color: "#0B2C5F" }}
            >
              📸 Explore Gallery
            </button>
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link href="/about">
            <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              <div className="text-2xl mb-2">📖</div>
              <p className="text-sm font-semibold text-gray-700">About ESB</p>
            </div>
          </Link>
          <Link href="/leadership">
            <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              <div className="text-2xl mb-2">👥</div>
              <p className="text-sm font-semibold text-gray-700">Leadership</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm font-semibold text-gray-700">Contact Us</p>
            </div>
          </Link>
          <Link href="/gallery">
            <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              <div className="text-2xl mb-2">📸</div>
              <p className="text-sm font-semibold text-gray-700">Gallery</p>
            </div>
          </Link>
        </div>

        {/* Auto-redirect Message */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            You will be automatically redirected to the homepage in 
            <span className="font-bold text-[#D4A017] mx-1">{countdown}</span> 
            seconds
          </p>
          <div className="w-full max-w-xs mx-auto mt-3 bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000"
              style={{ 
                width: `${(countdown / 10) * 100}%`,
                background: "linear-gradient(90deg, #F2C23B, #D4A017)"
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}