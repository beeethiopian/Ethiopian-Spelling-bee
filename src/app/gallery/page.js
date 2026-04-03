"use client";

import { useEffect, useState } from "react";
import { getGalleryImages } from "../../services/galleryService";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [groupedImages, setGroupedImages] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [availableYears, setAvailableYears] = useState([]);

  const showNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await getGalleryImages();
        setImages(data);
        
        // Group images by year
        const grouped = {};
        const years = new Set();
        
        data.forEach((item) => {
          const year = item.year || "Uncategorized";
          years.add(year);
          if (!grouped[year]) {
            grouped[year] = [];
          }
          grouped[year].push(item);
        });
        
        // Sort years in descending order (newest first)
        const sortedYears = Array.from(years).sort((a, b) => {
          if (a === "Uncategorized") return 1;
          if (b === "Uncategorized") return -1;
          return b - a;
        });
        
        setGroupedImages(grouped);
        setAvailableYears(sortedYears);
        setSelectedYear(sortedYears[0]); // Select first year by default
      } catch (error) {
        console.error(error);
        showNotification("❌ Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Get current images based on selected year
  const currentImages = selectedYear ? groupedImages[selectedYear] || [] : [];

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setSelectedImage(currentImages[index]);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (currentIndex < currentImages.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    } else {
      showNotification("📸 This is the last image");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    } else {
      showNotification("📸 This is the first image");
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, currentImages]);

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
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">📸</span>
            <span className="text-white/90 text-sm font-medium">Our Memories</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">ESB</span>
            <span className="bg-gradient-to-r from-[#F2C23B] via-[#FFE08A] to-[#D4A017] bg-clip-text text-transparent"> Gallery</span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Capturing moments of excellence, achievement, and brilliance
          </p>
          
          <div className="mt-6 flex justify-center gap-2">
            <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              📷 {images.length} Moments Captured
            </span>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-12 w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Year Filter Section */}
      {!loading && availableYears.length > 0 && (
        <section className="pt-8 px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#0B2C5F" }}>
              Browse by Year
            </h2>
            <div className="flex flex-wrap gap-3">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-[#F2C23B] text-[#0B2C5F] shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md"
                  }`}
                >
                  {year === "Uncategorized" ? "📷 Uncategorized" : `🏆 ${year}`}
                </button>
              ))}
            </div>
          </div>
          
          {/* Year Stats */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Showing</span>
                <span className="font-semibold text-[#0B2C5F] ml-1">
                  {currentImages.length} Photos
                </span>
                <span className="text-sm text-gray-500 ml-2">from {selectedYear}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-[#F2C23B]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#F2C23B] rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 text-gray-600">Loading memories...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No images yet</h3>
            <p className="text-gray-500">Check back soon for exciting moments!</p>
          </div>
        ) : (
          <>
            {/* Masonry-like Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentImages.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openFullscreen(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  {/* Year Badge */}
                  {item.year && (
                    <div className="absolute top-3 right-3 z-10 bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      {item.year}
                    </div>
                  )}
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C5F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-[#F2C23B] rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-6 h-6 text-[#0B2C5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-4">
                    <h2 className="font-bold text-lg text-[#0B2C5F] line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#D4A017]">
                      <span>🔍 Click to view fullscreen</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
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

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentIndex + 1} / {currentImages.length}
          </div>

          {/* Year Badge in Modal */}
          {selectedImage.year && (
            <div className="absolute top-20 left-4 z-10 bg-[#F2C23B] text-[#0B2C5F] font-bold px-3 py-1 rounded-full shadow-md text-sm">
              🏆 {selectedImage.year}
            </div>
          )}

          {/* Main Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl">
              <h2 className="text-white text-2xl font-bold mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-white/80 text-base">
                {selectedImage.description}
              </p>
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
