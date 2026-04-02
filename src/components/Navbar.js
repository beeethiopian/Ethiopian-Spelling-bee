"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabaseClient";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    // Check current user
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };
    getUser();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowUserMenu(false);
    window.location.href = "/";
  };

  return (
    <nav className="w-full sticky top-0 z-50 shadow-xl backdrop-blur-sm bg-opacity-95" style={{ backgroundColor: "#0B2C5F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#F2C23B] opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="ESB Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-black tracking-tight leading-tight">
                <span className="text-white">ESB</span>
                <span className="text-[#F2C23B]"> Ethiopia</span>
              </h1>
              <span className="text-[10px] lg:text-xs text-white/60 tracking-wider">Excellence & Achievement</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/leadership">Leadership</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            
            {/* Conditional Auth Button */}
            {user ? (
              // Logged in - Show User Menu
              <div className="relative ml-4">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)",
                    color: "#0B2C5F"
                  }}
                >
                  <span>👤</span>
                  <span className="text-sm">{user.email?.split('@')[0]}</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden animate-slide-down">
                    <Link href="/admin">
                      <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2">
                        <span>📊</span> Admin Dashboard
                      </div>
                    </Link>
                    <div className="border-t border-gray-100"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                    >
                      <span>🚪</span> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Not logged in - Show Login Button
              <Link href="/login">
                <button className="group relative ml-4 px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] animate-gradient-x"></div>
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <span className="relative flex items-center gap-2 text-[#0B2C5F]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </span>
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}>
          <div className="space-y-1 pt-2">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/leadership" onClick={() => setIsMobileMenuOpen(false)}>Leadership</MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            
            {user ? (
              <>
                <MobileNavLink href="/admin" onClick={() => setIsMobileMenuOpen(false)}>📊 Admin Dashboard</MobileNavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-red-600 text-white"
                >
                  🚪 Logout
                </button>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full mt-3 px-5 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)",
                    color: "#0B2C5F"
                  }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Animated Gold Bottom Bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#F2C23B] to-transparent animate-pulse"></div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative px-3 lg:px-4 py-2 text-white/80 hover:text-[#F2C23B] transition-all duration-300 font-medium group">
      {children}
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F2C23B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link href={href} onClick={onClick}>
      <div className="block px-4 py-3 text-white/80 hover:text-[#F2C23B] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium">
        {children}
      </div>
    </Link>
  );
}