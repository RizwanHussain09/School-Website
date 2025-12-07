"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProgressBar from "@/components/progress-bar"
import ScrollToTop from "@/components/scroll-to-top"

export default function AcademicsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const programs = [
    {
      title: "Primary Section (I-V)",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center", // Kids learning
      subjects: ["Mathematics", "English", "Science", "Social Studies", "Physical Education", "Arts"],
      description: "Building strong foundational skills through interactive and play-based learning",
    },
    {
      title: "Secondary Section (VI-VIII)",
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800&h=600&fit=crop&crop=center", // Science lab
      subjects: ["Mathematics", "English", "Science", "Social Studies", "Hindi", "Computer Science"],
      description: "Developing critical thinking, problem-solving skills and subject expertise",
    },
    {
      title: "Senior Secondary (IX-X)",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=center", // Classroom discussion
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Electives"],
      description: "Comprehensive preparation for board examinations with advanced curriculum",
    },
    {
      title: "Higher Secondary (XI-XII)",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center", // Graduation/cap
      subjects: ["Science Stream", "Commerce Stream", "Humanities Stream"],
      description: "Specialized education with career counseling for university preparation",
    },
  ]

  return (
    <>
      <ProgressBar />
      <Header />

      {/* Page Header with Background Image */}
      <motion.div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
        {/* Background Image - Changed */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&h=900&fit=crop')"
          }}
        >
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D2F5F]/80 via-[#1D2F5F]/60 to-transparent"></div>
        </div>
        
        {/* Text Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Academics
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-light">
            Excellence in Education Across All Levels
          </p>
          
          {/* Additional descriptive text */}
          <motion.p 
            className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover our comprehensive academic programs designed to nurture intellectual curiosity, 
            foster critical thinking, and prepare students for success in higher education and beyond.
          </motion.p>
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
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-4xl font-bold text-[#1D2F5F] mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Academic Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition group"
                whileHover={{ y: -10 }}
                variants={itemVariants}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-[#1D2F5F] mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1.5 bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white text-sm rounded-full shadow-sm hover:shadow-md transition"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Class Structure */}
        <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-lg mb-16 shadow-lg">
          <h2
            className="text-4xl font-bold text-[#1D2F5F] mb-8 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Class Structure & Details
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gradient-to-r from-[#1D2F5F] to-[#2c3e50] text-white">
                  <th className="px-6 py-4 text-left">Grade Level</th>
                  <th className="px-6 py-4">Sections</th>
                  <th className="px-6 py-4">Class Strength</th>
                  <th className="px-6 py-4">Teacher-Student Ratio</th>
                  <th className="px-6 py-4">Average Class Size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    class: "Primary (I-V)", 
                    sections: "A, B, C", 
                    strength: "30-35", 
                    ratio: "1:30",
                    size: "32 students"
                  },
                  { 
                    class: "Middle (VI-VIII)", 
                    sections: "A, B, C, D", 
                    strength: "35-40", 
                    ratio: "1:35",
                    size: "38 students"
                  },
                  { 
                    class: "Secondary (IX-X)", 
                    sections: "A, B, C", 
                    strength: "40-45", 
                    ratio: "1:40",
                    size: "42 students"
                  },
                  { 
                    class: "Senior (XI-XII)", 
                    sections: "A, B", 
                    strength: "35-40", 
                    ratio: "1:35",
                    size: "38 students"
                  },
                ].map((row, i) => (
                  <motion.tr 
                    key={i} 
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    whileHover={{ backgroundColor: "#f8fafc" }}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1D2F5F] text-left">{row.class}</td>
                    <td className="px-6 py-4 font-medium">{row.sections}</td>
                    <td className="px-6 py-4">{row.strength}</td>
                    <td className="px-6 py-4 font-semibold text-[#E74C3C]">{row.ratio}</td>
                    <td className="px-6 py-4">{row.size}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#1D2F5F]"
              whileHover={{ x: 5 }}
            >
              <h3 className="text-xl font-bold text-[#1D2F5F] mb-3">Academic Calendar</h3>
              <p className="text-gray-600">
                Two semesters per academic year with regular assessments and parent-teacher meetings
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#E74C3C]"
              whileHover={{ x: 5 }}
            >
              <h3 className="text-xl font-bold text-[#1D2F5F] mb-3">Teaching Methodology</h3>
              <p className="text-gray-600">
                Interactive learning with technology integration, project-based learning, and individualized attention
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2c3e50]"
              whileHover={{ x: 5 }}
            >
              <h3 className="text-xl font-bold text-[#1D2F5F] mb-3">Assessment System</h3>
              <p className="text-gray-600">
                Continuous comprehensive evaluation with formative and summative assessments throughout the year
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Curriculum Highlights */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-4xl font-bold text-[#1D2F5F] mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Curriculum Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "STEM Education",
                icon: "🔬",
                description: "Integrated Science, Technology, Engineering & Mathematics curriculum"
              },
              {
                title: "Language Skills",
                icon: "📚",
                description: "English, Hindi and optional third language proficiency"
              },
              {
                title: "Digital Literacy",
                icon: "💻",
                description: "Computer education integrated across all grade levels"
              },
              {
                title: "Life Skills",
                icon: "🌟",
                description: "Critical thinking, communication, and leadership development"
              },
            ].map((highlight, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-lg text-center border border-gray-200"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-[#1D2F5F] mb-3">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
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