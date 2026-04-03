"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const phoneNumbers = [
    { number: "+251 91 144 3453", label: "Primary Contact", location: "Addis Ababa" },
    { number: "+251 98 701 1616", label: "Secondary Contact", location: "Addis Ababa" },
    { number: "+251 91 177 0599", label: "Regional Coordinator", location: "Bahir Dar" },
    { number: "+251 91 115 5533", label: "School Partnerships", location: "Addis Ababa" },
    { number: "+251 91 135 0470", label: "Events & Programs", location: "Addis Ababa" },
    { number: "+1 571 355 9287", label: "International Contact", location: "USA Office" }
  ];

  // WhatsApp number (format: country code + number without spaces or plus sign)
  const whatsappNumber = "+15713559287"; // Based on the primary contact number
  const whatsappMessage = "Hello ESB Team...";

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
            <span className="text-2xl">📞</span>
            <span className="text-white/90 text-sm font-medium">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Contact</span>
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent"> Us</span>
          </h1>
          
          <p className="text-white/90 text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions, partnership inquiries, or want to join the movement? 
            We'd love to hear from you!
          </p>

          {/* WhatsApp Button in Hero */}
          <div className="mt-8">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl bg-[#25D366] text-white hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.032 2.001c-5.514 0-9.996 4.48-10.002 9.994-.002 1.793.47 3.544 1.363 5.072l-1.379 4.893 5.075-1.271c1.465.832 3.109 1.27 4.794 1.27h.004c5.514 0 9.997-4.48 10.003-9.994.002-5.514-4.478-9.996-9.99-10.002h-.868zm4.873 14.236c-.264.742-1.563 1.452-2.155 1.521-.528.061-1.116.089-1.802-.057-.372-.079-.858-.183-1.484-.353-1.666-.451-3.177-1.682-4.338-3.083-.565-.682-1.096-1.428-1.459-2.249-.284-.642-.28-1.244-.016-1.814.189-.408.554-.767.949-1.017.234-.148.491-.234.734-.353.169-.082.356-.112.533-.168.177-.056.355-.021.501.122.283.278.678.83.898 1.173.121.189.202.401.235.62.033.219-.027.444-.167.63-.14.186-.305.373-.475.56-.103.113-.213.231-.32.338-.213.213-.435.443-.285.744.148.301.657 1.082 1.385 1.725.952.841 1.751 1.161 2.149 1.295.236.079.5.098.749.051.25-.047.49-.181.68-.36.188-.179.393-.439.592-.689.199-.25.422-.308.684-.215.261.093 1.655.776 1.939.916.284.14.472.209.543.326.071.117.071.682-.193 1.424z"/>
              </svg>
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-12 w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone Numbers Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Phone Numbers</h3>
              </div>
              <div className="space-y-3">
                {phoneNumbers.map((phone, index) => (
                  <div key={index} className="group">
                    <a 
                      href={`tel:${phone.number.replace(/\s/g, '')}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{phone.number}</p>
                        <p className="text-xs text-gray-500">{phone.label} • {phone.location}</p>
                      </div>
                      <span className="text-[#F2C23B] opacity-0 group-hover:opacity-100 transition-opacity">📞</span>
                    </a>
                    {index < phoneNumbers.length - 1 && <div className="border-b border-gray-100 my-2"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#25D36620] flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>WhatsApp</h3>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg hover:bg-[#25D36610] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-[#25D366] transition-colors">+251 91 144 3453</p>
                    <p className="text-sm text-gray-500">Available 9AM - 6PM</p>
                  </div>
                  <span className="text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">💬</span>
                </div>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Email Us</h3>
              </div>
              <div className="space-y-3">
                <a href="mailto:tefe19@gmail.com" className="block p-3 rounded-lg hover:bg-gray-50 transition-all group">
                  <p className="font-semibold text-gray-800 group-hover:text-[#0B2C5F] transition-colors">tefe19@gmail.com</p>
                  <p className="text-sm text-gray-500">General Inquiries</p>
                </a>
                <div className="border-b border-gray-100"></div>
                <a href="mailto:eyasutaye770599@gmail.com" className="block p-3 rounded-lg hover:bg-gray-50 transition-all group">
                  <p className="font-semibold text-gray-800 group-hover:text-[#0B2C5F] transition-colors">eyasutaye770599@gmail.com</p>
                  <p className="text-sm text-gray-500">Partnership & Support</p>
                </a>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#0B2C5F" }}>Follow Us</h3>
              </div>
              <div className="flex gap-4">
                {/* Telegram */}
                <a
                  href="https://t.me/EthioSpellingbee2014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-[#26A5E4]/10 hover:bg-[#26A5E4] transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-[#26A5E4] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.66-.35-1.02.22-1.61.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.08-.2-.09-.06-.22-.04-.31-.02-.13.03-2.18 1.38-3.07 1.94-.26.17-.5.25-.71.25-.23 0-.47-.08-.69-.15-.5-.16-1.1-.36-1.1-.36s-.69-.27.48-.53c.94-.2 4.42-1.87 5.08-2.15.67-.28 1.23-.11 1.12.73z"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">Telegram</span>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1GnrCrSdSk/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2] transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-[#1877F2] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold" style={{ color: "#0B2C5F" }}>Our Location</h3>
                <p className="text-gray-600 mt-1">Visit our headquarters in Addis Ababa</p>
              </div>
              <div className="h-96 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126186.381678826!2d38.68234937848967!3d9.022353425104795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x6f8a8c1b7b1b1b1b!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ESB Location Map"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Lideta Sub-City, Woreda 01</p>
                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                    <p className="text-gray-500 text-sm mt-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0B2C5F" }}>
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-6 text-[#0B2C5F]/80">
            Join us in shaping the future of education in Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <button className="px-8 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg" style={{ backgroundColor: "#0B2C5F", color: "#F2C23B" }}>
                Learn About ESB
              </button>
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full font-bold transition-all hover:scale-105 border-2 inline-flex items-center gap-2 justify-center" 
              style={{ borderColor: "#0B2C5F", color: "#0B2C5F", backgroundColor: "white" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.032 2.001c-5.514 0-9.996 4.48-10.002 9.994-.002 1.793.47 3.544 1.363 5.072l-1.379 4.893 5.075-1.271c1.465.832 3.109 1.27 4.794 1.27h.004c5.514 0 9.997-4.48 10.003-9.994.002-5.514-4.478-9.996-9.99-10.002h-.868zm4.873 14.236c-.264.742-1.563 1.452-2.155 1.521-.528.061-1.116.089-1.802-.057-.372-.079-.858-.183-1.484-.353-1.666-.451-3.177-1.682-4.338-3.083-.565-.682-1.096-1.428-1.459-2.249-.284-.642-.28-1.244-.016-1.814.189-.408.554-.767.949-1.017.234-.148.491-.234.734-.353.169-.082.356-.112.533-.168.177-.056.355-.021.501.122.283.278.678.83.898 1.173.121.189.202.401.235.62.033.219-.027.444-.167.63-.14.186-.305.373-.475.56-.103.113-.213.231-.32.338-.213.213-.435.443-.285.744.148.301.657 1.082 1.385 1.725.952.841 1.751 1.161 2.149 1.295.236.079.5.098.749.051.25-.047.49-.181.68-.36.188-.179.393-.439.592-.689.199-.25.422-.308.684-.215.261.093 1.655.776 1.939.916.284.14.472.209.543.326.071.117.071.682-.193 1.424z"/>
              </svg>
              WhatsApp
            </a>
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
