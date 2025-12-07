"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Annual Sports Day 2024",
      description: "Exciting track events during our annual sports day celebration",
      date: "March 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Science Laboratory Experiments",
      description: "Hands-on experiments in our state-of-the-art science lab",
      date: "2024",
    },
    {
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Well-stocked Library",
      description: "Peaceful reading environment with vast collection of books",
      date: "2024",
    },
    {
      url: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Art & Craft Exhibition",
      description: "Showcasing student creativity and artistic talent",
      date: "Nov 2023",
    },
    {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Basketball Tournament",
      description: "Inter-school basketball championship finals",
      date: "Feb 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Campus Aerial View",
      description: "Beautiful school campus with lush green surroundings",
      date: "2024",
    },
  ]

  const handleNext = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0))
  }

  const handlePrev = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section 
      id="gallery" 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
            <Camera className="text-[#1D2F5F]" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D2F5F] mb-4 font-playfair">
            Gallery Highlights
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Glimpses of our vibrant campus life and student achievements
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(i)}
                role="button"
                tabIndex={0}
              >
                <div className="aspect-square relative">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-300 text-xs">{image.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="text-white" size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="/gallery" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View Full Gallery
            <ChevronRight size={20} />
          </a>
        </motion.div>

        {/* Enhanced Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-300 hover:rotate-90 p-3 bg-black/50 backdrop-blur-sm rounded-full"
                  aria-label="Close"
                >
                  <X size={28} />
                </button>

                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="h-[50vh] relative">
                    <img 
                      src={galleryImages[selectedImage].url} 
                      alt="Full view" 
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrev()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNext()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{galleryImages[selectedImage].title}</h3>
                      <span className="text-gray-400 text-sm">{galleryImages[selectedImage].date}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{galleryImages[selectedImage].description}</p>
                    
                    <div className="text-gray-400 text-sm text-center">
                      Image {selectedImage + 1} of {galleryImages.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}