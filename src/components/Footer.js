"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const phoneNumbers = [
    "+251 91 144 3453",
    "+251 98 701 1616",
    "+1 571 355 9287"
  ];

  return (
    <footer className="relative" style={{ backgroundColor: "#0B2C5F" }}>
      
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

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Gold Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017]"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F2C23B] to-[#D4A017] flex items-center justify-center shadow-lg">
                  <span className="text-[#0B2C5F] font-black text-sm">ESB</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    ESB <span className="text-[#F2C23B]">Ethiopia</span>
                  </h2>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Empowering students through language, confidence, and academic excellence — 
                building Ethiopia's next generation of leaders.
              </p>
              
              {/* Social Links - Only Telegram & Facebook */}
              <div className="pt-4">
                <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/EthioSpellingbee2014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#26A5E4] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.08-.2-.09-.06-.22-.04-.31-.02-.13.03-2.18 1.38-3.07 1.94-.26.17-.5.25-.71.25-.23 0-.47-.08-.69-.15-.5-.16-1.1-.36-1.1-.36s-.69-.27.48-.53c.94-.2 4.42-1.87 5.08-2.15.67-.28 1.23-.11 1.12.73z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1GnrCrSdSk/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F2C23B] mt-1"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-[#F2C23B] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-[#F2C23B] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter Column */}
            <div className="space-y-6">
              {/* Contact Info - Updated Emails */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 relative inline-block">
                  Contact Info
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F2C23B] mt-1"></span>
                </h3>
                <div className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-white/70 hover:text-[#F2C23B] transition-colors group"
                    >
                      <span className="text-[#F2C23B]">📞</span>
                      <span>{phone}</span>
                    </a>
                  ))}
                  {/* New Emails */}
                  <a 
                    href="mailto:tefe19@gmail.com"
                    className="flex items-center gap-3 text-white/70 hover:text-[#F2C23B] transition-colors group"
                  >
                    <span className="text-[#F2C23B]">✉️</span>
                    <span>tefe19@gmail.com</span>
                  </a>
                  <a 
                    href="mailto:eyasutaye770599@gmail.com"
                    className="flex items-center gap-3 text-white/70 hover:text-[#F2C23B] transition-colors group"
                  >
                    <span className="text-[#F2C23B]">✉️</span>
                    <span>eyasutaye770599@gmail.com</span>
                  </a>
                  {/* Updated Location */}
                  <div className="flex items-start gap-3 text-white/70">
                    <span className="text-[#F2C23B]">📍</span>
                    <span className="text-sm">Lideta Sub-City, Woreda 01<br />Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-white/50 text-sm">
                © {currentYear} Ethiopian Spelling Bee (ESB). All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-white/50 hover:text-[#F2C23B] text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/50 hover:text-[#F2C23B] text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F2C23B] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4A017] rounded-full opacity-5 blur-3xl"></div>
      </div>

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
    </footer>
  );
}
