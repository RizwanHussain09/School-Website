"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"
import { X, ChevronLeft, ChevronRight, Filter, Camera, Calendar, Users, BookOpen, GraduationCap } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const categories = [
    { id: "all", label: "All Photos", icon: <Camera size={18} /> },
    { id: "academics", label: "Academics", icon: <BookOpen size={18} /> },
    { id: "sports", label: "Sports", icon: <Users size={18} /> },
    { id: "events", label: "Events", icon: <Calendar size={18} /> },
    { id: "facilities", label: "Facilities", icon: <GraduationCap size={18} /> },
    { id: "campus", label: "Campus", icon: <Filter size={18} /> },
  ]

  const galleryImages = [
    {
      id: 2,
      title: "Annual Sports Day 2024",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "sports",
      description: "Exciting track events during our annual sports day celebration",
      date: "March 2024",
    },
    {
      id: 3,
      title: "Science Laboratory Experiments",
      url: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "academics",
      description: "Hands-on experiments in our state-of-the-art science lab",
      date: "2024",
    },
    {
      id: 6,
      title: "Well-stocked Library",
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "facilities",
      description: "Peaceful reading environment with vast collection of books",
      date: "2024",
    },
    {
      id: 7,
      title: "Art & Craft Exhibition",
      url: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "events",
      description: "Showcasing student creativity and artistic talent",
      date: "Nov 2023",
    },
    {
      id: 8,
      title: "Basketball Tournament",
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "sports",
      description: "Inter-school basketball championship finals",
      date: "Feb 2024",
    },
    {
      id: 9,
      title: "Campus Aerial View",
      url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "campus",
      description: "Beautiful school campus with lush green surroundings",
      date: "2024",
    },
    {
      id: 10,
      title: "Robotics Workshop",
      url: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "academics",
      description: "Students learning robotics and AI programming",
      date: "Jan 2024",
    },
    {
      id: 14,
      title: "Chemistry Lab",
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "facilities",
      description: "Students conducting chemistry experiments",
      date: "2024",
    },
    {
      id: 15,
      title: "Playground Activities",
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "sports",
      description: "Physical education and outdoor games",
      date: "2024",
    },
  ]

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const handleNext = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0))
  }

  const handlePrev = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
  }

  return (
    <>
      <ProgressBar />
      <Header />

      {/* Page Header with Background Image */}
      <motion.div 
        className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D2F5F]/90 via-[#2c3e50]/80 to-[#1D2F5F]/90"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-white/10 to-white/5"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
           
          >
            <Camera className="text-white" size={40} />
          </motion.div>
          
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            School Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Capturing the vibrant journey of learning, creativity, and growth at Kent Schooling System
          </p>
        </motion.div>
      </motion.div>

      {/* Gallery Controls */}
      <motion.div 
        className="bg-gradient-to-b from-gray-50 to-white py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.icon}
                  <span className="text-sm md:text-base font-medium">{category.label}</span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <div className="text-gray-600 font-medium">View:</div>
              <div className="flex bg-white border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    viewMode === "grid" 
                      ? "bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    viewMode === "masonry" 
                      ? "bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Masonry
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div className="container mx-auto px-4 py-12 md:py-16">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                className="cursor-pointer relative h-80 rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(i)}
                viewport={{ once: true }}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      image.category === 'academics' ? 'bg-blue-500/20 text-blue-300' :
                      image.category === 'sports' ? 'bg-green-500/20 text-green-300' :
                      image.category === 'events' ? 'bg-purple-500/20 text-purple-300' :
                      image.category === 'facilities' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                    </span>
                    <span className="text-gray-300 text-sm">{image.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="text-white" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Masonry Layout
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                className="cursor-pointer relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedImage(i)}
                viewport={{ once: true }}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      image.category === 'academics' ? 'bg-blue-500/20 text-blue-300' :
                      image.category === 'sports' ? 'bg-green-500/20 text-green-300' :
                      image.category === 'events' ? 'bg-purple-500/20 text-purple-300' :
                      image.category === 'facilities' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-gray-500/20 text-gray-300'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </motion.div>

      {/* Gallery Description */}
      <motion.div 
        className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2F5F] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Preserving Precious Moments
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Our gallery is more than just pictures - it's a visual journey through the vibrant life at Kent Schooling System. 
            Each photograph captures the essence of our educational philosophy, showcasing moments of discovery, 
            creativity, collaboration, and achievement that define our school community.
          </p>
        </div>
      </motion.div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Image */}
                <div className="h-[60vh] relative">
                  <img
                    src={filteredImages[selectedImage].url || "/placeholder.svg"}
                    alt={filteredImages[selectedImage].title}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrev()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Info Section */}
                <div className="p-6 md:p-8 bg-gradient-to-b from-gray-900 to-black">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {filteredImages[selectedImage].title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          filteredImages[selectedImage].category === 'academics' ? 'bg-blue-500/20 text-blue-300' :
                          filteredImages[selectedImage].category === 'sports' ? 'bg-green-500/20 text-green-300' :
                          filteredImages[selectedImage].category === 'events' ? 'bg-purple-500/20 text-purple-300' :
                          filteredImages[selectedImage].category === 'facilities' ? 'bg-orange-500/20 text-orange-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {filteredImages[selectedImage].category.charAt(0).toUpperCase() + filteredImages[selectedImage].category.slice(1)}
                        </span>
                        <span className="text-gray-400">{filteredImages[selectedImage].date}</span>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      Image {selectedImage + 1} of {filteredImages.length}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-300 hover:rotate-90 p-3 bg-black/50 backdrop-blur-sm rounded-full"
                aria-label="Close"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </>
  )
}