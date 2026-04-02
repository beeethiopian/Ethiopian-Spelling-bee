"use client";

import Link from "next/link";

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">🔒</span>
            <span className="text-white/90 text-sm font-medium">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Privacy</span>
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent"> Policy</span>
          </h1>
          
          <p className="text-white/80 text-lg">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          
          <div className="text-sm text-gray-500 mb-8 pb-4 border-b border-gray-100">
            Last updated: January {currentYear}
          </div>

          <div className="space-y-6 text-gray-700">
            
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                Ethiopian Spelling Bee (ESB) collects minimal information to provide our services. When you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact us via our contact form - we collect your name, email, and message</li>
                <li>Subscribe to our newsletter - we collect your email address</li>
                <li>Browse our website - we collect basic usage data via cookies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use your information only to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and messages</li>
                <li>Send you updates about ESB events and programs (if subscribed)</li>
                <li>Improve our website and services</li>
              </ul>
              <p className="mt-3 text-sm bg-blue-50 p-3 rounded-lg">
                🔒 <strong>We never sell, rent, or share your personal information with third parties.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                3. Cookies
              </h2>
              <p className="leading-relaxed">
                Our website uses essential cookies only for basic functionality like navigation and form submissions. 
                We do not use tracking cookies, advertising cookies, or third-party analytics that collect personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                4. Data Security
              </h2>
              <p className="leading-relaxed">
                We take reasonable measures to protect your information from unauthorized access, alteration, 
                or disclosure. However, no internet transmission is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                5. Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Request access to the data we have about you</li>
                <li>Request deletion of your data</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at <a href="mailto:info@esb.edu.et" className="text-[#D4A017] font-semibold hover:underline">info@esb.edu.et</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                6. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                ESB works with students and children through our spelling bee programs. We do not knowingly 
                collect personal information from children under 13 without parental consent. All student 
                information is handled through participating schools.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                7. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this privacy policy occasionally. Any changes will be posted on this page with 
                an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                8. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this privacy policy or your data, please contact us:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p>📧 Email: <a href="mailto:info@esb.edu.et" className="text-[#D4A017]">info@esb.edu.et</a></p>
                <p className="mt-2">📞 Phone: +251 91 144 3453</p>
                <p className="mt-2">📍 Address: Bole Sub-city, Woreda 03, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <Link href="/">
              <button className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#0B2C5F", color: "white" }}
              >
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}