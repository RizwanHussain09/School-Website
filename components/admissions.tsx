"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Users, Award, FileText, Users2, Target } from "lucide-react"

export default function Admissions() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const admissionSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Fill out our comprehensive online application form with all required documents",
      icon: FileText,
    },
    {
      step: "02",
      title: "Assessment Test",
      description: "Participate in our entrance examination to evaluate your academic level",
      icon: Target,
    },
    {
      step: "03",
      title: "Personal Interview",
      description: "Meet our admission team to discuss your goals and background",
      icon: Users2,
    },
    {
      step: "04",
      title: "Final Decision",
      description: "Receive your admission decision and enroll in your preferred program",
      icon: CheckCircle,
    },
  ]

  const requirements = [
    "Previous academic records and transcripts",
    "Entrance examination results",
    "Personal interview performance",
    "Parent and student interaction session",
    "Transfer certificate (if applicable)",
    "Proof of address and identity",
  ]

  const benefits = [
    "World-class faculty with advanced qualifications",
    "Modern infrastructure and technology-enabled classrooms",
    "Comprehensive curriculum aligned with national standards",
    "Personalized mentoring and counseling support",
    "Extracurricular activities and skill development programs",
    "Strong alumni network and career placement assistance",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} id="admissions" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1D2F5F] to-[#E74C3C] bg-clip-text text-transparent mb-3 md:mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Admissions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto px-2">
            Open doors to excellence. Join our community of achievers and innovators.
          </p>
        </motion.div>

        {/* Grade Levels Overview */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            {
              grade: "Primary (I-V)",
              age: "Age 5-11",
              focus: "Building foundational skills, creativity, and love for learning",
              icon: "📚",
              color: "from-blue-500 to-blue-600",
              highlight: "bg-blue-50",
              image:
                "https://images.unsplash.com/photo-1427504494785-cda0518dc5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            },
            {
              grade: "Secondary (VI-VIII)",
              age: "Age 11-14",
              focus: "Deepening knowledge, building analytical skills, and career awareness",
              icon: "🧠",
              color: "from-emerald-500 to-emerald-600",
              highlight: "bg-emerald-50",
              image:
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            },
            {
              grade: "Senior (IX-XII)",
              age: "Age 14-18",
              focus: "Advanced academics, competitive exam prep, and career guidance",
              icon: "🎓",
              color: "from-purple-500 to-purple-600",
              highlight: "bg-purple-50",
              image:
                "https://images.unsplash.com/photo-1522202176988-41030882cf91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                className="feature-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full"
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <motion.img
                    src={item.image || "/placeholder.svg"}
                    alt={item.grade}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className={`${item.highlight} p-4 sm:p-6 md:p-8`}>
                  <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#1D2F5F] mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {item.grade}
                  </h3>
                  <p className="text-[#E74C3C] font-semibold mb-3 text-xs sm:text-sm">{item.age}</p>
                  <p className="text-secondary mb-4 md:mb-6 leading-relaxed text-sm">{item.focus}</p>
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#1D2F5F] via-[#2c3e50] to-[#E74C3C] text-white py-2 sm:py-3 rounded-lg hover:shadow-lg transition font-semibold text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#1D2F5F] mb-8 md:mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Detailed Admission Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {admissionSteps.map((item, i) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#1D2F5F] to-[#E74C3C] text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent size={24} className="sm:w-7 sm:h-7" />
                    </motion.div>
                    <h4 className="font-bold text-[#1D2F5F] mb-2 text-base sm:text-lg">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">{item.description}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-7 sm:top-8 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#E74C3C] rotate-45"></div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Requirements and Benefits */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex-shrink-0">
                <FileText className="text-[#1D2F5F] w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#1D2F5F]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Requirements
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {requirements.map((req, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 pb-3 sm:pb-4 border-b border-gray-200 last:border-0"
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CheckCircle className="text-[#E74C3C] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary text-sm sm:text-base">{req}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex-shrink-0">
                <Award className="text-[#1D2F5F] w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#1D2F5F]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Why Choose Us
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 pb-3 sm:pb-4 border-b border-gray-200 last:border-0"
                  initial={{ x: 20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Users className="text-[#27AE60] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary text-sm sm:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative bg-cover bg-center rounded-xl overflow-hidden p-6 sm:p-8 md:p-12 text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            backgroundAttachment: "fixed",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D2F5F]/95 to-[#2c3e50]/90"></div>
          <div className="relative z-10 text-center">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ready to Join Kent Schooling System?
            </h3>
            <p className="text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Take the first step towards an exceptional educational journey. Our admission counselors are ready to help
              you find the perfect program for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#E74C3C] to-[#c0392b] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.08, boxShadow: "0 15px 35px rgba(231, 76, 60, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Application
              </motion.button>
              <motion.button
                className="bg-white text-[#1D2F5F] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Admissions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
