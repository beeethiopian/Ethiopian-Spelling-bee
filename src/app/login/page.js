"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const showNotification = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        showNotification(error.message, "error");
      } else {
        showNotification("Login successful! Redirecting to admin panel...", "success");
        setTimeout(() => {
          router.push("/admin");
        }, 1500);
      }
    } catch (error) {
      showNotification("An unexpected error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Clear form on unmount
  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center relative" style={{ backgroundColor: "#F9FAFB" }}>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2C5F] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className={`rounded-lg shadow-2xl flex items-center gap-3 border-l-4 px-6 py-3 ${
            toastType === "success" 
              ? "bg-gradient-to-r from-[#0B2C5F] to-[#0E3A7A] text-white border-[#F2C23B]" 
              : "bg-red-600 text-white border-red-800"
          }`}>
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              toastType === "success" ? "bg-[#F2C23B]" : "bg-white"
            }`}></div>
            <span className="font-medium">{toastMessage}</span>
            <button onClick={() => setShowToast(false)} className="text-white/70 hover:text-white">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header with ESB Branding */}
          <div className="relative p-6 text-center" style={{ backgroundColor: "#0B2C5F" }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2C23B] rounded-full blur-2xl"></div>
            </div>
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img 
                  src="/images/logo.jpg" 
                  alt="ESB Logo" 
                  className="w-16 h-16 object-cover rounded-full"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/64x64?text=ESB";
                  }}
                />
              </div>
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
              <p className="text-white/70 text-sm mt-1">Admin Access Only</p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="p-8">
            <div className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2C23B] focus:border-transparent transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2C23B] focus:border-transparent transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Only - No Forgot Password */}
              <div className="flex items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#F2C23B] rounded border-gray-300 focus:ring-[#F2C23B]" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)",
                  color: "#0B2C5F"
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Sign In
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="px-8 pb-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">🔐 Secure Admin Access</span>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-6">
              <Link href="/" className="text-xs text-gray-500 hover:text-[#D4A017] transition-colors">
                ← Back to Home
              </Link>
              <Link href="/contact" className="text-xs text-gray-500 hover:text-[#D4A017] transition-colors">
                Need Help?
              </Link>
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-[#D4A017] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Admin Access Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            🔐 Authorized access only. This is the official ESB admin portal.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Contact administrator if you need access.
          </p>
        </div>
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
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}