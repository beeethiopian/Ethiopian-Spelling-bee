"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import {
  getGalleryImages,
  deleteImage,
  updateImage,
} from "../../services/galleryService";
import Link from "next/link";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState(null);

  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  
  // Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const ADMIN_EMAIL = "beeethiopian@gmail.com";
  
  // Generate years from 2014 to current year + 1
  const currentYear = new Date().getFullYear();
  const availableYears = Array.from({ length: currentYear - 2013 }, (_, i) => currentYear - i);

  const showNotification = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (err) {
        console.error(err);
        showNotification("Failed to load images", "error");
      }
    };

    const checkUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();

        if (!data.user) {
          showNotification("Please login first", "error");
          setTimeout(() => {
            window.location.replace("/login");
          }, 1500);
          return;
        }

        if (data.user.email !== ADMIN_EMAIL) {
          showNotification("Access denied. You don't have admin privileges.", "error");
          setTimeout(() => {
            window.location.replace("/");
          }, 1500);
          return;
        }

        setUser(data.user);
        setLoading(false);
        await loadImages();
      } catch (err) {
        console.error(err);
        showNotification("Authentication error", "error");
        setTimeout(() => {
          window.location.replace("/login");
        }, 1500);
      }
    };

    checkUser();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      showNotification("Title and description are required", "error");
      return;
    }

    if (!year) {
      showNotification("Please select a year", "error");
      return;
    }

    try {
      setSubmitting(true);

      if (editingId) {
        // UPDATE
        await updateImage(editingId, {
          title,
          description,
          year: parseInt(year),
        });
        showNotification("Image updated successfully!", "success");
      } else {
        // CREATE
        if (!image) {
          showNotification("Please select an image to upload", "error");
          setSubmitting(false);
          return;
        }

        showNotification("Uploading image to Cloudinary...", "success");

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "esb_uploads");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dxbdbjszg/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        if (!data.secure_url) {
          throw new Error("Image upload failed");
        }

        const imageUrl = data.secure_url;
        const publicId = data.public_id;

        const { error } = await supabase.from("gallery").insert([
          {
            title,
            description,
            year: parseInt(year),
            image_url: imageUrl,
            public_id: publicId,
          },
        ]);

        if (error) throw error;
        showNotification("Image uploaded successfully!", "success");
      }

      setTitle("");
      setDescription("");
      setYear("");
      setImage(null);
      setEditingId(null);

      const updated = await getGalleryImages();
      setImages(updated);

    } catch (err) {
      console.error(err);
      showNotification("Error: " + err.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setYear(item.year?.toString() || "");
    setImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    showNotification(`Editing: ${item.title}`, "success");
  };

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    
    try {
      if (itemToDelete.public_id) {
        await fetch("/api/delete-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            public_id: itemToDelete.public_id,
          }),
        });
      }

      await deleteImage(itemToDelete.id);

      const updated = await getGalleryImages();
      setImages(updated);
      showNotification(`"${itemToDelete.title}" has been deleted`, "success");

    } catch (err) {
      console.error(err);
      showNotification("Delete failed. Please try again.", "error");
    } finally {
      setShowDeleteModal(false);
      setItemToDelete(null);
    }
  };

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = async () => {
    await supabase.auth.signOut();
    showNotification("Logged out successfully!", "success");
    setShowLogoutModal(false);
    setTimeout(() => {
      window.location.replace("/login");
    }, 1000);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setYear("");
    setImage(null);
    showNotification("Edit cancelled", "success");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-[#F2C23B]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#F2C23B] rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-slide-up overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confirm Delete</h3>
              <p className="text-gray-600 mb-2">
                Are you sure you want to delete <span className="font-semibold text-red-600">"{itemToDelete?.title}"</span>?
              </p>
              <p className="text-gray-500 text-sm mb-6">This action cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-slide-up overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confirm Logout</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to logout from your admin account?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                >
                  Stay Logged In
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 px-4 py-2 rounded-lg bg-[#0B2C5F] text-white font-semibold hover:bg-[#0E3A7A] transition-all"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#0B2C5F" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2C23B] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <img 
                    src="/images/logo.jpg" 
                    alt="ESB Logo" 
                    className="w-10 h-10 object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/40x40?text=ESB";
                    }}
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">Admin Dashboard</h1>
                  <p className="text-white/70 text-sm">Welcome back, {user?.email}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link href="/gallery">
                <button className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">
                  View Gallery
                </button>
              </Link>
              <button
                onClick={openLogoutModal}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Images</p>
                <p className="text-3xl font-bold" style={{ color: "#0B2C5F" }}>{images.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Years Covered</p>
                <p className="text-3xl font-bold" style={{ color: "#0B2C5F" }}>
                  {new Set(images.map(img => img.year).filter(Boolean)).size}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Admin Status</p>
                <p className="text-lg font-semibold text-green-600">● Active</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                <span className="text-2xl">👑</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Last Upload</p>
                <p className="text-sm font-semibold" style={{ color: "#0B2C5F" }}>
                  {images.length > 0 ? new Date(images[0]?.created_at).toLocaleDateString() : "No images"}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F2C23B20] flex items-center justify-center">
                <span className="text-2xl">⏱️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
          <div className="p-6 border-b border-gray-100" style={{ backgroundColor: "#0B2C5F" }}>
            <h2 className="text-xl font-bold text-white">
              {editingId ? "✏️ Edit Image" : "📤 Upload New Image"}
            </h2>
            <p className="text-white/70 text-sm mt-1">
              {editingId ? "Update the title, description, and year" : "Add a new image to the gallery"}
            </p>
          </div>
          
          <form onSubmit={handleUpload} className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter image title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2C23B] focus:border-transparent transition-all"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter image description"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2C23B] focus:border-transparent transition-all resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Year <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2C23B] focus:border-transparent transition-all bg-white"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select competition year</option>
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
              <p className="text-xs text-gray-400 mt-1">The year this photo was taken or the competition year</p>
            </div>

            {!editingId && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Image File <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F2C23B] transition-all">
                  <input
                    type="file"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F2C23B] file:text-[#0B2C5F] hover:file:bg-[#D4A017] transition-all cursor-pointer"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                  />
                  <p className="text-xs text-gray-400 mt-2">PNG, JPG, JPEG up to 5MB</p>
                </div>
                {image && (
                  <p className="text-sm text-green-600 mt-2">✓ Selected: {image.name}</p>
                )}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #F2C23B 0%, #D4A017 100%)",
                  color: "#0B2C5F"
                }}
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {editingId ? "Update Image" : "Upload Image"}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </span>
                )}
              </button>
              
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500 transition-all"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Gallery Management Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: "#0B2C5F" }}>
                Gallery Management
              </h2>
              <p className="text-gray-600 text-sm">Manage your uploaded images</p>
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-1">
              <span className="text-sm text-gray-600">{images.length} images total</span>
            </div>
          </div>

          {images.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No images yet</h3>
              <p className="text-gray-500">Upload your first image using the form above</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((item) => (
                <div key={item.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Year Badge on Image */}
                    {item.year && (
                      <div className="absolute top-2 right-2 bg-[#F2C23B] text-[#0B2C5F] text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        {item.year}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 line-clamp-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mt-1">{item.description}</p>
                    {item.year && (
                      <p className="text-xs text-[#D4A017] font-semibold mt-2">🏆 {item.year}</p>
                    )}
                    
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openDeleteModal(item)}
                        className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
