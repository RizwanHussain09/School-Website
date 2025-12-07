"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <>
      <ProgressBar />
      <Header />

      {/* Page Header with Background Image */}
      <motion.div
        className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            About Kent Schooling System
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md">Our Legacy, Mission, and Vision</p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* History Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1D2F5F] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                Our History
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Kent Schooling System was established with a vision to provide world-class education and develop young
                minds into confident, responsible citizens. Over the years, we have grown to become a beacon of
                educational excellence in the region.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With decades of experience and a commitment to innovation, KSS continues to shape the future leaders of
                tomorrow through holistic education and mentorship.
              </p>
            </div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
               
              <img
                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="School History - Modern Computer Lab"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm">Kent Schooling System - Established 1995</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-[#1D2F5F] to-[#2c3e50] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                Our Mission
              </h3>
            </div>
            <p className="text-lg leading-relaxed">
              To empower students with knowledge, skills, and values that enable them to become independent thinkers,
              compassionate leaders, and active contributors to society.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#E74C3C] to-[#c0392b] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-3xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                Our Vision
              </h3>
            </div>
            <p className="text-lg leading-relaxed">
              To be recognized globally as a leading educational institution that nurtures excellence, innovation, and
              character, preparing students for success in an ever-changing world.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div variants={itemVariants}>
          <h2
            className="text-4xl font-bold text-[#1D2F5F] mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: "Excellence", 
                icon: "⭐", 
                desc: "Striving for the highest standards in education",
                color: "from-blue-100 to-blue-50"
              },
              { 
                title: "Integrity", 
                icon: "🤝", 
                desc: "Building trust through honest and ethical practices",
                color: "from-green-100 to-green-50"
              },
              { 
                title: "Innovation", 
                icon: "💡", 
                desc: "Embracing creative approaches to learning",
                color: "from-purple-100 to-purple-50"
              },
              { 
                title: "Inclusion", 
                icon: "🌍", 
                desc: "Celebrating diversity and supporting every student",
                color: "from-orange-100 to-orange-50"
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className={`text-center p-8 bg-gradient-to-b ${value.color} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200`}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h4 className="text-2xl font-bold text-[#1D2F5F] mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      
      </motion.div>

      <Footer />
      <ScrollToTop />
    </>
  )
}