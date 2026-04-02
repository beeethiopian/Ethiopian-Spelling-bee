"use client";

import Link from "next/link";

export default function TermsPage() {
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
            <span className="text-2xl">⚖️</span>
            <span className="text-white/90 text-sm font-medium">Terms & Conditions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Terms of</span>
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent"> Service</span>
          </h1>
          
          <p className="text-white/80 text-lg">
            Please read these terms carefully before using our website
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
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using the Ethiopian Spelling Bee (ESB) website, you agree to be bound by these 
                Terms of Service. If you do not agree, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                2. About ESB
              </h2>
              <p className="leading-relaxed">
                ESB is Ethiopia's leading student literacy platform dedicated to developing vocabulary mastery, 
                reading culture, communication skills, and student confidence through spelling bee competitions 
                and educational programs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                3. Use of Website
              </h2>
              <p className="leading-relaxed">
                You agree to use our website only for lawful purposes and in a way that does not infringe the 
                rights of others or restrict anyone else's use of the website.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Do not attempt to hack or disrupt our website</li>
                <li>Do not submit false or misleading information</li>
                <li>Do not use our website for any illegal activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on this website, including logos, text, images, and graphics, is the property of 
                ESB Ethiopia and is protected by copyright laws. You may not reproduce, distribute, or modify 
                any content without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                5. Accuracy of Information
              </h2>
              <p className="leading-relaxed">
                We strive to keep all information on our website accurate and up-to-date. However, we do not 
                guarantee that all information is error-free. Event dates, competition details, and other 
                information may change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                6. External Links
              </h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, 
                privacy practices, or terms of service of these external sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                7. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, ESB Ethiopia shall not be liable for any indirect, 
                incidental, or consequential damages arising from your use of our website or participation in 
                our programs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                8. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to this page. Your continued use of the website constitutes acceptance of the 
                updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                9. Governing Law
              </h2>
              <p className="leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Ethiopia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#0B2C5F" }}>
                10. Contact Information
              </h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <p className="mt-3">📧 Email: <a href="mailto:info@esb.edu.et" className="text-[#D4A017]">info@esb.edu.et</a></p>
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